

//input 포커스 이동
function focusMove(){
    let input= document.querySelectorAll("input");
    for(let i=0; i<input.length; i++){
        input[i].setAttribute('maxlength','1');
        input[i].addEventListener('keydown',keyDown); 
    }
    function keyDown(event){
        console.log(event.target.maxLength)
        if(event.target.value.length === event.target.maxLength && event.target.nextElementSibling){
            event.target.nextElementSibling.focus();
        }
        //backspace
        if(event.keyCode === 8){
            if(event.target.value.length !== event.target.maxLength && event.target.previousElementSibling){
                event.target.previousElementSibling.focus();
            }
        }
    
    }
}
focusMove();


// 답안
let answer = ["style","apple","grape","mouse","pizza","arche","width","world","japan","korea","table","chair","tiger","eagle","buddy","sport","sunny","windy","front","cross","mouth","river","draft","phone","horse","cloud","tesla","seoul","state","spair","latte","black","white","green","italy","queen","swiss","paris","worry","cheap","sheep","snake","glass","click","enter"]

//랜덤함수

let maxRandom = answer.length;

function random(max){
    return Math.floor(Math.random() * (max + 1));
}
let randomAnswer = random(maxRandom);
console.log(answer[randomAnswer]);




//배경색 지정
const submitButton = document.querySelector('.button');
let count = 0;

submitButton.addEventListener("click",function(){
    const wordBox = document.querySelectorAll(".word_box");
    console.log(wordBox);
    for(let i=0; i<wordBox.length; i++){
        if(wordBox[i].value === answer[randomAnswer][i]){
            wordBox[i].style.background = 'royalblue';
            wordBox[i].style.color = 'white';
        }else if(answer[randomAnswer].includes(wordBox[i].value)){
            wordBox[i].style.background = 'palegoldenrod'
        }else {
            wordBox[i].style.background = 'gray';

        }
        
        wordBox[i].classList.remove('word_box');
    }
    const result = Array.from(wordBox).every((word) => word.style.background === "royalblue");
    console.log(result);
    if(result === true){
        alert("congratulations");
    }else {
        let template = `<div class="word_wrap">
        <input class="word_box"></input>
        <input class="word_box"></input>
        <input class="word_box"></input>
        <input class="word_box"></input>
        <input class="word_box"></input>    
    </div>`

    document.querySelector('body').insertAdjacentHTML('beforeend',template);

    focusMove();
    
    }
    count++;
    if(count === 6){
        if(result === true){
            alert("congratulations");
        }else {
            alert("fail");
            location.reload();
        }
        
    }
})
