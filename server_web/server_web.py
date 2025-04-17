import socket
import os
import threading
import gzip
import io

def proceseaza_client(clientsocket):
    print('S-a conectat un client.')
    cerere = ''
    linieDeStart = ''
    while True:
        buf = clientsocket.recv(1024)
        if len(buf) < 1:
            break
        cerere += buf.decode()
        print('S-a citit mesajul: \n---------------------------\n' + cerere + '\n---------------------------')
        pozitie = cerere.find('\r\n')
        if pozitie > -1 and linieDeStart == '':
            linieDeStart = cerere[0:pozitie]
            print('S-a citit linia de start din cerere: ##### ' + linieDeStart + ' #####')
            break
    print('S-a terminat citirea.')

    if linieDeStart == '':
        clientsocket.close()
        print('S-a terminat comunicarea cu clientul - nu s-a primit niciun mesaj.')
        return

    elementeLineDeStart = linieDeStart.split()
    numeResursaCeruta = elementeLineDeStart[1]
    if numeResursaCeruta == '/':
        numeResursaCeruta = '/index.html'
    
    numeFisier = '../continut' + numeResursaCeruta

    fisier = None
    try:
        fisier = open(numeFisier, 'rb')
        continut = fisier.read()

        # COMPRESIE GZIP
        buf_io = io.BytesIO()
        with gzip.GzipFile(fileobj=buf_io, mode='wb') as f_gzip:
            f_gzip.write(continut)
        continut_gzip = buf_io.getvalue()

        numeExtensie = numeFisier[numeFisier.rfind('.')+1:]
        tipuriMedia = {
            'html': 'text/html; charset=utf-8',
            'css': 'text/css; charset=utf-8',
            'js': 'text/javascript; charset=utf-8',
            'png': 'image/png',
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'gif': 'image/gif',
            'ico': 'image/x-icon',
            'xml': 'application/xml; charset=utf-8',
            'json': 'application/json; charset=utf-8'
        }
        tipMedia = tipuriMedia.get(numeExtensie, 'application/octet-stream')

        # Trimite răspunsul HTTP
        headers = [
            'HTTP/1.1 200 OK',
            f'Content-Length: {len(continut_gzip)}',
            f'Content-Type: {tipMedia}',
            'Content-Encoding: gzip',
            'Server: My PW Server',
            '\r\n'
        ]
        clientsocket.sendall('\r\n'.join(headers).encode('utf-8'))
        clientsocket.sendall(continut_gzip)

    except IOError:
        msg = f'Eroare! Resursa cerută {numeResursaCeruta} nu a putut fi găsită!'
        print(msg)
        headers = [
            'HTTP/1.1 404 Not Found',
            f'Content-Length: {len(msg.encode("utf-8"))}',
            'Content-Type: text/plain; charset=utf-8',
            'Server: My PW Server',
            '\r\n'
        ]
        clientsocket.sendall('\r\n'.join(headers).encode('utf-8'))
        clientsocket.sendall(msg.encode())

    finally:
        if fisier:
            fisier.close()
        clientsocket.close()
        print('S-a terminat comunicarea cu clientul.')

# SERVER PRINCIPAL
serversocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serversocket.bind(('', 5678))
serversocket.listen(5)
print('Serverul rulează și așteaptă conexiuni...')

while True:
    (clientsocket, address) = serversocket.accept()
    threading.Thread(target=proceseaza_client, args=(clientsocket,)).start()

