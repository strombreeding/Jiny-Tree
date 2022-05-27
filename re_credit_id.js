"use strict";
let clip = localStorage.getItem("영수증번호");
let double = 0;
let textArea;
let user_name;
function run() {
  localStorage.removeItem("ID");
  let random = String(parseInt(Math.random() * 100)).padStart(1, "0");
  let user_name_select = prompt(
    "바꾸고 싶은 닉네임을 입력해주세요!\n미작성 시 임의의 번호로 배정됩니다!",
    random
  );
  if (user_name_select) {
    user_name = user_name_select;
    localStorage.setItem("ID", user_name);
    alert(user_name + "님 반갑습니다");
  } else {
    user_name = random;
    localStorage.setItem("ID", user_name);
    alert(random + "님 반갑습니다");
  }
}
