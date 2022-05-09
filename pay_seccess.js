let clip = localStorage.getItem("영수증번호");
let double = 0;
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
  location.href = "https://jinytreecafe.netlify.app/reward.html";
  double += 1;
}
