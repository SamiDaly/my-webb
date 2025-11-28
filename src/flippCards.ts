export function flippCards() {
  const pictures = document.querySelector(".pictures");

  const card = ["", "", "", "", "", "", "", ""];

  for (let i = 0; i < card.length; i++) {
    const divCard = document.createElement("div");
    const cards: string = card[i];
    divCard.classList.add("card");

    pictures?.appendChild(divCard);
  }
}
flippCards();
