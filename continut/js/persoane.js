
function incarcaPersoane() {
    console.log("Functia incarcaPersoane a fost apelata");
    
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parsare XML si generare tabel
            creeazaTabel(this);
        }
    };
    
    
    xhttp.open("GET", "http://localhost:5678/resurse/persoane.xml", true);
    xhttp.send();
}

function creeazaTabel(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var tabel = "<table class='tabel-persoane'>";
    
    
    tabel += "<tr>";
    tabel += "<th>ID</th>";
    tabel += "<th>Nume</th>";
    tabel += "<th>Prenume</th>";
    tabel += "<th>Vârsta</th>";
    tabel += "<th>Adresa</th>";
    tabel += "<th>Hobby</th>";
    tabel += "</tr>";
    
    
    var persoane = xmlDoc.getElementsByTagName("persoana");
    
    
    for (i = 0; i < persoane.length; i++) {
        tabel += "<tr>";
        
        
        var id = persoane[i].getAttribute("id");
        tabel += "<td>" + id + "</td>";
        
        
        var nume = persoane[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue.trim();
        var prenume = persoane[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue;
        var varsta = persoane[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue;
        
        
        tabel += "<td>" + nume + "</td>";
        tabel += "<td>" + prenume + "</td>";
        tabel += "<td>" + varsta + "</td>";
        
        
        var adresaElement = persoane[i].getElementsByTagName("adresa")[0];
        var strada = adresaElement.getElementsByTagName("strada")[0].childNodes[0].nodeValue;
        var numar = adresaElement.getElementsByTagName("numar")[0].childNodes[0].nodeValue;
        var localitate = adresaElement.getElementsByTagName("localitate")[0].childNodes[0].nodeValue;
        var judet = adresaElement.getElementsByTagName("judet")[0].childNodes[0].nodeValue;
        var tara = adresaElement.getElementsByTagName("tara")[0].childNodes[0].nodeValue;
        
        var adresaCompleta = strada + " " + numar + ", " + localitate + ", " + judet + ", " + tara;
        tabel += "<td>" + adresaCompleta + "</td>";
        
        
        var hobby = persoane[i].getElementsByTagName("hobby")[0].childNodes[0].nodeValue;
        tabel += "<td>" + hobby + "</td>";
        
        tabel += "</tr>";
    }
    
    tabel += "</table>";
    
    
    
    
    
    document.getElementById("continut_persoane").innerHTML = tabel;
}