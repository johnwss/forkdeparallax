document.addEventListener("scroll", () => {
  let parallaxContent = document.querySelector(".section-image--inner-image");
  let backgroundImage = document.querySelector(".section-image-container");
  let unfreeze = parallaxContent.getBoundingClientRect().top;

  unfreeze <= 0
    ? backgroundImage.classList.add("no-stick")
    : backgroundImage.classList.remove("no-stick");
});
