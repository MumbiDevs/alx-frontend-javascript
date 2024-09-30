// Function that returns a constant string
export function taskFirst() {
  // Define a constant string 'task' since it won't be modified
  const task = 'I prefer const when I can.';
  // Return the value of the constant 'task'
  return task;
}

// Function that returns a simple string
export function getLast() {
  // Return the string ' is okay'
  return ' is okay';
}

// Function that concatenates strings using 'let' and 'const'
export function taskNext() {
  // Declare a variable 'combination' with let, as it will be modified
  let combination = 'But sometimes let';
  // Append the string returned by getLast() to 'combination'
  combination += getLast();

  // Return the combined string
  return combination;
}
