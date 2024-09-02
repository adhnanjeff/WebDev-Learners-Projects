let incbtn = document.getElementById("ibtn");
let decbtn = document.getElementById("dbtn");
let rsbtn = document.getElementById("rbtn");
let count = 0;;;;

incbtn.onclick = function() {
    count++;
    document.getElementById("myLabel").textContent= count; 
}

decbtn.onclick = function() {
    count--;
    document.getElementById("myLabel").textContent= count; 
}
rsbtn.onclick = function () {
    count = 0;
    document.getElementById("myLabel").textContent= count; 
}
