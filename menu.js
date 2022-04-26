
//선언
let a=0;
let c=1;
let 커피 = document.getElementsByClassName("menu-coffee");
let coffee = ["아","콜","카","마"];

//아이스 클릭시 a=1, 뜨거운 클릭시 a=0
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



//아래 함수는 메뉴에서 M,L 버튼 클릭시 실행되는 함수임 
//기능은 클릭한 버튼의 ID 값확인하고 그 값에따라 메뉴를 장바구니에 넣는 용도임.
function reply_click(clicked_id){
    if(a==0){
        switch(clicked_id){
            case '아메리카노M':
                if(clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()' value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  


                }else if(coffee[아]!=0){
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '아메리카노L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '콜드브루M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '콜드브루L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카페라떼M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카페라떼L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카라멜마끼야또M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카라멜마끼야또L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '캐모마일M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '캐모마일L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '블랙퍼스트M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '블랙퍼스트L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '유자차M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '유자차L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽차M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽차L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '레몬에이드M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '레몬에이드L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '라임에이드M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '라임에이드L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽에이드M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽에이드L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            }
        }else if(a>0) {switch(clicked_id){
            case '아메리카노M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '아메리카노L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '콜드브루M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '콜드브루L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카페라떼M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카페라떼L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카라멜마끼야또M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '카라멜마끼야또L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '캐모마일M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '블랙퍼스트L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '유자차M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '유자차L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽차M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽차L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '캐모마일L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '블랙퍼스트M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '레몬에이드M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '레몬에이드L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '라임에이드M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '라임에이드L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽에이드M':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
            case '자몽에이드L':
                if(clicked_id==clicked_id){
                    const opControl = document.getElementById("optionControl");
                    let scroll = confirm("장바구니에 "+clicked_id+"가 담겼습니다.\n장바구니로 이동할까요?")
                        if(scroll)
                            {
                                opControl.scrollIntoView({behavior: "smooth", block: "center"});
                            }
                            else
                            {
                                undefined
                            }
                    obj = document.getElementById("optionControl");
                    newDiv = document.createElement("div");     
                    newDiv.innerHTML = clicked_id+" <div align='left'> <input type='button' class='연산' onclick='count()' value='+'/><input type='text' id='result' value=1></input><input type='button' class='연산' onclick='count()'   value='-'/></div>";   
                    newDiv.setAttribute("class", "myDiv");      
                    newDiv.style.backgroundColor = "rgba";      
                    obj.appendChild(newDiv);  
                    clicked_id= toString(clicked_id)+("sex");
                    
                }else{
                    alert("이미 담겨있는 품목입니다.")
                }   
                break;
        }

    }
}


function count() {
    let value = document.getElementById('result').value;
    let 연산 = document.getElementsByClassName("연산").value;
    if(연산==='plus'){
        document.getElementById('result').value = ++value;
    }else if(연산==='minus'){
        document.getElementById('result').value = --value;
    }
}


