const splash = document.getElementById("splash");
const login = document.getElementById("login");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");

// Show login after splash
setTimeout(() => {
  splash.style.display = "none";
  login.classList.remove("hidden");
}, 2500);

// Login
loginBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  if (!name) {
    alert("Enter your name");
    return;
  }

  localStorage.setItem("kristaUser", name);
  window.location.href = "feed.html";
});