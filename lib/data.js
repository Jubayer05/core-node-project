/*
 * Title: Store all the data
 * Description: All the data values reference will be stored in this file
 * Author: Jubayer Ahmed
 * Date: 13 June, 2023
 *
 */

const fs = require('fs');
const path = require('path');

// Module scaffolding
const lib = {};

// base directory of the data folder
lib.basedir = path.join(__dirname, '/../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
  // open file for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, 'wx', (err1, fileDescriptor) => {
    if (!err1 && fileDescriptor) {
      // convert data to string
      const stringData = JSON.stringify(data);

      // write data to file and then close it
      fs.writeFile(fileDescriptor, stringData, (err2) => {
        if (!err2) {
          fs.close(fileDescriptor, (err3) => {
            if (!err3) {
              callback(false);
            } else {
              callback('Error closing file descriptor');
            }
          });
        } else {
          callback('Error writing a new file');
        }
      });
    } else {
      callback('Could not create file, it may already exists!');
    }
  });
};

// read data from a file
lib.read = (dir, file, callback) => {
  fs.readFile(`${lib.basedir + dir}/${file}.json`, 'utf-8', (err1, data) => {
    callback('err', data);
  });
};

// update data from a existing file
lib.update = (dir, file, data, callback) => {
  // file open for writing
  fs.open(`${lib.basedir + dir}/${file}.json`, 'r+', (err1, fileDescriptor) => {
    if (!err1 && fileDescriptor) {
      // convert the data to string
      const stringData = JSON.stringify(data);

      // truncate the file
      fs.ftruncate(fileDescriptor, (err2) => {
        if (!err2) {
          // write the file and close it
          fs.writeFile(fileDescriptor, stringData, (err3) => {
            if (!err3) {
              fs.close(fileDescriptor, (err4) => {
                if (!err4) {
                  callback(false);
                } else {
                  callback('Error closing file');
                }
              });
            } else {
              callback('Error writing file');
            }
          });
        } else {
          callback('Error truncating file');
        }
      });
    } else {
      callback('Error updating. FIle may not exist');
    }
  });
};

// delete existing file
lib.delete = (dir, file, callback) => {
  // unlink file
  fs.unlink(`${lib.basedir}/${dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback('Error deleting file');
    }
  });
};

// Export the module
module.exports = lib;
