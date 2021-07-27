let timer = 100;
const output = [`\r|`,`\r/`, `\r-`, '\r\\', `\r|`,`\r/`, `\r-`, '\r\\', `\r|`,`\r/`, `\r-`, '\r\\']
for (let i = 0; i < output.length; i++ ) {
  timer += 200
  setTimeout(() => {
    process.stdout.write(output[i]);
  }, timer);
}
