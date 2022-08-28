const deviceWidth = window.innerWidth;

window.addEventListener("load", () => {
  if (deviceWidth < 900) {
    window.location.href = "/hi";
  }
});
