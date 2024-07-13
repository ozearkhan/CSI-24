

# Production-Ready RESTful API with Node.js and Express

This project is a production-ready RESTful API built with Node.js and Express that supports basic CRUD operations on a resource (users).

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Set Up Environment Variables](#set-up-environment-variables)
  - [Run the Server](#run-the-server)
- [API Endpoints](#api-endpoints)
  - [Create a User](#create-a-user)
  - [Read All Users](#read-all-users)
  - [Read a Single User by ID](#read-a-single-user-by-id)
  - [Update a User by ID](#update-a-user-by-id)
  - [Delete a User by ID](#delete-a-user-by-id)
- [License](#license)

## Prerequisites

- Node.js installed on your machine (version 12.x or higher)
- MongoDB installed and running on your local machine, or use a cloud MongoDB service like MongoDB Atlas

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ozearkhan/CSI-24
cd week-6
```

### Install Dependencies

Install the required npm packages:

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root of the project with the following content:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/restfulapi
```

### Run the Server

Run the server using Node.js:

```bash
node server.js
```

The server will start and listen on the port specified in the `.env` file.

## API Endpoints

### Create a User

- **URL:** `/api/users`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Ozear Khan",
    "email": "ozearkhan1224@gmail.com",
    "age": 22
  }
  ```

### Read All Users

- **URL:** `/api/users`
- **Method:** `GET`

### Read a Single User by ID

- **URL:** `/api/users/{id}`
- **Method:** `GET`

### Update a User by ID

- **URL:** `/api/users/{id}`
- **Method:** `PUT`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "Ozear Khan",
    "email": "ozearkhan1224@gmail.com",
    "age": 22
  }
  ```

### Delete a User by ID

- **URL:** `/api/users/{id}`
- **Method:** `DELETE`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

