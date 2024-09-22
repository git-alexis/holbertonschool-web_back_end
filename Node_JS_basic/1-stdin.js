// Display welcome message
console.log('Welcome to Holberton School, what is your name?');

// Handle user input from stdin
process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);

  // Exit process after showing the name
  process.exit();
});

// Listen for process exit and display closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});
