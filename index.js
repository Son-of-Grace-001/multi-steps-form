
let error1= document.getElementById("required");
let error2= document.getElementById("required-2");
let error3= document.getElementById("required-3");
let identity = document.getElementById("name");
let mail = document.getElementById("email")
let number = document.getElementById("phone")
let form = document.getElementById("form")
let next = document.getElementById("next")
next.style.color = "hsl(0, 0%, 100%)"

var validRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
mail.addEventListener("keyup",check);
function check(e){
  e.preventDefault();
  
  if (!mail.value.match(validRegex)) {
    mail.style.color = "hsl(354, 84%, 57%)";
    mail.style.border = "1px solid hsl(354, 84%, 57%)";
    error2.innerText= "input valid email";
    error2.style.display = "block";
    return (false)
  }
  error2.style.display = "none";
  mail.style.color = "hsl(229, 24%, 87%)";
  mail.style.border = "1px solid hsl(229, 24%, 87%)";
}

var validNumber = /^[0-9]+$/;
number.addEventListener("input", validate)
function validate(e){
  e.preventDefault();
  
  if (!number.value.match(validNumber)) {
    number.style.color = "hsl(354, 84%, 57%)";
    number.style.border = "1px solid hsl(354, 84%, 57%)";
    error3.innerText= "input valid number";
    error3.style.display = "block";
    return (false)
  }

  error3.style.display = "none";
  number.style.border = "1px solid hsl(229, 24%, 87%)";

  next.addEventListener("click", submit)
  function submit(){
    window.location.href="./select plan/monthly.html"
  }
}

form.addEventListener("submit", required)
function required(e){
  e.preventDefault();
  if (identity.value ===''){
    error1.style.display = "block";
    return false;
  }
  else{
    error1.style.display = "none"
  }

  if(mail.value ===''){
    error2.style.display = "block";
    return false;
  }
  error2.style.display = "none"

  if(number.value === ''){
    error3.style.display = "block"
    return false;
  }
  error3.style.display = "none"
}

let toggle = document.getElementById("toogle")
toggle.addEventListener("click", yearly)
function yearly(){
  window.location.href="./yearly.html"
}


