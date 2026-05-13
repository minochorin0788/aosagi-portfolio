const pageTopButton = document.querySelector(".page-top");

window.addEventListener("scroll", () => {
  const isVisible = window.scrollY > 500;
  pageTopButton.classList.toggle("is-visible", isVisible);
});

pageTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
