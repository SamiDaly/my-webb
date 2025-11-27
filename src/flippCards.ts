export function flippCards() {
  const pictures = document.querySelector(".pictures");

  const card = ["", "", "", "", "", "", "", ""];

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const nmbrs = ["1", "2", "3", "4", "5", "6", "7", "8"];

  for (let i = 0; i < 64; i++) {
    const divCard = document.createElement("div");
    const cards: string = card[i];
    divCard.classList.add("card");

    pictures?.appendChild(divCard);
  }
}
