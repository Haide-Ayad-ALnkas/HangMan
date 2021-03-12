
let goal=0;
//  أ، ب، ت، ث، ج، ح، خ، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ع، غ، ف، ق، ك، ل، م، ن، هـ، و، ي
const letters="ةابتثجحخدذرزسشصضطظعغفقكلمنهوي";
let letterArray=Array.from(letters);
let lettersSpan=document.querySelector(".letters");
letterArray.forEach(letter=>{
    let span=document.createElement("span");
        theletter=document.createTextNode(letter);
        span.appendChild(theletter);
        span.className="box-letter";
        lettersSpan.appendChild(span);
    }
);

// Object Of Words + categores

const words={
    programming:["بايثون","اللغة العربيه"],
    person:["مستر بن","جاكي شان","بروسلي","احمد الشقيري","شيرين"],
    country:["عراق","مصر","سعوديه","تركيا"]
}
let allKeys=Object.keys(words);
let randomPropNumber=Math.floor(Math.random()*allKeys.length);
let randomPropName=allKeys[randomPropNumber];
let randomPropValue=words[randomPropName];


let randomValueNumber=Math.floor(Math.random()* randomPropValue.length);
let randomVuleVule=randomPropValue[randomValueNumber];
document.querySelector(".category span").innerHTML=randomPropName;
console.log(randomVuleVule);

// Select image for prievw
let x=document.querySelector(".hangman-draw"); 
x.style.backgroundImage='url("image/'+randomVuleVule+'.jpg")';

// select letter-guess 

let leterGuess=document.querySelector(".letter-guess");
let ArrayLetterGuess=Array.from(randomVuleVule);
ArrayLetterGuess.forEach(letter=>{
    let letterSpan=document.createElement("span");
    if (letter === " ") {
        letterSpan.className="withSpace";
        goal=+1;
    }
    leterGuess.appendChild(letterSpan);
});

//Tries
let wrongtries=0;

let theDraw=document.querySelector(".hangman-draw");

let guessSpans=document.querySelectorAll(".letter-guess span");

// handle Clicked on letters
document.addEventListener("click",(e)=>{
    document.getElementById("faild").play();
        theStatus=false;
        if (e.target.className === 'box-letter') {
        e.target.classList.add("clicked")
        letterClick=e.target.innerHTML.toLowerCase();
        theChoosenWord=Array.from(randomVuleVule);
        theChoosenWord.forEach((wordletter,index)=>{
            if (letterClick === wordletter) {
                theStatus=true;
                guessSpans.forEach((wordspan,indexspan)=>{
                    if (indexspan === index) {
                        wordspan.innerHTML=wordletter;
                        goal++;
                    }
                })
            }
        });
//if the letter is wrong
 
        if (theStatus !== true) {
            wrongtries++;
            theDraw.classList.add(`wrong-${wrongtries}`);
            if (wrongtries === 9) {
                endGame();
            }
        }else{
           
        }
       if (guessSpans.length === goal) {
           succesGame();
       }
       console.log(goal);
       console.log(guessSpans.length);
    }
});


function endGame() {
    lettersSpan.classList.add("finished");
    let div=document.createElement("div");
    div.className='popup';
    div.appendChild(document.createTextNode(`Game Over ,the word is " ${randomVuleVule} "`));
    document.body.appendChild(div);
    document.getElementById("song").play();
    setTimeout(() => {
        window.location.reload()
    }, 4000);
}
function succesGame() {
    lettersSpan.classList.add("finished");
    let div=document.createElement("div");
    div.className='popup';
    div.appendChild(document.createTextNode(`   أحسنت الكلمة هي [ ${randomVuleVule} ]  ${wrongtries}عدد الاخطاء `));
    document.body.appendChild(div);
    setTimeout(() => {
        window.location.reload()
    }, 4000);
}



//Count Time
let countDiv=document.querySelector('.timeDone');
        var seconds=60,
        remSeconds,
        countDown=setInterval(() => {
        secondPass();
            }, 1000);
        function secondPass() {
        var minutes=Math.floor(seconds/60),
        remSeconds=seconds%60;
        countDiv.innerHTML=minutes+ " : " +remSeconds;
        if (seconds>0) {
            seconds=seconds-1;
        }else{
                clearInterval(countDown);
                countDiv.innerHTML="DONE";
                window.stop();
            setTimeout(() => {
                document.location.reload(true);
            }, 1000);

               
            }
        }
