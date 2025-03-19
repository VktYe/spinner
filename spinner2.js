const spinnerChar = ["|", "/", "-", "\\", "|"];


let delay = 0;

for (const char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, delay);
  delay += 200;
}

