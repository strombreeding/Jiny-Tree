let 결제내역인풋 = document.querySelector("#결제내역 input");
let 결제내역버튼 = document.querySelector("#결제내역 button");
function bill() {
  const input = document.getElementById("form-control");
  input.select();
  document.execCommand("paste");
}
