
---

# Asynchronous Programing in Node.js

This project demonstrates how to read files asynchronously in Node.js using callbacks, Promises, and Async/Await. It includes a simple utility for reading files and a main application that processes the content of multiple files.

## Project Structure

```
project-root/
  ├── src/
  │   ├── utils/
  │   │   ├── fileReaderCallback.js
  │   │   ├── fileReaderCallback.js
  │   ├── app.js
  ├── example.txt
  ├── file1.txt
  ├── file2.txt
  ├── package.json
```

- `src/utils/fileReader.js`: Contains the utility function to read files using Callback & Promises.
- `src/app.js`: Main application logic to read and process files using async/await.
- `example.txt`, `file1.txt`, `file2.txt`: Sample text files for testing.
- `package.json`: Project metadata and dependencies.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ozearkhan/CSI-24/
   ```

2. Navigate to the project directory:
   ```bash
   cd week-3/
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Ensure you have `example.txt`, `file1.txt`, and `file2.txt` in the project root directory with some sample content.

2. Start the application:
   ```bash
   npm start
   ```

3. You should see the content of `file1.txt` and `file2.txt` processed and logged to the console.

## Code Explanation

### Callbacks

The initial code uses callbacks for asynchronous file reading:

```javascript
const fs = require('fs');

function readFileCallback(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

readFileCallback('example.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});
```

### Promises

The callback-based code is converted to use Promises for better readability:

```javascript
const fs = require('fs');

function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise('example.txt')
  .then(data => {
    console.log('File content:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
```

### Async/Await

The Promises-based code is further refined to use Async/Await for even better readability and error handling:

```javascript
const { readFilePromise } = require('./utils/fileReader');

async function readFilesAndProcess() {
  try {
    const data1 = await readFilePromise('file1.txt');
    const data2 = await readFilePromise('file2.txt');
    console.log('Processing data from both files:', data1, data2);
  } catch (err) {
    console.error('Error reading files:', err);
  }
}

readFilesAndProcess();
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


---

