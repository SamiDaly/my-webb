import { flippCards } from "./flippCards";
import { piecesChess } from "./piecesChess";
import "./style.css";
const ulList = document.getElementById("ulList");
const pictures = document.querySelector(".pictures");
const menyContainer = document.querySelector(".menyContainer");

const menuList = ["NEW-PLAYER", "NEW-GAME", "SOUND", "PUZZLE"];

for (let i = 0; i < menuList.length; i++) {
  const li = document.createElement("li");
  const menuItem = menuList[i];
  li.textContent = menuItem;
  li.style.color = "white";
  li.style.fontSize = "20px";
  ulList?.appendChild(li);
}
flippCards();
