
console.log("welcome");
let songIndex=0;
let audioElement=new Audio('./assets/man meri jan.mp3');
let masterPlay=document.querySelector("#masterPlay");
let myProgressbar=document.getElementById("myProgressbar");
let gif=document.getElementById("gif");



let songs=[{ songName:"man-meri-jan",filePath:"./assets/swaanre.mp3",coverPath:"./assets/cover/1.jpg"},
{ songName:"man-meri-jan",filePath:"./assets/bawali.mp3",coverPath:"./assets/cover/2.jpg"} ,
{ songName:"man-meri-jan",filePath:"./assets/love nahi to kya hai.mp3",coverPath:"./assets/cover/3.jpg"} ,
{ songName:"man-meri-jan",filePath:"./assets/meri sau.mp3",coverPath:"./assets/cover/4.jpg"} ,
{ songName:"man-meri-jan",filePath:"./assets/tere siva na koi mera.mp3",coverPath:"./assets/cover/5.jpg"} 

]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else
    {   audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})
audioElement.addEventListener('timeupdate', ()=>{
  
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value=progress;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value*audioElement.duration/100;
})