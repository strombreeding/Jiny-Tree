"use strict";
let obj;
let new_li;
let new_div;
let new_price;
let new_date;
let new_name;
function look_bill() {
  let check = 0;
  const user_bill = document.getElementById("form-control");
  let final_price = document.getElementById("final_price");
  let bill_num = document.getElementById("bill_num");
  let date = document.getElementById("date");
  let user_name = document.getElementById("user_name");
  for (let i = 0; i < window.localStorage.length; i++) {
    console.log("찾을거야!" + i);
    if (user_bill.value == window.localStorage.key(i)) {
      console.log(i + "들어왔어!");
      const bill = window.localStorage.getItem(window.localStorage.key(i));
      const bill_arr = JSON.parse(bill);
      obj = document.getElementById("reward");
      //중복 방지를 위한 자식요소 제거
      while (obj.hasChildNodes()) {
        obj.removeChild(obj.firstChild);
      }
      while (bill_num.hasChildNodes()) {
        bill_num.removeChild(bill_num.firstChild);
      }
      while (final_price.hasChildNodes()) {
        final_price.removeChild(final_price.firstChild);
      }
      while (date.hasChildNodes()) {
        date.removeChild(date.firstChild);
      }
      while (user_name.hasChildNodes()) {
        user_name.removeChild(user_name.firstChild);
      }
      for (let b = 0; b < bill_arr.length - 3; b++) {
        new_li = document.createElement("li");
        new_li.innerHTML = bill_arr[b];
        new_li.setAttribute("class", "bill"); //inherent_value = textContent
        new_li.style.backgroundColor = "rgba";
        obj.appendChild(new_li);
      }
      new_name = document.createElement("div");
      new_name.innerHTML = "주문자 ID : " + bill_arr[bill_arr.length - 3];
      user_name.appendChild(new_name);
      new_div = document.createElement("div");
      new_div.innerHTML = "영수증 번호 : " + user_bill.value;
      bill_num.appendChild(new_div);
      new_price = document.createElement("div");
      new_price.innerHTML = "최종 금액 : " + bill_arr[bill_arr.length - 1];
      final_price.appendChild(new_price);
      new_date = document.createElement("div");
      new_date.innerHTML = "결제 일시 : " + bill_arr[bill_arr.length - 2];
      date.append(new_date);
      check += 1;
      break;
    }
  }
  if (check == 0) {
    alert(
      "영수증 번호를 정확하게 입력하세요.\n테스트라면 결제를 마치고 영수증을 발급받으세요"
    );
  }
}
