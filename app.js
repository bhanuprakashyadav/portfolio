var i = 0;
var j =1;
var txt = 'WEB DEVELOPER AND PROGRAMMER'; /* The text */
var speed = 300; /* The speed/duration of the effect in milliseconds */
const profession = document.querySelector(".profession");

setInterval(function typeWriter() {
    
    if (i < txt.length) {
    profession.innerHTML += txt.charAt(i);
    i++;
    setInterval(typeWriter, speed);
    }  
}
, 1000)