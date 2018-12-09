import http.server
import socketserver
import os

PORT = 8001

#os.chdir('Projects/startpage/')

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
print("serving at port", PORT)
httpd.serve_forever()
