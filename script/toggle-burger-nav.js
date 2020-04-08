document.getElementById("burger").addEventListener("click", () => {
  if (document.getElementById("nav-mobile").classList.contains("visible")) {
    document.getElementById("nav-mobile").classList.remove("visible");
  } else {
    document.getElementById("nav-mobile").classList.add("visible");
  }
});
