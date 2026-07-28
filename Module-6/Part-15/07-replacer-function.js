/*
=========================================
Replacer Function
=========================================
*/

const user = {
  username: "Sunny",
  password: "123456",
  role: "Admin",
};

const json = JSON.stringify(
  user,
  (key, value) => {
    if (key === "password") {
      return undefined;
    }

    return value;
  },
  4,
);

console.log(json);
