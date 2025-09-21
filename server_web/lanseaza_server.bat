@echo off
REM Start the Python web server
start /B python server_web.py

REM Wait a moment for server to start
timeout /t 2 /nobreak > nul

REM Open the default browser
start http://localhost:5678/index.html

echo Server running at http://localhost:5678
echo Press Ctrl+C to stop the server

REM Keep the window open
pause
