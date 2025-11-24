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
//
class Person {
  name: string;
  eyeColor: string;
  length: number;

  constructor(name: string, eyeColor: string, length: number) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.length = length;
  }
}

const samis: string = new Person("sami", "green", 178);

for (let i = 0; i < samis.length; i++) {
  const inp = samis[i];
}
