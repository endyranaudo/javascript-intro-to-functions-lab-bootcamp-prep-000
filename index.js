// 1
function shout(string){
  return string.toUpperCase()
};


// 2
function logShout(string){
  return console.log(string.toUpperCase())
}


// 3
function whisper(string){
  return string.toLowerCase();
}


// 4
function logWhisper(string){
  return console.log(string.toLowerCase())
}


// 5
function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  } else if (string === string.toUpperCase()) { 
    return "YES INDEED!";
    }
  }
