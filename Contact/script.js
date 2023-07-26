// alert("welcome to contact page")

let uContact = [ "n"]

document.getElementById("btn_submit").addEventListener("click", function (e) {
    e.preventDefault()
    
    alert("thanks for dropping by")
    let firstVar = document.getElementById("fname").value
    let lastN = document.getElementById("lname").value
    let uEmail = document.getElementById("email").value
    let uTel =document.getElementById("number").value
    let uMeassage = document.getElementById("msg").value



     console.log(firstVar, lastN, uEmail, uTel, uMeassage)


     localStorage
})

