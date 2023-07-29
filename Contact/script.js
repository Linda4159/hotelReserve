// alert("welcome to contact page")

// let uContact = [{
//     firstName: "Joe",
//     lastName: "Sam",
//     email: "jonasogboy@gmail.com",
//     phoneNum: "09077846373",
//     inputMessage: "nice to contact u"

// }]

// const getAllD = () => {
//     let userD = new Array();
//     let getAllDetails = localStorage.getItem("ContactD")
//     IF (getAllD !=null )
//     {
//         userD = JSON.parse()
//     }
//     return userD

// }

document.getElementById("btn_submit").addEventListener("click", function (e) {
    e.preventDefault()
    
    alert("thanks for dropping by")
    let firstVar = document.getElementById("fname").value
    let lastN = document.getElementById("lname").value
    let uEmail = document.getElementById("email").value
    let uTel =document.getElementById("number").value
    let uMeassage = document.getElementById("msg").value



     console.log(firstVar, lastN, uEmail, uTel, uMeassage)


     if (uMeassage.trim().length === 0)
     {
        alert("message box cannot be empty, please input")
     } else
        (uMeassage.trim().length >= 10 && uEmail.trim().length >= 10 && firstVar.trim().length >= 2)
     {
          
        localStorage.setItem("fname", firstVar);
        localStorage.setItem("lname");
        localStorage.setItem("email");
        localStorage.setItem("number");
        localStorage.setItem("msg");
        alert("message sent successfully")

        window.location.href = "../index.html";
     }
})

