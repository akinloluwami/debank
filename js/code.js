let deviceWidth = window.innerWidth;

window.addEventListener("load", () => {
  if (deviceWidth < 500) {
    window.location.href = "/hi";
  }
});

window.addEventListener("resize", () => {
  deviceWidth = window.innerWidth;
  if (deviceWidth < 500) {
    window.location.href = "/hi";
  }
});
