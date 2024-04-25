var i = 0;
var j =1;
var txt = 'WEB DEVELOPER AND PROGRAMMER'; /* The text */
var speed = 500; /* The speed/duration of the effect in milliseconds */
const profession = document.querySelector(".move");

setInterval(function typeWriter() {
    
    if (i < txt.length) {
    profession.innerHTML += txt.charAt(i);
    i++;
    setInterval(typeWriter, speed);
    }  
}
, 1000)

// var icon = document.getElementsByClassName(moon);
// icon.onclick = function(){
//     document.body.classList.toggle("light-theme");
// }
const icon = document.getElementById('icon');

    icon.addEventListener('click', () => {
        document.body.classList.toggle("light-theme");
        if(document.body.classList.contains("light-theme"))
        {
            icon.src = "sun-solid-24.png ";
        }
        else
        {
            icon.src = "moon-solid-24.png";
        }
        console.log('clicked');
    })