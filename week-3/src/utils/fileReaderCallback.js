const fs = require('fs');

function readFileCallback(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

module.exports = {
    readFileCallback
};
