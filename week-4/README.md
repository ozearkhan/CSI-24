

# Basic Express.js Web Server

This is a basic web server created using Express.js. It handles basic routing and middleware and responds to different endpoints.

## Prerequisites

- Node.js installed on your machine (version 12.x or higher).

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ozearkhan/CSI-24
cd week-4
```

### 2. Install dependencies

Install the required npm packages:

```bash
npm install
```

### 3. Run the server

Run the server using Node.js:

```bash
node server.js
```

The server will start and listen on port 3000.

## API Endpoints

### 1. Home Page

- **URL:** `/`
- **Method:** `GET`
- **Response:** `Welcome to the Home Page!`

**Example using cURL:**

```bash
curl http://localhost:3000/
```

### 2. About Page

- **URL:** `/about`
- **Method:** `GET`
- **Response:** `Welcome to the About Page!`

**Example using cURL:**

```bash
curl http://localhost:3000/about
```

### 3. 404 Not Found

- **URL:** Any undefined route, e.g., `/undefined`
- **Method:** Any
- **Response:** `404 Not Found`

**Example using cURL:**

```bash
curl http://localhost:3000/undefined
```

## Middleware

### Logging Middleware

Logs each incoming request to the console with the HTTP method and URL.

### JSON Body Parser Middleware

Parses incoming JSON request bodies.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```
