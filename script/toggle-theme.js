document.getElementById("light-button").addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "light");
});

document.getElementById("dark-button").addEventListener("click", () => {
  document.documentElement.setAttribute("data-theme", "dark");
});
