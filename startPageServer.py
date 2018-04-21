import http.server
import socketserver
import os

PORT = 8000

os.chdir('/home/gaurav/Projects/startpage/')

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
print("serving at port", PORT)
httpd.serve_forever()
