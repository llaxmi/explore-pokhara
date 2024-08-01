document.querySelector(".relative").addEventListener("mouseenter", function () {
  this.querySelector(".absolute").classList.remove("hidden");
});
document.querySelector(".relative").addEventListener("mouseleave", function () {
  this.querySelector(".absolute").classList.add("hidden");
});
