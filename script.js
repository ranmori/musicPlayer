let image= document.querySelector('img');

const title= document.getElementById('title');
const artist=document.getElementById('artist');
const audio=document.getElementById('myAudio');

const progressContainer=document.getElementById('progress-container');

let progress= document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


const songs=[
  {
    
    title: "Perfect",
    src: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1",
    artists: "Ed Sheeran",
    image: "https://www.dropbox.com/s/crlthbozdznb13g/perfect.jpeg?raw=1"
  },
  {
    title: "7 Rings",
    src: "https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1",
    artists: "Ariana Grande",
    image: "https://www.dropbox.com/s/gobvfxj4r0t053v/7-rings.jpg?raw=1"
  },
  {
    title: "Happier",
    src: "https://www.dropbox.com/s/zp1xfir101y4sc3/happier.mp3?raw=1",
    artists: "Marshmello",
    image: "https://www.dropbox.com/s/xxmwcz14hkn7iwl/happier.png?raw=1"
  },
  {
    title: "Stay",
    src: "https://www.dropbox.com/s/umam9olakop001d/stay.mp3?raw=1",
    artists: "Justin Bieber",
    image: "https://www.dropbox.com/s/kierj5lzst1yx9n/stay.jpg?raw=1"
  },
  {
    title: "Girls Like You",
    src: "https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1",
    artists: "Maroon 5",
    image: "https://www.dropbox.com/s/ouq5zzgbqsk9zx0/girls-like-you.png?raw=1"
  }
];
let isPlaying= false;
let trackIndex=0;

// load the songs and update the dom
 function loadSong(songs){
  title.textContent=songs.title;
  artist.textContent=songs.artists;
  audio.src=songs.src;
  image.src=songs.image;
}

/// create a function for when paused and played


function play(){
  isPlaying=true;
  playBtn.classList.replace('fa-play','fa-pause');
  
  audio.play();
}
function pause(){
  isPlaying= false;
   playBtn.classList.replace('fa-pause','fa-play');
  audio.pause();
}
// when you hit on next trackindex goes to the last played
function nextSong(){
  if (trackIndex < songs.length-1){
    trackIndex++;
  }else {
    trackIndex=0;
  }
  loadSong(songs[trackIndex]);
  play();
};
// hit on prevous keep on playing hte next song
function prevSong(){
  if (trackIndex >  0){
    trackIndex--;
    
  }else {
    trackIndex= songs.length-1;
  }
  loadSong(songs[trackIndex]);
  play();
}
/// add an eventListenr

playBtn.addEventListener('click',()=>(isPlaying ? pause():play()));

                        
                        
// call the load function

loadSong(songs[trackIndex]);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click',nextSong);
audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', progressDuration);
// and finally lets deal with the duration buttons


function progressDuration(){
  /// check if the the currenttime is number
 if (!isNaN(currentTimeEl.duration)){
  
 // 
  const {duration,currentTime}=e.srcElement;
  // calcualte the progress bar and update it using percentages
  const progressPer= (currentTime /  duration)*100;
  progress.style.width=`${progressPer}%`
  
  
  
  // calcualte the amount od time left
  const durationMin= Math.floor(duration/100);
   
   const durationSec=Math.floor(duration% 60);
   
   const currentMin=Math.floor(currentTime/60);
   const currentSec=Math.floor(currentTime%60);
   
   if (durationSec <10){
     durationSec= 0 + durationSec; 
   }
   if (surrentSec <10){
     currentSec= 0 + currentSec;
   }
 
 
 currentTimeEl.textContent= `${currentMin}:${currentSec}`;
 
 }
  
  

  
  
  
                        
}
