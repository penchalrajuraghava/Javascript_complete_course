/*
=========================================
Real World Example
=========================================
*/

const defaultSettings = {
  theme: "Light",
  language: "English",
  notifications: true,
};

const userSettings = {
  ...defaultSettings,
  theme: "Dark",
};

console.log(userSettings);
