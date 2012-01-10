#! /usr/local/bin/node

ip = '$$IP$$';
selection = process.env.CODA_SELECTED_TEXT;
lineNumber = Number(process.env.CODA_LINE_NUMBER);
lineEnding = process.env.CODA_LINE_ENDING;
lineIndex = process.env.CODA_LINE_INDEX;

originalDoc = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
  originalDoc += chunk;
});

process.stdin.on('end', function () {
  lines = originalDoc.split(lineEnding);
  line = lines[lineNumber - 1];
  line = line.substr(0, lineIndex) + ip + line.substr(lineIndex)
  lines[lineNumber - 1] = line;
  newLine = 'console.log("' + ip + selection + ': #{' + selection + '}")';
  if (lineNumber >= 1) {
    output = lines.slice(0, lineNumber - 1);
    output = output.concat(lines.slice(lineNumber, lineNumber + 1));
    output = output.concat(lines.slice(lineNumber - 1, lineNumber));
    output = output.concat(lines.slice(lineNumber + 1));
    process.stdout.write(output.join(lineEnding));
  } else {
    process.stdout.write(lines.join(lineEnding));
  }
});