const seasonFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const cards = document.querySelectorAll(".mashroom-filtered-guide .card");

const cardsFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const masroomId = `mashroom-${index + 1}`;
  card.style.viewTransitionName = `card-${masroomId}`;
});

seasonFilter.addEventListener("change", updateCards);
edibleFilter.addEventListener("change", updateCards);

function updateCards(e) {
  const filterName = e.target.name;
  cardsFilters[filterName] = e.target.value;

  function filterCards() {
    cards.forEach((card) => {
      const season = card.querySelector("[data-season]").dataset.season;
      const edible = card.querySelector("[data-edible]").dataset.edible;
      console.log(edible);

      const matchSeasonFilter = season === cardsFilters.season;
      const matchedibleFilter = edible === cardsFilters.edible;

      if (
        (matchSeasonFilter || cardsFilters.season === "all") &&
        (matchedibleFilter || cardsFilters.edible === "all")
      ) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });
  }

  if (!document.startViewTransition()) {
    filterCards();
    return;
  }

  document.startViewTransition(() => filterCards());
}
