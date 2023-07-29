document.getElementById("btn_hot").addEventListener("click", function (e) {
  e.preventDefault();
  // alert("welcome to hotelReserve");
  //if (hotelName.length === 0 || hotelPass.length === 0) {
  //alert("incorect hotel mail or password");
  //} else {
  //   alert("Login Successful");
  let hotEmail = document.getElementById("useremail").value;
  let hotPass = document.getElementById("userpassword").value;
  let hotmail = localStorage.getItem("useremail");
  let hotpasW = localStorage.getItem("userpassword");
  console.log(hotmail && hotpasW);
  if (hotEmail === hotmail && hotPass === hotpasW) {
    alert("Login Successful");
  } else {
    alert("Incorrect email or password");
  }
});
