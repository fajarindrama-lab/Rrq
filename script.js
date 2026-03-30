function togglePassword() {
  let pass = document.getElementById("password");

  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah!");
  }
}