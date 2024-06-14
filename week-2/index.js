const http = require('http');
const fs = require('fs');
const path = require('path');

// Utility function to handle responses
function sendResponse(res, statusCode, data, contentType = 'application/json') {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(data);
}

// Handle file creation
function createFile(res, filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            sendResponse(res, 500, JSON.stringify({ error: err.message }));
        } else {
            sendResponse(res, 201, JSON.stringify({ message: 'File created successfully' }));
        }
    });
}

// Handle file reading
function readFile(res, filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                sendResponse(res, 404, JSON.stringify({ error: 'File not found' }));
            } else {
                sendResponse(res, 500, JSON.stringify({ error: err.message }));
            }
        } else {
            sendResponse(res, 200, data, 'text/plain');
        }
    });
}

// Handle file deletion
function deleteFile(res, filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                sendResponse(res, 404, JSON.stringify({ error: 'File not found' }));
            } else {
                sendResponse(res, 500, JSON.stringify({ error: err.message }));
            }
        } else {
            sendResponse(res, 200, JSON.stringify({ message: 'File deleted successfully' }));
        }
    });
}

// Create the HTTP server
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const filePath = path.join(__dirname, url.pathname);

    if (req.method === 'POST' && url.pathname === '/create') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { fileName, content } = JSON.parse(body);
            const fullPath = path.join(__dirname, fileName);
            createFile(res, fullPath, content);
        });
    } else if (req.method === 'GET' && url.pathname.startsWith('/read')) {
        const fileName = url.searchParams.get('fileName');
        if (fileName) {
            const fullPath = path.join(__dirname, fileName);
            readFile(res, fullPath);
        } else {
            sendResponse(res, 400, JSON.stringify({ error: 'fileName query parameter is required' }));
        }
    } else if (req.method === 'DELETE' && url.pathname === '/delete') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { fileName } = JSON.parse(body);
            const fullPath = path.join(__dirname, fileName);
            deleteFile(res, fullPath);
        });
    } else {
        sendResponse(res, 404, JSON.stringify({ error: 'Not Found' }));
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
