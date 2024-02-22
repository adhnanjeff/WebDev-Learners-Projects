const input1 = document.getElementById('input');
const convert = document.getElementById('btn');
const checked1 = document.getElementById('rb1');
const checked2 = document.getElementById('rb2');
const show = document.getElementById('show');
let answer;

convert.addEventListener("click",function (e) {
    e.preventDefault();
    const input = input1.value;
    if(checked1.checked){
        answer = 9/5 * input + 32;
        show.textContent = `${answer}° fahrenheit`;
    }else if(checked2.checked){
        answer = input - 32 * 9/5  ;
        show.textContent = `${answer}° celsius`;
    }
    else {
        alert('Motherfucker select an fucking Unit🤬!')
    }

})





