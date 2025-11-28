export function flippCards() {
  const pictures = document.querySelector(".pictures");

  //const card = ["", "", "", "", "", "", "", ""];
  const card = [
    { img: "./img/1024_Retina_App_Icon.png", alt: "card 1" },
    { img: "./img/8-bit_antivirus_8-bit.png", alt: "card 2" },
    { img: "./img/8bit5_mastery.png", alt: "card 3" },
    { img: "./img/8bit_spray_hypercharge.png", alt: "card 4" },
    { img: "./img/_0010_nita_dustin_nita_001.png", alt: "card 5" },
    { img: "./img/arena_info_1.png", alt: "card 6" },
    { img: "./img/el_primo_default_001.png", alt: "card 7" },
    { img: "./img/poco_default_001.png", alt: "card 8" },
  ];

  if (pictures) pictures.innerHTML = "";

  for (let i = 0; i < card.length; i++) {
    const divCard = document.createElement("div");

    divCard.classList.add("card");

    const img = document.createElement("img");
    img.src = card[i].img;
    img.alt = card[i].alt;

    divCard.appendChild(img);
    pictures?.appendChild(divCard);
  }
}
flippCards();
