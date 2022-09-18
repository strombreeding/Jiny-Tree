//결제가 성공한다면 url 맨뒤에=true 가 붙는다.
//그것을 이용해 결제 성공페이지와 장바구니 페이지로 돌아가게 해주는 것.
"use strict";
let clip = localStorage.getItem("영수증번호");
let double = 0;
let textArea;
//현재 창 url 에 "=true"가 있다면 0이상의 정수를 반환, 그것을 pay_seccess 변수에 담았다.
let seccess = window.location.href.indexOf("=true");
let help_Comparison = -1;
function pay_seccess() {
  if (seccess > help_Comparison) {
    alert("결제가 완료되었습니다.\n영수증 번호 : " + clip);
    localStorage.removeItem("결제");
  } else {
    localStorage.setItem("결제", "실패");
    close(); //뒤로가기를 쓸까 하다가 창이 새로 열렸기 때문에 창닫기를 선택
  }
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
  location.href = "https://jineecafe.netlify.app/reward.html";
  double += 1;
}
