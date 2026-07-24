/*
Closure

Inner function remembers variables
from outer function.
*/

function counter() {
  let count = 0;

  return function () {
    count++;

    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();
