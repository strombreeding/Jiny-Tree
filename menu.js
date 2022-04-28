
//
let sett = new Set([]);
let arr = ["0"];
let ssd = [];
let a=0; //addice(),addhot(),reply_click()에서 주로 사용됨
let b=["뜨거운","아이스"]; //order()에 사용됨
let s= 0; //order()에 사용됨

//       아이스 클릭시 a=1, 뜨거운 클릭시 a=0
function addice(){
    alert('      아이스 추가+500원')
    let iceadd = document.getElementsByClassName("menu_price");
    for (let i = 0; i < iceadd.length; i++) {
        iceadd[i].innerHTML = "price M=3,500원 L=4,500원";
        }
    let iceadd2 = document.getElementsByClassName("menu_price1");
    for (let i = 0; i < iceadd2.length; i++) {
        iceadd2[i].innerHTML = "price M=4,000원 L=5,000원";
        }
    a=1;
}    
function addhot(){
    let hotadd = document.getElementsByClassName("menu_price");
    for (let i = 0; i < hotadd.length; i++) {
        hotadd[i].innerHTML = "price M=3,000원 L=4,000원";
    }
    let hotadd2 = document.getElementsByClassName("menu_price1");
    for (let i = 0; i < hotadd2.length; i++) {
        hotadd2[i].innerHTML = "price M=3,500원 L=4,500원";    
        } 
    a=0;
}   
//사이즈 클릭시 발생 ~117
function reply_click(clicked_id){ 
    let 에이드= document.getElementsByClassName('에이드');
    let 배열 = [에이드[0].innerHTML,에이드[1].innerHTML,에이드[2].innerHTML,에이드[3].innerHTML,에이드[4].innerHTML,에이드[5].innerHTML];
    
    //에이드를 클릭했을때 아이스로만 나올 수 있게 해주는 함수
    function 리턴(){
        for (let i = 0; i < 배열.length; i++) {//배열==click+id 를 비교만해줌 length만큼.. 맞을경우 s=1
        if(clicked_id==배열[i]){ 
            s=1;
            break;
        }
        }
    }
    리턴();

    //컨펌창, 장바구니로 이동, 장바구니에 박스 생성
    function order(b){
        //사이즈 선택시 컨펌팝업, 컨펌시 장바구니로 이동
            const opControl = document.getElementById("optionControl");
            let scroll = confirm("장바구니에 "+clicked_id+" 담겼습니다.\n장바구니로 이동할까요?");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});
                }
            //장바구니 위치에 메뉴,버튼
            obj = document.getElementById("optionControl");
            newDiv = document.createElement("div4");     
            newDiv.innerHTML = b+" "+clicked_id
                        +"<form name='form'>"
                        +"<input type='hidden' name='sell_price' value='1000'>"
                        +"<input type='button' value=' - ' onclick='del();'>"
                        +"<input type='text' name='amount' value='1' size='1' onchange='change();'>"
                        +"<input type='button' value=' + ' onclick='add();'>"
                        +"<input type='text' name='sum' style='border: 0px none;' size='3' readonly>"
                        +"</form>"   
            newDiv.setAttribute("id", "myDiv"+clicked_id);   //고유값 = innerText
            newDiv.style.backgroundColor = "rgba";      
            obj.appendChild(newDiv);
            }
        
        //70~108 : 주요기능 : 실행, 장바구니 중복방지
        if(s==1){
            //sex랑 sett 의 길이가 같을때 실ㅇ행이되는데 처음에 어차피 false인데
            order(b[1]);
            let 고유값= newDiv.innerText; //아이스 콜드브루L -> 고유값= 아이스 아메리카노 L
            if(sett.has(고유값)){ // 값이 
                alert(고유값+"은(는) 이미 추가하셨습니다.");
                const opControl = document.getElementById("optionControl");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});}
                newDiv.remove();
                }  
            sett.add(고유값);  // sett 배열에 고유값(innerText) 넣어줌
            arr.push(고유값); //arr 은 총 수량과 총 결제금액에 쓸것임.
            ssd.push(고유값); 
            s=0;
        }else if(a==0){ // 뜨거운 
            order(b[a]);  
            let 고유값= newDiv.innerText ;
            if(sett.has(고유값)){
                arr.push(고유값); //arr 은 총 수량과 총 결제금액에 쓸것임.
                alert(고유값+"은(는) 이미 추가하셨습니다.");
                const opControl = document.getElementById("optionControl");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});}
                newDiv.remove();
                }
            sett.add(고유값);  // sett 배열에 고유값(innerText) 넣어줌
            arr.push(고유값);
            ssd.push(고유값); 
            s=0;
                }
        else if(a==1){ // 아이스
            order(b[a]);
            let 고유값= newDiv.innerText ;
            if(sett.has(고유값)){
                arr.push(고유값); //arr 은 총 수량과 총 결제금액에 쓸것임.
                alert(고유값+"은(는) 이미 추가하셨습니다.");
                const opControl = document.getElementById("optionControl");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});}
                newDiv.remove();
                }
            sett.add(고유값);  // sett 배열에 고유값(innerText) 넣어줌
            arr.push(고유값);
            ssd.push(고유값); 
            s=0;
                }
}


