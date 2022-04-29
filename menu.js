
//
let set_arr = new Set([]);
let total_cnt = []; //총 수량으로 
let add_temp=0; //addice(),addhot(),reply_click()에서 주로 사용됨
let for_temp=["따뜻한","아이스"]; //order()에 사용됨
let for_ade_temp= 0; //order()에 사용됨
//rkruirt
const menu_Lsize_arr = ["아이스 아메리카노L","아이스 콜드브루L","아이스 카페라떼L","아이스 카라멜마끼야또L","아이스 캐모마일L","아이스 블랙퍼스트L","아이스 유자차L","아이스 자몽차L","아이스 레몬에이드L","아이스 라임에이드L","아이스 자몽에이드L","따뜻한 아메리카노L","따뜻한 콜드브루L","따뜻한 카페라떼L","따뜻한 카라멜마끼야또L","따뜻한 캐모마일L","따뜻한 블랙퍼스트L","따뜻한 유자차L","따뜻한 자몽차L"];
const premium_menu_arr = ["아이스 카페라떼M","아이스 카페라떼L","아이스 카라멜마끼야또M","아이스 카라멜마끼야또L", "따뜻한 카페라떼M","따뜻한 카페라떼L", "따뜻한 카라멜마끼야또M","따뜻한 카라멜마끼야또L"];
const menu_arr = ["아이스 아메리카노M","아이스 콜드브루M","아이스 카페라떼M","아이스 카라멜마끼야또M","아이스 캐모마일M","아이스 블랙퍼스트M","아이스 유자차M","아이스 자몽차M","아이스 레몬에이드M","아이스 라임에이드M","아이스 자몽에이드M","따뜻한 아메리카노M","따뜻한 콜드브루M","따뜻한 카페라떼M","따뜻한 카라멜마끼야또M","따뜻한 캐모마일M","따뜻한 블랙퍼스트M","따뜻한 유자차M","따뜻한 자몽차M",];
let ea_price = document.getElementsByName("sum");
// ea_price1.push(ea_price)
// let ea_price1=[];
const iceadd_name =document.getElementsByClassName("menu_name"); //== '메뉴이름'.innerText    11개가있다.
const hot_name = document.getElementsByClassName("hidden_name");  // == 




