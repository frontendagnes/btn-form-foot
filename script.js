function scriptForm (){
let input = document.querySelectorAll('.noActive');
let form = document.querySelector('form');
let btn = document.querySelector('.btn');
let name = form.querySelector("input[name = name]");
let surname = form.querySelector("input[name = surname]");
let email = form.querySelector("input[name = email]")
let txt = document.querySelector("#txt");
let error = document.querySelector(".error");

for (let i = 0; i < input.length; i++){
    input[i].addEventListener("blur", function(e){
        e.preventDefault();
        if (input[i].value === ""){
            input[i].classList.add("active")
            input[i].placeholder = "To pole jest wymagane"
        } else
             input[i].classList.remove("active")
    })  

}

btn.addEventListener("click", function(e){
    e.preventDefault();

    let arr = [];

    if(name.value === ""){
       arr.push("Wypełnij pole Imię")
      
   }
   if(surname.value === ""){
    arr.push("Wypełnij pole Nazwisko")
   
}  if(txt.value === ""){
    arr.push("Wpisz treść")
   
}
let eValue = email.value;
if (eValue.indexOf("@") === -1 || email.value ===""){
    arr.push("Podaj prawidłowy adres e - mail")
}

   if (arr.length === 0){
    //    e.target.submit()
       HTMLFormElement.prototype.submit.call(form)
   
   }
   
  else { // if (arr.length > 0)
      error.classList.add("err");
      error.innerHTML = `
      <h3>Przed wysłaniem poparw nastepujące błędy</h3>
      <ul>
      ${arr.map(el => `<li>${el}</li>`).join("")}
     </ul>
      `
  }

})
};

export default function() {scriptForm()};

   



