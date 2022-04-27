
//선언
let a=0; //addice(),addhot(),reply_click()에서 주로 사용됨
let s= 0;
let 커피 = document.getElementsByClassName("menu-coffee");

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


//사이즈 선택시 장바구니에 메뉴+사이즈+온도가 담기는 함수
function reply_click(clicked_id){
    let 에이드= document.getElementsByClassName('에이드');
    let 배열 = [에이드[0].innerHTML,에이드[1].innerHTML,에이드[2].innerHTML,에이드[3].innerHTML,에이드[4].innerHTML,에이드[5].innerHTML];
    let b=["뜨거운","아이스"];
    function 리턴(){
        for (let i = 0; i < 배열.length; i++) {//배열==click+id 를 비교만해줌 length만큼.. 맞을경우 s=1
        if(clicked_id==배열[i]){ 
            s=1;
            break;
        }
        }
    }
    리턴();
    if(true){
        function order(b){
            //사이즈 선택시 컨펌팝업, 컨펌시 장바구니로 이동
            if(clicked_id){    
                const opControl = document.getElementById("optionControl");
                let scroll = confirm("장바구니에 "+clicked_id+" 담겼습니다.\n장바구니로 이동할까요?");
                    if(scroll){opControl.scrollIntoView({behavior: "smooth", block: "center"});
                    }else{undefined
                    }
                }
            //장바구니 위치에 새로운 div 생성
            obj = document.getElementById("optionControl");
            newDiv = document.createElement("div");     
            newDiv.innerHTML = b+" "+clicked_id
            +" <div align='left'>"
            +"<input type='button' onclick='discount()' value = '-'><span class='연산' value='마'></span></input>"
            +"<input style=width:20px; type='text' id='result' value=1></input>"
            +"<input type='button' onclick='count()' value = '+'><span class='연산' value='플'></span></input>"
            +" 개 "+"<date value ='0'>원</date></div>";   
            newDiv.setAttribute("class", "myDiv");      
            newDiv.style.backgroundColor = "rgba";      
            obj.appendChild(newDiv);  
            }
        }        
        if(s==1){
            order(b[1]);
            s=0;
        }
        else if(a==0){ // 뜨거운 
            order(b[a]);  
            s=0;  
        }else if(a==1){ // 아이스
            order(b[a]);
            s=0;
        }
}

// function count(){
//     let 값 = document.getElementById('result');
//     let 화면 = 값.innerHTML;
//     // for (let i = 0; i < 10; i++) {
//     //     const element = array[index]; 
//     // }
//     화면= parseInt(화면) + 1;
//     console.log(값);
//     값.innerHTML = 화면;
// }
// function discount(){
//     let 값 = document.getElementById('result');
//     console.log(값);
// }
