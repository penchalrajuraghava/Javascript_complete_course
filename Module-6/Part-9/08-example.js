/*
=========================================
Real World Example
=========================================
*/

const settings = {
  theme: "Dark",
  language: "English",
};

Object.freeze(settings);

// User cannot modify settings

settings.theme = "Light";

console.log(settings);
