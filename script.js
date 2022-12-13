// Generates a password function
function generatePassword() {
  const length = 16;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|<>:";
  let password = "";
  for (let i = 0, n = characters.length; i < length; ++i) {
    password += characters.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("password").innerHTML = password;
}
