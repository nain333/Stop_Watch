const playButton= document.getElementsByClassName('play')[0];
const lapButton= document.getElementsByClassName('lap')[0];
const resetButton=document.getElementsByClassName('reset')[0];
const second=document.getElementsByClassName('second')[0];
const centiSecond=document.getElementsByClassName('milisecond')[0];
const minute = document.getElementsByClassName('minute')[0];
const laps = document.getElementsByClassName('laps')[0];
const clearButton=document.getElementsByClassName('lap-clear-button')[0];
const bg = document.getElementsByClassName('outter-circle')[0];
let isPlay= false;
let secCounter = 0;
let sec;
let centiCounter=0;
let centiSec;
let minCounter =0;
let min;
let isReset=false;
let lapItem=0;
const toggleButton= ()=>{
    lapButton.classList.remove('hidden');
    resetButton.classList.remove('hidden');
    
    
}
const play = ()=>{
    
    if( !isPlay&&!isReset){
        playButton.innerHTML='Pause';
        bg.classList.add('bg-animation');
        min=setInterval(()=>{
            if(min===59){
                minCounter=0;
            }
            minute.innerHTML=`${++minCounter} :`;

        },60000);
        sec=setInterval(()=>{
            if(secCounter===59){
                secCounter=0;
            }
                second.innerHTML= `&nbsp;${++secCounter} :`;
        },1000); 
        centiSec= setInterval(()=>{
            if(centiCounter===100){
                centiCounter=0;
            }
            centiSecond.innerHTML=`&nbsp;${++centiCounter}`;
    },10); 
    isPlay=true;
    isReset=true;
    second.classList.remove('blink');
    minute.classList.remove('blink');
    centiSecond.classList.remove('blink');
    bg.classList.remove('blink');
    bg.classList.remove('pause-bg')
    }
    else{
        playButton.innerHTML='Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay=false;
        isReset=false;
        second.classList.add('blink');
        minute.classList.add('blink');
        centiSecond.classList.add('blink');
        bg.classList.add('pause-bg');
        bg.classList.add('blink')
        
        bg.classList.remove("bg-animation");
        
        
        
    }
    toggleButton();
    
} 

const reset=()=>{
    isReset=true;
    play(); 
    resetButton.classList.add("hidden");
    lapButton.classList.add('hidden');
    second.innerHTML='&nbsp;0 :';
    centiSecond.innerHTML='&nbsp0';
    minute.innerHTML='0 :';
    second.classList.remove('blink');
    minute.classList.remove('blink');
    centiSecond.classList.remove('blink');
    bg.classList.remove('pause-bg');
    bg.classList.remove('blink');
    minCounter=0;
    secCounter=0;
    centiCounter=0;
    lapItem=0;
}
// lap
const lap=()=>{
    // create li
    const li = document.createElement('li');
    // create span
    const number = document.createElement('span');
    const timeStamp= document.createElement('span');
    // set li class to lap-item
    li.setAttribute('class','lap-item');
    number.setAttribute('class','number');
    number.innerText=`#${++lapItem}`;
    timeStamp.setAttribute('class','time-stamp');
    timeStamp.innerHTML=`${minCounter} : ${secCounter} : ${centiCounter}`;
    li.append(number, timeStamp);
    laps.append(li);
    clearButton.classList.remove('hidden');
    
}
const clearAll=()=>{
    laps.innerHTML="";
    laps.append(clearButton);
    clearButton.classList.add('hidden');
}
playButton.addEventListener('click',play);
resetButton.addEventListener('click',reset);
lapButton.addEventListener('click',lap);
clearButton.addEventListener('click',clearAll);
