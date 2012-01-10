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
  lineWithCursor = line.substr(0, lineIndex) + ip + line.substr(lineIndex)
  if (lineNumber >= 1) {
    output = lines.slice(0, lineNumber);
    output.push(lineWithCursor);
    output = output.concat(lines.slice(lineNumber));
  } else {
    output = lines.slice(0, lineNumber - 1);
    output.push(lineWithCursor);
    output = output.concat(lines.slice(lineNumber));    
  }
  process.stdout.write(output.join(lineEnding));
});