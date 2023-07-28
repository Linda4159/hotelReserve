document.getElementById("ntn-reg").addEventListener("click", function(event){
    event.preventDefault()
    let hot = document.getElementById("hotelname").value
    let hoon = document.getElementById("useremail").value
    let hoot = document.getElementById("PhoneNo").value
    let htto = document.getElementById("state").value
    let hott = document.getElementById("userpassword").value
    let hoto = document.getElementById("Address").value

    if(hot.trim().length === 0 || hoon.trim().length === 0 || hoot.trim().length === 0 ||htto.trim().length === 0 || hott.trim().length === 0 || hoto.trim().length === 0)
    {
      alert("pls fill all field")       
   }else     
   {
      localStorage.setItem("hotelname",hot);
        localStorage.setItem("useremail",hoon);
        localStorage.setItem("phone no",hoot);
        localStorage.setItem("state",htto);
        localStorage.setItem("userpassword",hott);
        localStorage.setItem("address",hoto);
        alert("Registration successful ")
        window.location.href = "../signin/signin.html";
   }  
   
})


    