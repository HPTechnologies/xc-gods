const audio = document.getElementById("audio");
const text = document.getElementById("text");
index = 0;

audio.addEventListener("ended", () => {
  index += 1;
  audio.src = tracks[index][1];
});

audio.addEventListener("canplay", () => {
  text.innerText = ``;
  audio.play();
});


// Sources
const order = [

];

const tracks = [
  ["AC/DC - Thunderstruck", "/Tracks/AC/DC - Thunderstruck.mp3"],

  ["A Flock Of Seagulls - I Ran", "/Tracks/A Flock Of Seagulls - I Ran.mp3"],

  ["Bon Jovi - Livin' On A Prayer", "/Tracks/Bon Jovi - Livin' On A Prayer.mp3"],
  ["Bon Jovi - Runaway", "/Tracks/Bon Jovi - Runaway.mp3"],

  ["Def Leppard - Animal", "/Tracks/.mp3"],
  ["Def Leppard - Hysteria", ""],
  ["Def Leppard - Photograph", ""],

  ["Dokken - In My Dreams", ""],
  ["Dokken - Into The Fire", ""],

  ["Europe - The Final Countdown", ""],

  ["Firehouse - Love Of A Lifetime", ""],

  ["Guns N' Roses - November Rain", ""],
  ["Guns N' Roses - Paradise City", ""],
  ["Guns N' Roses - Sweet Child O' Mine", ""],
  ["Guns N' Roses - Welcome To The Jungle", ""],

  ["Journey - Don't Stop Believin'", ""],
  ["Journey - Faithfully", ""],
  ["Journey - Separate Ways", ""],
  ["Journey - Wheel In The Sky", ""],

  ["Poison - Every Rose Has Its Thorn", ""],
  ["Poison - Nothin' But A Good Time", ""],
  ["Poison - Talk Dirty To Me", ""],
  
  ["Quiet Riot - Bang Your Head", ""],
];


function getSource(track) {
  let source;
  
  for(let i = 0; i < tracks.length; i++) {
    
    if(track == tracks[i][0]) {     
      return tracks[i][1];
    }

  }

}
