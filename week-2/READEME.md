
```markdown
# File Management Tool

This is a simple file management tool built with Node.js using core modules such as File System (`fs`), Path (`path`), and HTTP (`http`). This tool allows you to create, read, and delete files via HTTP requests.

## Prerequisites

- Node.js installed on your machine (version 12.x or higher).

## Getting Started

### 1. Clone the repository

```bash
https://github.com/ozearkhan/CSI-24/tree/main/week-2/file-management-tool
cd file-management-tool
```

### 2. Install dependencies

There are no external dependencies required for this project. It uses Node.js core modules only.

### 3. Run the server

```bash
node server.js
```

The server will start and listen on port 3000.

## API Endpoints

### 1. Create a File

- **URL:** `/create`
- **Method:** `POST`
- **Headers:**
    - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fileName": "example.txt",
    "content": "This is an example file."
  }
  ```

**Example using cURL:**

```bash
curl -X POST http://localhost:3000/create \
-H "Content-Type: application/json" \
-d '{
  "fileName": "example.txt",
  "content": "This is an example file."
}'
```

### 2. Read a File

- **URL:** `/read`
- **Method:** `GET`
- **Query Parameter:** `fileName` (The name of the file to read)

**Example using cURL:**

```bash
curl -X GET "http://localhost:3000/read?fileName=example.txt"
```

### 3. Delete a File

- **URL:** `/delete`
- **Method:** `DELETE`
- **Headers:**
    - `Content-Type: application/json`
- **Body:**
  ```json
  {
    "fileName": "example.txt"
  }
  ```

**Example using cURL:**

```bash
curl -X DELETE http://localhost:3000/delete \
-H "Content-Type: application/json" \
-d '{
  "fileName": "example.txt"
}'
```

## Using Postman

You can also use Postman to interact with the API.

### 1. Create a File
- Create a new request.
- Set method to `POST`.
- Set URL to `http://localhost:3000/create`.
- Set `Content-Type` to `application/json` in the headers.
- Set the body to:
  ```json
  {
    "fileName": "example.txt",
    "content": "This is an example file."
  }
  ```

### 2. Read a File
- Create a new request.
- Set method to `GET`.
- Set URL to `http://localhost:3000/read?fileName=example.txt`.

### 3. Delete a File
- Create a new request.
- Set method to `DELETE`.
- Set URL to `http://localhost:3000/delete`.
- Set `Content-Type` to `application/json` in the headers.
- Set the body to:
  ```json
  {
    "fileName": "example.txt"
  }
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

https://github.com/ozearkhan/CSI-24/tree/main/week-2/file-management-tool. 
This README file provides instructions for setting up, running, and testing the file management tool, including examples of how to use the API endpoints with `cURL` and Postman.
