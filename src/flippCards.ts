export function flippCards() {
  const pictures = document.querySelector(".pictures");
  const cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i] as HTMLElement;

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      if ((card.style.backgroundColor = "red")) {
        //test
      }
    });
  }
}
