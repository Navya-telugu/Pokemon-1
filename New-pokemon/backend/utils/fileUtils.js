const fs = require('fs');
const path = require('path');

// Data file path
const dataFilePath = path.join(__dirname, '../models/data.json');

// Helper function to read data from the file
const readData = () => {
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
};

// Helper function to write data to the file
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
