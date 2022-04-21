function addice() {
    var menu_price = document.getElementById('menu_price');
    for (let i = 0; i <5; i++) {
        if (menu_price.innerText == "price M=3,000원 L=4,000원") {
            menu_price.innerText = "price M=3,500원 L=4,500원";
          } else if (menu_price.innerText == "price M=3,500원 L=4,500원") {
              menu_price.innerText = "price M=3,000원 L=4,000원"
          }
        
        
        
    }
}
