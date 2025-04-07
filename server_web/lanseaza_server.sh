#!/bin/bash


python3 server_web.py &


SERVER_PID=$!


sleep 2


if command -v xdg-open &> /dev/null; then
    xdg-open http://localhost:5678/index.html  # Linux
elif command -v open &> /dev/null; then
    open http://localhost:5678/index.html      # macOS
elif command -v start &> /dev/null; then
    start http://localhost:5678/index.html     # Windows
else
    echo "Could not detect how to open a browser on this system."
    echo "Please open http://localhost:5678/index.html manually."
fi


echo "Server running at http://localhost:5678"
echo "Press Ctrl+C to stop the server"


wait $SERVER_PID
