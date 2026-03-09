const audio = document.getElementById("audio");
index = 0;

audio.addEventListener("ended", () => {
  index += 1;
  if(index < tracks.length) {
    audio.src = tracks[index];
  }
});

// Sources
const songs = [

];

const tracks = [
  ["AC/DC - Thunderstruck", ""],

  ["A Flock Of Seagulls - I Ran", ""],

  ["Bon Jovi - Livin' On A Prayer", ""],
  ["Bon Jovi - Runaway", ""],

  ["Def Leppard - Animal", ""],
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
