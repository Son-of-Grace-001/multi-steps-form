let check1 = document.getElementById("check1")
let check2 = document.getElementById("check2")
let next = document.getElementById("next")

next.addEventListener("click", required)
function required(){
  if(!check1.checked || !check2.checked){
    alert(`pls select adds on`)
    return false
  }
  else{
    window.location.href="./finishing-yearly.html"
  }
}