var i = 0;
var j =1;
var txt = 'WEB DEVELOPER AND PROGRAMMER'; 
var speed = 500;
const profession = document.querySelector(".move");

setInterval(function typeWriter() {
    
    if (i < txt.length) {
    profession.innerHTML += txt.charAt(i);
    i++;
    setInterval(typeWriter, speed);
    }  
}
, 1000)


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
    })


    document.getElementById("menul").style.maxHeight = "0px";
    document.getElementById("threeline").addEventListener("click", () =>{
        if(document.getElementById("menul").style.maxHeight == "0px")
        {
            document.getElementById("menul").style.maxHeight = "420px";
            document.getElementById("threeline").style.rotate = "45deg";
        }
        else
        {
            document.getElementById("menul").style.maxHeight = "0px";
            document.getElementById("threeline").style.rotate = "0deg";
        }
    })

    
    
    
    