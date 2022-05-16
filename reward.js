"use strict";
let obj;
let new_li;
function look_bill() {
  console.log("실행은 잘 됐어!");
  const user_bill = document.getElementById("form-control");
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
      for (let b = 0; b < bill_arr.length; b++) {
        new_li = document.createElement("li");
        new_li.innerHTML = bill_arr[b];
        new_li.setAttribute("class", "bill"); //inherent_value = textContent
        new_li.style.backgroundColor = "rgba";
        obj.appendChild(new_li);
      }
      break;
    }
  }
}
