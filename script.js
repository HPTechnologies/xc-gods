const audio = document.getElementById("audio");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
const text = document.getElementById("text");

backButton.innerText = "<<<";
forwardButton.innerText = ">>>";

let tracks = [];
let index = 0;


audio.addEventListener("ended", () => {
  index += 1;
  audio.src = getSource(order[index]);
  text.innerText = order[index];
  audio.play();
});


const order = [
  "Guns N' Roses - November Rain",
  "The Killers - Mr. Brightside",
  "Poison - Talk Dirty To Me"
];

const trackList = [
  "AC/DC - Thunderstruck",

  "A Flock Of Seagulls - I Ran",

  "Bon Jovi - Livin' On A Prayer",
  "Bon Jovi - Runaway",

  "Def Leppard - Animal",
  "Def Leppard - Hysteria",
  "Def Leppard - Photograph",

  "Dokken - In My Dreams",
  "Dokken - Into The Fire",

  "Europe - The Final Countdown",

  "Firehouse - Love Of A Lifetime",

  "Guns N' Roses - November Rain",
  "Guns N' Roses - Paradise City",
  "Guns N' Roses - Sweet Child O' Mine",
  "Guns N' Roses - Welcome To The Jungle",

  "Journey - Don't Stop Believin'",
  "Journey - Faithfully",
  "Journey - Separate Ways",
  "Journey - Wheel In The Sky",

  "Poison - Every Rose Has Its Thorn",
  "Poison - Nothin' But A Good Time",
  "Poison - Talk Dirty To Me",
  
  "Quiet Riot - Bang Your Head",
];


// Create Tracks
for(let track of trackList) {
  tracks.push([track, `Tracks/${track}.mp3`]);
}


// Initial Source
audio.src = getSource(order[index]);


// getSource function
function getSource(track) {
  
  for(let i = 0; i < tracks.length; i++) {
    
    if(track == tracks[i][0]) {     
      return tracks[i][1];
    }

  }

}
