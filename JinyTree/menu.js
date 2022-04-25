let a=0;
function addice(){
    alert('아이스 추가+500원')
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

    let 커피 = document.getElementsByClassName("menu-coffee");

//아래 함수는 메뉴에서 M,L 버튼 클릭시 실행되는 함수임 
//기능은 클릭한 버튼의 ID 값확인하고 그 값에따라 메뉴를 장바구니에 넣는 용도임.
function reply_click(clicked_id){
    if(a==0){
        switch(clicked_id){
            case '아메리카노M':

                
                    obj = document.getElementById("add_Menu1");
                    newDiv = document.createElement("div");
                    newDiv.innerHTML = "뜨거운 아메리카노 작은컵 추가요";
                    newDiv.setAttribute("class", "myDiv"); // 새롭게 만들어지는 div 태그에 id 값 저장
                    newDiv.style.backgroundColor = "rgba";



        
                    obj.appendChild(newDiv);
                break;
            case '아메리카노L':
                alert('뜨거운 아메리카노 큰컵 추가요');
                break;
            case '콜드브루M':
                alert('뜨거운 콜드브루 작은컵추가요');
                break;
            case '콜드브루L':
                alert('뜨거운 콜드브루 큰컵추가요');
                break;
            case '카페라떼M':
                alert('뜨거운 카페라떼 작은컵추가요');
                break;
            case '카페라떼L':
                alert('뜨거운 카페라떼 큰컵추가요');
                break;
            case '카라멜마끼야또M':
                alert('뜨거운 카라멜마끼야또 작은컵추가요');
                break;
            case '카라멜마끼야또L':
                obj = document.getElementById("add_Menu1");
                newDiv = document.createElement("div");
                newDiv.innerHTML = "뜨거운 카라멜마끼야또 큰컵 추가요";
                newDiv.setAttribute("class", "mydiv"); // 새롭게 만들어지는 div 태그에 id 값 저장
                newDiv.style.backgroundColor = "rgba";
                obj.appendChild(newDiv);
                break;
            case '캐모마일M':
                alert('뜨거운 캐모마일 작은컵추가요');
                break;
                break;
            case '블랙퍼스트L':
                alert('뜨거운 블랙퍼스트 작은컵추가요');
                break;
            case '유자차M':
                alert('뜨거운 유자차 작은컵추가요');
                break;
            case '유자차L':
                alert('뜨거운 유자차 작은컵추가요');
                break;
            case '자몽차M':
                alert('뜨거운 자몽차 작은컵추가요');
                break;
            case '자몽차L':
                alert('뜨거운 자몽차 작은컵추가요');
                break;case '캐모마일L':
                alert('뜨거운 캐모마일 작은컵추가요');
                break;
            case '블랙퍼스트M':
                alert('뜨거운 블랙퍼스트 작은컵추가요');
            
            }
        }else {switch(clicked_id){
            case '아메리카노M':
                alert('아이스 아메리카노 작은컵 추가요');
                break;
            case '아메리카노L':
                alert('아이스 아메리카노 큰컵 추가요');
                break;
            case '콜드브루M':
                alert('아이스 콜드브루 작은컵추가요');
                break;
            case '콜드브루L':
                alert('아이스 콜드브루 큰컵추가요');
                break;
            case '카페라떼M':
                alert('아이스 카페라떼 작은컵추가요');
                break;
            case '카페라떼L':
                alert('아이스 카페라떼 큰컵추가요');
                break;
            case '카라멜마끼야또M':
                alert('아이스 카라멜마끼야또 작은컵추가요');
                break;
            case '카라멜마끼야또L':
                alert('아이스 카라멜마끼야또 작은컵추가요');
                break;
            case '캐모마일M':
                alert('아이스 캐모마일 작은컵추가요');
                break;
            case '블랙퍼스트L':
                alert('아이스 블랙퍼스트 작은컵추가요');
                break;
            case '유자차M':
                alert('아이스 유자차 작은컵추가요');
                break;
            case '유자차L':
                alert('아이스 유자차 작은컵추가요');
                break;
            case '자몽차M':
                alert('아이스 자몽차 작은컵추가요');
                break;
            case '자몽차L':
                alert('아이스 자몽차 작은컵추가요');
                break;
            case '캐모마일L':
                alert('아이스 캐모마일 작은컵추가요');
                break;
            case '블랙퍼스트M':
                alert('아이스 블랙퍼스트 작은컵추가요');
            case '레몬에이드M':
                alert('차가운 레몬에이드 작은컵추가요');
                break;
            case '레몬에이드L':
                alert('차가운 레몬에이드 작은컵추가요');
                break;
            case '라임에이드M':
                alert('차가운 라임에이드 작은컵추가요');
                break;
            case '라임에이드L':
                alert('차가운 라임에이드 작은컵추가요');
                break;
            case '자몽에이드M':
                alert('차가운 자몽에이드 작은컵추가요');
                break;
            case '자몽에이드L':
                alert('차가운 자몽에이드 작은컵추가요');
                break;
            }
        }
}

{/* <script>
function createDIV(){
    obj = document.getElementById("parent");
    newDiv = document.createElement("div");
    newDiv.innerHTML = "새로 생성된 DIV입니다. 누르면 삭제 됩니다.";
    newDiv.setAttribute("id", "myDiv"); // 새롭게 만들어지는 div 태그에 id 값 저장
    newDiv.style.backgroundColor = "yellow";

    // 익명 함수 : 바로 그 이벤트를 실행하기위해 이름을 정하지 않고 바로실행
    newDiv.onclick = function(){
        p = this.parentElement; //부모 HTML 태그요소
        p.removeChild(this); // 자신을 부모 태그로 부터 제거   
    }

    obj.appendChild(newDiv);
}
</script> */}