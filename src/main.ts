import "./style.css";
const ulList = document.getElementById("ulList");
const pictures = document.querySelector(".pictures");
const cards = document.querySelectorAll(".card");
const menyContainer = document.querySelector(".menyContainer");

const turnCard = () => {
  const link; //??????????????
  cards.forEach((card) => {
    li.textContent = item;
    const li = document.createElement("li"); // tillägg ??
    ulList.appendChild(li);
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
