"use strict";
let clip = localStorage.getItem("영수증번호");
let double = 0;
let textArea;
function run() {
  alert("영수증 번호 : " + clip);
}
function copy_clip() {
  alert(clip + " 가 클립보드에 복사되었습니다.\n결제내역조회으로 이동합니다!");
  if (double < 1) {
    const body = document.getElementById("board");
    textArea = document.createElement("textarea");
    textArea.innerHTML = clip;
    textArea.setAttribute("id", "textArea");
    body.appendChild(textArea);
  }
  let recipe = document.getElementById("textArea");
  recipe.select();
  document.execCommand("copy");
  window.localStorage.removeItem("주문");
  window.localStorage.removeItem("영수증번호");
  location.href = "https://strombreeding.github.io/Jiny-Tree/reward.html";
  double += 1;
}
