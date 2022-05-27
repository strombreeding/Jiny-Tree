function user_name() {
  let random = String(parseInt(Math.random() * 1000)).padStart(2, "0");
  if (localStorage.getItem("ID") == null) {
    let user_name_select = prompt(
      "메뉴가 준비되면\n입력한 닉네임으로 불러드려요!\n*홈에서 언제든 바꿀 수 있습니다!",
      random
    );
    if (user_name_select) {
      user_name = user_name_select;
      alert(user_name + "님 반갑습니다");
      localStorage.setItem("ID", user_name);
    } else {
      user_name = random;
      alert(random + "님 반갑습니다");
      localStorage.setItem("ID", user_name);
    }
  }
}
