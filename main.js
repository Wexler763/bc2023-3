const fs = require('fs');

// Replace 'your-input.json' with the path to your JSON file.
const inputFile = 'data.json';

// Read the JSON file.
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    // Parse the JSON data.
    const jsonData = JSON.parse(data);

    // Extract the necessary data.
    const necessaryData = jsonData.map(item => `${item.exchangedate}:${item.rate}`);

    // Convert the extracted data to a string.
    const outputData = JSON.stringify(necessaryData, null, 2);

    // Specify the path for the output file (output.txt).
    const outputFile = 'output.txt';

    // Write the extracted data to the output.txt file.
    fs.writeFile(outputFile, outputData, 'utf8', err => {
      if (err) {
        console.error('Error writing to the output file:', err);
        return;
      }
      console.log('Data has been written to output.txt');
    });
  } catch (jsonParseError) {
    console.error('Error parsing JSON:', jsonParseError);
  }
});
