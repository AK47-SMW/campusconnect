const filterButtons = document.querySelectorAll(".chip");
const matchCards = document.querySelectorAll(".match-card");

const setActiveFilter = (target) => {
  filterButtons.forEach((button) => button.classList.remove("active"));
  target.classList.add("active");
  const filter = target.dataset.filter;

  matchCards.forEach((card) => {
    const type = card.dataset.type;
    const shouldShow = filter === "all" || filter === type;
    card.style.display = shouldShow ? "block" : "none";
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveFilter(button));
});
