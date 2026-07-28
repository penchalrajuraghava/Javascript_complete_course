/*
=========================================
Revealing Module Pattern
=========================================
*/

const UserModule = (() => {
  function login() {
    console.log("User Logged In");
  }

  function logout() {
    console.log("User Logged Out");
  }

  return {
    login,
    logout,
  };
})();

UserModule.login();
