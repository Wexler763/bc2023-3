const fs = require('fs');

const inputFile = 'data.json';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    const necessaryData = jsonData.map(item => `${item.exchangedate}:${item.rate}`);

    const outputData = JSON.stringify(necessaryData, null, 2);

    const outputFile = 'output.txt';

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