// function 이거도같이(clicked_id){
//     let sex= clicked_id;
    // console.log(document.getElementById("myDiv"+clicked_id).innerText);





//장바구니 수량 올리는 함수 92~126
// let 가격 = document.getElementById(newDiv);
// let amount;
// init();
//     function init () {
//         가격 = document.form.sell_price.value; //form 안에있는 sell_price의 value 값을 sell_price변수에 담음 ->가격
//         amount = document.form.amount.value; //form 안에있는 amout 의 value 값을 amout 라는 이름의 변수에 담음 ->수량 조절
//         document.form.sum.value = sell_price; // 읽기전용인 sum 의 value 값을 위에서 선언한 sell_price로 한다.
//         change(); //change 함수 실행
//     }

//     function add () {
//         hm = document.form.amount;
//         sum = document.form.sum;
//         hm.value ++ ;
//          sum.vlue = parseInt(hm.value) * sell_price;
// }

//     function del () {
//         hm = document.form.amount;// form 안에있는 amount 를 hm 에 담음
//         sum = document.form.sum; // form 안에있는 sum을 sum에 담음
//         if (hm.value > 1) { // hm의 value 가 1보다 클 경우에 -버튼을 누를경우 hm(amout)의 value를 1 줄이고
//         hm.value -- ;
//         sum.value = parseInt(hm.value) * sell_price;//sum의 value
//         }
//     }

//     function change () {
//         hm = document.form.amount; //form 안에있는 amount를 hm에 담음
//         sum = document.form.sum; // form 안에있는 sum을 sum에 담음

//         if (hm.value < 0) { //만약 hm의 value가 0보다 작으면 value 를 0이라 한다.
//         hm.value = 0;
//         }
//         sum.value = parseInt(hm.value) * sell_price; //sum value 값을 int값으로 바꿔주고 sell_price의 value값과 곱해준다.
//     } 

// "<input type=hidden name='sell_price' value='10000000000000000000'>"
// "<input type='button' value=' - '' onclick='del();'>"
// "<input type='text' name='amount' value='1' size='2' onchange='change();'>"
// "<input type='button' value=' + ' onclick='add();'>"
// "<input type='text' name='sum' style='border: 0px none;'' size='3' readonly>원"   

//아래원본

// +" <div align='left'>"
// +"<input type='button' onclick='discount()' value = '-'><span class='연산' value='마'></span></input>"
// +"<input style=width:20px; type='text' id='result' value=1></input>"
// +"<input type='button' onclick='count()' value = '+'><span class='연산' value='플'></span></input>"
// +" 개 "+"<text value ='1'>원</text></div>";
