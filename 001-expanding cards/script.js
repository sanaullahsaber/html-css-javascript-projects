const panels = document.querySelectorAll(".panel");

panels.forEach((currentElement) => {
  currentElement.addEventListener("click", () => {
    removeActiveClasses();
    currentElement.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((currentElement) => {
    currentElement.classList.remove("active");
  });
};
