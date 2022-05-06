//결제가 성공한다면 url 맨뒤에=true 가 붙는다.
//그것을 이용해 결제 성공페이지와 장바구니 페이지로 돌아가게 해주는 것.

//현재 창 url 에 "=true"가 있다면 0이상의 정수를 반환, 그것을 pay_seccess 변수에 담았다.
let seccess = window.location.href.indexOf("=true");
let help_Comparison = -1;
function pay_seccess() {
  if (seccess > help_Comparison) {
    alert("결제가 성공적으로 완료되었어요!");
    window.open("https://jineecafe.netlify.app/pay_seccess.html"); //결제 성공시 이동되는 페이지
  } else {
    alert("결제가 취소되었습니다!");
    close(); //뒤로가기를 쓸까 하다가 창이 새로 열렸기 때문에 창닫기를 선택
  }
}
