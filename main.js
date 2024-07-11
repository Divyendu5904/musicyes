console.log("welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs = [
  { songName: "tu hai kahan", filePath: "1.mp3", coverPath: "1.jpg" },
  { songName: "kabhi na kabhi", filePath: "2.mp3", coverPath: "2.jpg" },
  { songName: "bolo na", filePath: "3.mp3", coverPath: "3.jpg" },
  { songName: "chori kiya re jiya", filePath: "4.mp3", coverPath: "4.jpg" },
  { songName: "lakshya", filePath: "5.mp3", coverPath: "5.jpg" },
  { songName: "desh mere", filePath: "6.mp3", coverPath: "6.jpg" },
  { songName: "kandhon se milte hai kandhe", filePath: "7.mp3", coverPath: "7.jpg" },
  { songName: "ishq-lost and found", filePath: "8.mp3", coverPath: "15.webp" },
  { songName: "ajab si", filePath: "9.mp3", coverPath: "9.jpg" },
  { songName: "jeena yaha marna yaha", filePath: "2.mp3", coverPath: "10.jpg" },
];



// Handle play pause/click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to events
//listen to events
audioElement.addEventListener('timeupdate', () => {
  //updateseekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays()
  
      songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`${songIndex }.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})



document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=10){
        songIndex=0
    }
    else{
songIndex+=1;
}
audioElement.src=`${songIndex }.mp3`;
masterSongName.innerText = songs[songIndex-1].songName
audioElement.currentTime=0
audioElement.play()
masterPlay.classList.remove("fa-play-circle");
masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
songIndex -=1;
}
audioElement.src=`${songIndex-1 }.mp3`;
masterSongName.innerText = songs[songIndex].songName
audioElement.currentTime=0
audioElement.play()
masterPlay.classList.remove("fa-play-circle");
masterPlay.classList.add("fa-pause-circle");
})