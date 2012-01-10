#! /usr/local/bin/node

ip = '$$IP$$';
selection = process.env.CODA_SELECTED_TEXT;
lineNumber = Number(process.env.CODA_LINE_NUMBER);
lineEnding = process.env.CODA_LINE_ENDING;

originalDoc = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  originalDoc += chunk;
});

process.stdin.on('end', function () {
  lines = originalDoc.split(lineEnding);
  newLine = 'console.log("' + ip + selection + ': #{' + selection + '}")';
  output = lines.slice(0, lineNumber);
  output.push(newLine);
  output = output.concat(lines.slice(lineNumber));
  process.stdout.write(output.join(lineEnding));
});