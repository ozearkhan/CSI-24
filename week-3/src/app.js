const { readFilePromise } = require('./utils/fileReaderPromises');
const { readFileCallback} = require('./utils/fileReaderCallback');


// Callback function to read files and process their contents
readFileCallback('example.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Reading file data using callbacks "data":', data);
    }
});

// Using only promise to read files and process their contents
readFilePromise('file1.txt')
    .then(data => {
        console.log('File content:', data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });

// Async function to read files and process their contents
async function readFilesAndProcess() {
    try {
        const data1 = await readFilePromise('file1.txt');

        console.log('Processing data from file using async/await:', data1);
    } catch (err) {
        console.error('Error reading files:', err);
    }
}

 readFilesAndProcess().catch(err => {
     console.error('Error reading files:', err);
 });