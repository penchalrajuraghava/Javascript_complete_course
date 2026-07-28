/*
=========================================
Working with API Response
=========================================
*/

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())

  .then((users) => {
    console.log(users);
  })

  .catch((error) => {
    console.log(error);
  });
