export function flippCards() {
  const pictures = document.querySelector(".pictures");

  const card = ["", "", "", "", "", "", "", ""];

  for (let i = 0; i < 64; i++) {
    const divCard = document.createElement("div");
    const flippCards: string = card[i];

    divCard.classList.add("card");

    pictures?.appendChild(divCard);
  }
}
