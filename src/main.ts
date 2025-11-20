import "./style.css";
const ulList = document.getElementById("ulList");
const pictures = document.querySelector(".pictures");
const cards = document.querySelectorAll(".card");
const menyContainer = document.querySelector(".menyContainer");

const turnCard = () => {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (card.style.backgroundColor === "green") {
        card.style.backgroundColor = ""; // återgår till ursprungsfärg
      } else {
        card.style.backgroundColor = "green";
      }
    });
  });
};
turnCard();
console.log("test log in features-turncard");
