let cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach((card) => {
  card.onclick = () => {
    cards.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    card.classList.add("active");
  };
});
