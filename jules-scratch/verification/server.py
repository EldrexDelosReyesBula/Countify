import http.server
import socketserver
import os

PORT = 8000
web_dir = os.path.join(os.path.dirname(__file__), '../../')
os.chdir(web_dir)

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        if self.path.endswith('.js'):
            self.send_header('Content-type', 'application/javascript')
        elif self.path.endswith('.css'):
            self.send_header('Content-type', 'text/css')
        super().end_headers()

httpd = socketserver.TCPServer(("", PORT), MyHttpRequestHandler)

print(f"Serving at http://localhost:{PORT}")
httpd.serve_forever()