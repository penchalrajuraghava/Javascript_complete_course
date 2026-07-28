/*
=========================================
Error Object
=========================================
*/

try {
  const result = 10 / 0;

  if (!Number.isFinite(result)) {
    throw new Error("Division by zero is not allowed.");
  }
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
