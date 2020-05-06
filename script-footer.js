function scriptFooter (){
let liTop = document.querySelectorAll(".li-top");
for (let i =0; i < liTop.length; i++){
    liTop[i].addEventListener("click", function(e){
        e.preventDefault();
    let ulDown = liTop[i].nextElementSibling;
    ulDown.classList.toggle("ulActive")        
     let act = liTop[i].firstElementChild;
     let act2 = liTop[i].lastElementChild;
     act.classList.toggle("plus");
     act2.classList.toggle("minus");      
    })
}
}

export default function() {scriptFooter()};