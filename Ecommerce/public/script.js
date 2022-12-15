const bar = document.querySelector(".bar");
const nav = document.querySelector(".navbarLinks");
const close = document.querySelector(".close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
