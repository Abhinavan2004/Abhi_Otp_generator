var regenrate =document.querySelector(".regenerate");
var display = document.querySelector(".display");

regenrate.addEventListener("click" , function() {
    var length = 6;
    var otp =" "
    for(let i=0; i<length ;i++){
        otp = otp + Math.floor(Math.random()*10).toString() + " "
    }
    display.innerHTML = otp;
    display.style.color = "#253D5B"
    display.style.fontSize = "3rem"
    display.style.display = "flex"
    display.style.justifyContent = "center"
    display.style.alignItems = "center"
    display.style.fontWeight = "bold"
    display.fontStyle = "Roboto"
})
