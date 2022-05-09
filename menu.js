"use strict";
//선언
let set_arr = new Set([]);
let total_cnt = []; //총 수량으로 ;
let ea_ct = {};
let for_temp = ["따뜻한", "아이스"]; //order()에 사용됨;
const menu_Lsize_arr = [
  "아이스 아메리카노L",
  "아이스 콜드브루L",
  "아이스 카페라떼L",
  "아이스 카라멜마끼야또L",
  "아이스 캐모마일L",
  "아이스 블랙퍼스트L",
  "아이스 유자차L",
  "아이스 자몽차L",
  "아이스 레몬에이드L",
  "아이스 라임에이드L",
  "아이스 자몽에이드L",
  "따뜻한 아메리카노L",
  "따뜻한 콜드브루L",
  "따뜻한 카페라떼L",
  "따뜻한 카라멜마끼야또L",
  "따뜻한 캐모마일L",
  "따뜻한 블랙퍼스트L",
  "따뜻한 유자차L",
  "따뜻한 자몽차L",
];
const premium_menu_arr = [
  "아이스 카페라떼M",
  "아이스 카페라떼L",
  "아이스 카라멜마끼야또M",
  "아이스 카라멜마끼야또L",
  "따뜻한 카페라떼M",
  "따뜻한 카페라떼L",
  "따뜻한 카라멜마끼야또M",
  "따뜻한 카라멜마끼야또L",
];
const menu_arr = [
  "아이스 아메리카노M",
  "아이스 콜드브루M",
  "아이스 카페라떼M",
  "아이스 카라멜마끼야또M",
  "아이스 캐모마일M",
  "아이스 블랙퍼스트M",
  "아이스 유자차M",
  "아이스 자몽차M",
  "아이스 레몬에이드M",
  "아이스 라임에이드M",
  "아이스 자몽에이드M",
  "따뜻한 아메리카노M",
  "따뜻한 콜드브루M",
  "따뜻한 카페라떼M",
  "따뜻한 카라멜마끼야또M",
  "따뜻한 캐모마일M",
  "따뜻한 블랙퍼스트M",
  "따뜻한 유자차M",
  "따뜻한 자몽차M",
];
let ea_price = document.getElementsByName("sum");
let add_temp = 0; //addice(),addhot(),reply_click()에서 주로 사용됨
let for_ade_temp = 0; //order()에 사용됨
const iceadd_name = document.getElementsByClassName("menu_name");
const hot_name = document.getElementsByClassName("hidden_name");
let ea_count = 0;
let obj;
let default_price = 3000;
let 고유값;
let newDiv;
let quan = document.getElementsByClassName("quan");
let myDiv = document.getElementsByClassName("myDiv");
//       클릭시 메뉴 가격,이름 변경
function addice() {
  const hidden_img = document.getElementsByName("hidden_img");
  alert("      아이스 추가+500원");
  let iceadd = document.getElementsByClassName("menu_price");
  for (let i = 0; i < iceadd_name.length; i++) {
    hidden_img[i].classList.remove("hidden_img");
    hidden_img[i].classList.add("hidden_img_size");
  }
  for (let i = 0; i < iceadd.length; i++) {
    iceadd[i].innerHTML = "price M=3,500원 L=4,500원";
  }
  let iceadd2 = document.getElementsByClassName("menu_price1");
  for (let i = 0; i < iceadd2.length; i++) {
    iceadd2[i].innerHTML = "price M=4,000원 L=5,000원";
  }
  add_temp = 1;
}
function addhot() {
  let hotadd = document.getElementsByClassName("menu_price");
  for (let i = 0; i < iceadd_name.length; i++) {
    hidden_img[i].classList.add("hidden_img");
  }

  for (let i = 0; i < hotadd.length; i++) {
    hotadd[i].innerHTML = "price M=3,000원 L=4,000원";
  }
  let hotadd2 = document.getElementsByClassName("menu_price1");
  for (let i = 0; i < hotadd2.length; i++) {
    hotadd2[i].innerHTML = "price M=3,500원 L=4,500원";
  }
  add_temp = 0;
}
//사이즈 클릭시 발생 ~117
function reply_click(clicked_id) {
  let 에이드 = document.getElementsByClassName("에이드");
  let for_ade_temp_arr = [
    에이드[0].innerHTML,
    에이드[1].innerHTML,
    에이드[2].innerHTML,
    에이드[3].innerHTML,
    에이드[4].innerHTML,
    에이드[5].innerHTML,
  ];

  //에이드를 클릭했을때 아이스로만 나올 수 있게 해주는 함수
  function 리턴() {
    for (let i = 0; i < for_ade_temp_arr.length; i++) {
      //for_ade_temp_arr==click+id 를 비교만해줌 length만큼.. 맞을경우 s=1
      if (clicked_id == for_ade_temp_arr[i]) {
        for_ade_temp = 1;
        break;
      }
    }
  }
  리턴();

  //function order = [컨펌-장바구니이동],[장바구니에 옵션+이름div생성], [고유값 지정=옵션+클릭메뉴]
  function order(for_temp) {
    //사이즈 선택시 컨펌팝업, 컨펌시 장바구니로 이동
    const opControl = document.getElementById("optionControl");
    let scroll = confirm(
      "장바구니에 " +
        for_temp +
        clicked_id +
        " 담겼습니다.\n장바구니로 이동할까요?"
    );
    if (scroll) {
      opControl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    //메뉴 클릭시 생성되는 div
    obj = document.getElementById("optionControl");
    newDiv = document.createElement("li");
    고유값 = for_temp + " " + clicked_id;
    newDiv.innerHTML =
      고유값 +
      "<form name='form'>" +
      "<input type='button' value='-' onclick='dec(this);'>" +
      "<input type='text' max='10' class='quan' value='1' size='1'readonly >" +
      "<input type='button' value='+' onclick='add(this);'>" +
      "<input type='text' name='sum' style='border: none;' size='4' readonly>" +
      "<input type='text' size='2' readonly  value='원'>" +
      "<input type='button' value='X' onclick='del(this);'" +
      "</form>";
    newDiv.setAttribute("class", "myDiv"); //inherent_value = textContent
    newDiv.style.backgroundColor = "rgba";
    obj.appendChild(newDiv);
  }
  //function setthing = [클릭한 메뉴의 가격을 연산하여 ea_price[i]에 넣어줌]
  function setthing() {
    //클릭 메뉴의 가격을 구하는 것.
    default_price = 3000;
    //에이드 선택
    if (for_ade_temp == 1) {
      for (let i = 0; i < menu_arr.length; i++) {
        if (고유값 == menu_arr[i]) {
        }
        default_price += 0;
      }
      //L사이즈 선택
      for (let r = 0; r < menu_Lsize_arr.length; r++) {
        if (고유값 == menu_Lsize_arr[r]) {
          default_price += 1000;
        }
      } //여기까지 가격을 구하는 코드
      //아래는 장바구니 중복 방지 코드 div를 삭제하는 것.
      if (total_cnt.indexOf(고유값) != -1) {
        let scroll = confirm(
          "이미 담겨있어서 " +
            고유값 +
            " 하나 더 추가했어요.\n장바구니로 이동할까요?"
        );
        const opControl = document.getElementById("optionControl");
        if (scroll) {
          opControl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        newDiv.remove();
      }
      for_ade_temp = 0;
      //total_cnt 에 누르는 메뉴이름이 배열로 계속 담기게 됨.
      total_cnt.push(고유값);
      //아래 set 는 굳이 안써도 되긴함.
      set_arr.add(고유값);

      //모든 클릭횟수만큼반복
      //모든클릭회수중에 배열i가 현재 클릭한메뉴와 같을때 ea_count변수에 1을 더함
      for (let i = 0; i < total_cnt.length; i++) {
        if (total_cnt[i] == 고유값) {
          ea_count += 1;
        }
        // {키'선택한메뉴': 메뉴가 클릭된 수'ea_count'}
        // 객체의 value 를 뽑아내야한다.
        ea_ct[고유값] = ea_count; //고유값이란 키가 없다면 추가하여 그 값을 ea_count 로 해준다.
      }
      //ea_coun 가 중첩되지않게 for문 끝나자마자 초기화
      ea_count = 0;

      //아래 .length의 배열은 클릭하면서 생겨난 div의 개수와 같다면 아무 배열이나 상관 없다.
      //quan 대신 ea_price.length 로 해도 되고, set에 고유값을 넣어 중복을 방지한 후에 set_arr.length로 해도 된다.
      for (let i = 0; i < quan.length; i++) {
        //myDiv = 클릭하면서 생겨난 메뉴이름을 textContent로 가진 div
        //클릭한 이름이 mydiv와 같다면
        if (고유값 == myDiv[i].textContent) {
          //i번째 수량의 값에다가 = ea_ct객체의 [i]번째 키의 value를 담는것
          //각 메뉴마다 클릭할때마다 total_cnt 배열에 고유값이 쌓이고 이것은 고유값 : 1+2+~~ 이런식으로 저장된다.
          quan[i].value = Object.values(ea_ct)[i];
          //i번째 금액 값에다가 위에서 계산한 클릭한메뉴의 값과 i번째 수량과 곱한 값을 담는다
          ea_price[i].value = default_price * quan[i].value; //금액은 위에서 계산한거 * 수량이다.
          //버그였는데 if문으로 해결했다.(근데 포문에서 계속 돌리니깐 클릭하는 메뉴의 가격으로 전부 연산이되어버림).
        }
      }
      //함수가 실행될때마다 default_price의 값은 초기화되므로 아래 코드는 필요없음.
      // default_price=0;
    } else if (add_temp == 0) {
      //따뜻한 M 사이즈 선택
      for (let i = 0; i < menu_arr.length; i++) {
        if (고유값 == menu_arr[i]) {
          default_price = 3000;
          break;
        }
      }
      //비싼메뉴 선택
      for (let x = 0; x < premium_menu_arr.length; x++) {
        if (premium_menu_arr[x] == 고유값) {
          default_price += 500;
          break;
        }
      }
      // L사이즈 선택
      for (let r = 0; r < menu_Lsize_arr.length; r++) {
        if (고유값 == menu_Lsize_arr[r]) {
          default_price += 1000;
          break;
        }
      }
      if (total_cnt.indexOf(고유값) != -1) {
        let scroll = confirm(
          "이미 담겨있어서 " +
            고유값 +
            " 하나 더 추가했어요.\n장바구니로 이동할까요?"
        );
        const opControl = document.getElementById("optionControl");
        if (scroll) {
          opControl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        newDiv.remove();
      }
      for_ade_temp = 0;
      total_cnt.push(고유값);
      set_arr.add(고유값);
      연산();

      //아이스 선택
    } else if (add_temp == 1) {
      for (let i = 0; i < menu_arr.length; i++) {
        if (고유값 == menu_arr[i]) {
          default_price += 500;
        }
      }
      //비싼메뉴 선택
      for (let x = 0; x < premium_menu_arr.length; x++) {
        if (premium_menu_arr[x] == 고유값) {
          default_price += 500;
        }
      }
      //아이스 L 사이즈 선택
      for (let r = 0; r < menu_Lsize_arr.length; r++) {
        if (고유값 == menu_Lsize_arr[r]) {
          default_price += 1500; //아이스는 L사이즈 배열에 들어있지 않기 때문에 아이스500추가금까지 받아야함.
        }
      }

      if (total_cnt.indexOf(고유값) != -1) {
        let scroll = confirm(
          "이미 담겨있어서 " +
            고유값 +
            " 하나 더 추가했어요.\n장바구니로 이동할까요?"
        );
        const opControl = document.getElementById("optionControl");
        if (scroll) {
          opControl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        newDiv.remove();
      }
      for_ade_temp = 0;
      total_cnt.push(고유값);
      set_arr.add(고유값);
      연산();
    }
  }
  //function 연산 = [클릭시 생성된 div의 수량, 가격을 수정]
  function 연산() {
    for (let i = 0; i < total_cnt.length; i++) {
      if (total_cnt[i] == 고유값) {
        ea_count += 1;
      }
      ea_ct[고유값] = ea_count;
    }
    ea_count = 0;
    for (let i = 0; i < quan.length; i++) {
      if (고유값 == myDiv[i].textContent) {
        quan[i].value = Object.values(ea_ct)[i];
        ea_price[i].value = default_price * quan[i].value;
      }
    }
  }

  //장바구니 담기, 중복클릭시 수량증가, 최종결제금액 연산
  if (for_ade_temp == 1) {
    //에이드
    order(for_temp[1]);
    setthing();
  } else if (add_temp == 0) {
    //따뜻한
    order(for_temp[add_temp]);
    setthing();
  } else if (add_temp == 1) {
    order(for_temp[add_temp]);
    setthing();
  }
  //최종결제금액
  final_price();
}
// 최종결제금액 구해주는 함수
let finalPrice = 0;
function final_price() {
  finalPrice = 0;
  for (let i = 0; i < ea_price.length; i++) {
    finalPrice += parseInt(ea_price[i].value);
  }
  document.getElementById("final_price").value = finalPrice;
}

//장바구니 품목 +버튼
function add(add_Btn) {
  const add_btn = add_Btn.parentNode.parentNode;
  const add_bt = add_Btn.previousSibling;
  total_cnt.push(add_btn.textContent);
  ea_ct[add_btn.textContent] += 1;
}

//장바구니 품목 삭제
function del(del_Btn) {
  const del_btn = del_Btn.parentNode.parentNode; // del_btn 변수에 클릭한 버튼의 조부를 담음. form -> myDiv
  console.log(del_btn.textContent); // 클릭한 것의 조부에 뭐가쓰여있는 확인
  del_btn.remove(); //myDiv 삭제
  //삭제 해주고 quan과 ea_price의 연산을 돕던 total_cnt안에 있는 del_btn의 값을 빼줘야한다.
  for (let i = 0; i < total_cnt.length; i++) {
    if (total_cnt[i] == del_btn.textContent) {
      total_cnt.splice(i, 1); //total_cnt i 번째가 클릭한 것의 mydiv와 같을 경우 그 값을 삭제한다
      console.log(total_cnt);
      i--; //삭제되는 순간 배열의 길이가 줄어들기 때문에 i를 다시 줄여줘서 원래 반복하는 만큼 할수있게해준다.
    }
  }
  final_price(); // 총 결제금액 함수를 다시 써서 갱신 시켜준다. 이 함수는 ea_price로 정한다.
  delete ea_ct[del_btn.textContent]; //총 결제금액을 갱신하고 ea_ct 객체에 저장되어있던 클릭한 메뉴를 삭제시킨다.
}

// '주문하러가기!' 버튼 클릭시 실행
function pay_go() {
  let server = [];
  for (let i = 0; i < quan.length; i++) {
    const bill_num = {
      menu: myDiv[i].textContent,
      cnt: quan[i].value,
    };
    server.push(bill_num);
  }
  localStorage.setItem(Date.now(), JSON.stringify(server));
  localStorage.setItem("영수증번호", Date.now());
  // JSON.parse(localStorage.getItem(Date.now()));
  window.name = "menu";
  window.open("run_moduel.html", "주문표 확인"); // 결제모듈 실행
  localStorage.setItem(
    "주문",
    document.getElementById("final_price").value * 0.01
  );
}
