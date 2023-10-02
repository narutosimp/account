document.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    // Close the drop-down menu
    document.querySelector(".dropdown").classList.remove("active");
  }
});
