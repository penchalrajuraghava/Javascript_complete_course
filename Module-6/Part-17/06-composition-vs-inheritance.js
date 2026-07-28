/*
=========================================
Composition vs Inheritance
=========================================
*/

const canRun = {
  run() {
    console.log("Running");
  },
};

const canJump = {
  jump() {
    console.log("Jumping");
  },
};

const athlete = {
  ...canRun,
  ...canJump,
};

athlete.run();
athlete.jump();
