console.log("Welcome to Spotify");

// Intailize the Variabless
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "BEETE LAMHE - Krishnakumar Kunnath [NCS Release]", filePath:"song/1.mp3", coverPath:"covers/1.png"},
    {songName: "BANDEYA - Arjit Singh", filePath:"song/2.mp3", coverPath:"covers/2.png"},
    {songName: "HAAN TU HAIN - Krishnakumar Kunnath", filePath:"song/3.mp3", coverPath:"covers/3.png"},
    {songName: "JAB SE TERE NAINA - Shaan", filePath:"song/4.mp3", coverPath:"covers/4.png"},
    {songName: "KALLE KALLE REHAN - RFAK", filePath:"song/5.mp3", coverPath:"covers/5.png"},
    {songName: "KUCH IS TARAH - Atif Aslam", filePath:"song/6.mp3", coverPath:"covers/6.png"},
    {songName: "LAYI VI NA GYEE - Sukhwinder Singh", filePath:"song/7.mp3", coverPath:"covers/7.png"},
    {songName: "JAON KAHAN - RFAK", filePath:"song/8.mp3", coverPath:"covers/8.png"},
    {songName: "AKHIAN - Happy Raikoti", filePath:"song/9.mp3", coverPath:"covers/9.png"},
    {songName: "TERI YAADON MEIN - KK & Shreya Goshal", filePath:"song/10.mp3", coverPath:"covers/10.png"},
]

songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})

// Handle play/pause click 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })
} 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
    songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].singName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