//       클릭시 메뉴 가격,이름 변경
function addice(){
    const hidden_img = document.getElementsByName("hidden_img");
    alert('      아이스 추가+500원')
    let iceadd = document.getElementsByClassName("menu_price");
    for (let i = 0; i < iceadd_name.length; i++) {
        hidden_img[i].classList.remove("hidden_img");
        hidden_img[i].classList.add("hidden_img_size")
    }
    for (let i = 0; i < iceadd.length; i++) {
        iceadd[i].innerHTML = "price M=3,500원 L=4,500원";
    }
    let iceadd2 = document.getElementsByClassName("menu_price1");
    for (let i = 0; i < iceadd2.length; i++) {
        iceadd2[i].innerHTML = "price M=4,000원 L=5,000원";
    }
    add_temp=1;

}    
function addhot(){
    let hotadd = document.getElementsByClassName("menu_price");
    for (let i = 0; i < iceadd_name.length; i++) {
        hidden_img[i].classList.add("hidden_img")
    }

    for (let i = 0; i < hotadd.length; i++) {
        hotadd[i].innerHTML = "price M=3,000원 L=4,000원";
    }
    let hotadd2 = document.getElementsByClassName("menu_price1");
    for (let i = 0; i < hotadd2.length; i++) {
        hotadd2[i].innerHTML = "price M=3,500원 L=4,500원";    
        } 
    add_temp=0;
}   
//사이즈 클릭시 발생 ~117
function reply_click(clicked_id){ 
    
    let 에이드= document.getElementsByClassName('에이드');
    let for_ade_temp_arr = [에이드[0].innerHTML,에이드[1].innerHTML,에이드[2].innerHTML,에이드[3].innerHTML,에이드[4].innerHTML,에이드[5].innerHTML];

    //에이드를 클릭했을때 아이스로만 나올 수 있게 해주는 함수
    function 리턴(){
        for (let i = 0; i < for_ade_temp_arr.length; i++) {//for_ade_temp_arr==click+id 를 비교만해줌 length만큼.. 맞을경우 s=1
        if(clicked_id==for_ade_temp_arr[i]){ 
            for_ade_temp=1;
            break;
        }
        }
    }
    리턴();

    //컨펌창, 장바구니로 이동, 장바구니에 박스 생성
    function order(for_temp){
        //사이즈 선택시 컨펌팝업, 컨펌시 장바구니로 이동
            const opControl = document.getElementById("optionControl");
            let scroll = confirm("장바구니에 "+for_temp+clicked_id+" 담겼습니다.\n장바구니로 이동할까요?");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});
                }
            //장바구니 위치에 메뉴,버튼
            obj = document.getElementById("optionControl");
            newDiv = document.createElement("div4");     
            newDiv.innerHTML = for_temp+" "+clicked_id
                        +"<form name='form'>"
                        +"<input type='button' value=' - ' onclick='del();'>"
                        +"<input type='text' class='ea_count' value='1' size='1' onchange='change();'>"
                        +"<input type='button' value=' + ' onclick='add();'>"
                        +"<input type='text' name='sum'value= style='border: 0px none;' size='3'>"
                        +"</form>"   
            newDiv.setAttribute("class", "myDiv"+clicked_id);   //고유값 = innerText
            newDiv.style.backgroundColor = "rgba";      
            obj.appendChild(newDiv);
    }
        

        //70~108 : 주요기능 : 실행, 장바구니 중복방지
        if(for_ade_temp==1){//에이드
            let amout=0;
            let default_price = 3000;
            order(for_temp[1]);
            let 고유값= newDiv.innerText; 
            if(set_arr.has(고유값)){ 
                alert(고유값+"은(는) 이미 추가하셨습니다.");
                //class ea_count.value 를 +1 추가 시킨다.
                const opControl = document.getElementById("optionControl");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});}
                newDiv.remove();
            }  
            // ea_price.push(document.getElementsByName("sum"));
            set_arr.add(고유값);  
            for_ade_temp=0;
            for (let i = 0; i < menu_arr.length; i++){
                if (i>=7&&i<=10&&고유값==menu_arr[i]){ 
                }
            }
            for (let r = 0; r < menu_Lsize_arr.length; r++) {//L사이즈
                if (r>=7&&r<=10&&고유값==menu_Lsize_arr[r]){  
                    default_price+=1000;
                }  
            }
            for (let i = 0; i < ea_price.length; i++) { // 클릭마다 ea_price의 length가 늘어난다.
                amout=i;
            }
            ea_price[amout].value = default_price


        }else if(add_temp==0){ //따뜻한
            let default_price = 3000;
            order(for_temp[add_temp]);  
            let 고유값= newDiv.innerText ;
            if(고유값)
            if(set_arr.has(고유값)){
                alert(고유값+"은(는) 이미 추가하셨습니다.");
                const opControl = document.getElementById("optionControl");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});}
                newDiv.remove();
            }
            set_arr.add(고유값);  
            for_ade_temp=0;
            for (let i = 0; i < menu_arr.length; i++){//따뜻한 M
                if (i>=11&&고유값==menu_arr[i]){  
                    default_price=3000;
                    for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                        if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                            default_price+=500; //500을더한다.
                        }
                    } 
                }
            }console.log(default_price);
            for (let r = 0; r < menu_Lsize_arr.length; r++) {//L사이즈
                    if (r>=11&&고유값==menu_Lsize_arr[r]){  
                        default_price+=1000;
                        for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                            if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                                default_price+=500; //500을더한다.
                            }
                        } 
                    }
            }
            for (let i = 0; i < ea_price.length; i++) { // 클릭마다 ea_price의 length가 늘어난다.
                amout=i;
            }
            ea_price[amout].value = default_price

        }else if(add_temp==1){
            let default_price = 3000; // 아이스
            order(for_temp[add_temp]);
            let 고유값= newDiv.innerText ;
            if(set_arr.has(고유값)){
                alert(고유값+"은(는) 이미 추가하셨습니다.");
                const opControl = document.getElementById("optionControl");
                if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});}
                newDiv.remove();
                }
            set_arr.add(고유값);  
            for_ade_temp=0;
            for (let i = 0; i < menu_arr.length; i++){
                if (i<8&&고유값==menu_arr[i]){  
                    default_price+=500;
                    for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                        if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                            default_price+=500; //500을더한다.
                        }
                    }
                } 
            }
            for (let r = 0; r < menu_Lsize_arr.length; r++) {//L사이즈
                if (r<8&&고유값==menu_Lsize_arr[r]){  
                    default_price+=1500;
                    for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                        if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                            default_price+=500; //500을더한다.
                        }
                    }
                }
            }
            for (let i = 0; i < ea_price.length; i++) { // 클릭마다 ea_price의 length가 늘어난다.
                amout=i;
            }
            ea_price[amout].value = default_price
            
        }
}

/* 쓸지도 모르는 계산 로직
function hot_price(){
    for (let i = 0; i < menu_arr.length; i++){//따뜻한 M
        if (i>=11&&고유값==menu_arr[i]){  
            default_price=3000;
            console.log(default_price);
            for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                    default_price+=500; //500을더한다.
                    console.log(default_price);
                }
            } 
        }
    }console.log(default_price);
    for (let r = 0; r < menu_Lsize_arr.length; r++) {//L사이즈
            if (r>=11&&고유값==menu_Lsize_arr[r]){  
                default_price+=1000;
                console.log(default_price);
                for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                    if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                        default_price+=500; //500을더한다.
                        console.log(default_price);
                    }
                } 
            }
    }
}

function ice_price(){
    for (let i = 0; i < menu_arr.length; i++){
        if (i<8&&고유값==menu_arr[i]){  
            default_price+=500;
            console.log(default_price);
            for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                    default_price+=500; //500을더한다.
                    console.log(default_price);
                }
            }
        } 
    }
    for (let r = 0; r < menu_Lsize_arr.length; r++) {//L사이즈
        if (r<8&&고유값==menu_Lsize_arr[r]){  
            default_price+=1500;
            console.log(default_price);
            for (let x = 0; x < premium_menu_arr.length; x++) {//비싼메뉴 선택
                if(premium_menu_arr[x]==고유값){ //비싼메뉴가 선택됐을때
                    default_price+=500; //500을더한다.
                    console.log(default_price);
                }
            }
        }
    }
  }
*/

// function 이거도같이(clicked_id){
    



//장바구니 수량 올리는 함수 92~126
// let 가격 = document.getElementById(newDiv);
// let amount;
// init();
//     function init () {
//         가격 = document.form.sell_price.value; //form 안에있는 sell_price의 value 값을 sell_priceamout에 담음 ->가격
//         amount = document.form.amount.value; //form 안에있는 amout 의 value 값을 amout 라는 이름의 amout에 담음 ->수량 조절
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
// +" 개 "+"<text value ='1'>원</text></div>"