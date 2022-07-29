let turnon = document.getElementById('turnon');
let turnoff = document.getElementById('turnoff');
let header = document.getElementById('header');
let image = document.querySelector("img");
turnon.addEventListener('click',() =>{
    header.innerHTML = 'turn the lights off';
    image.src = "images.png";
})
turnoff.addEventListener('click',() =>{
    header.innerHTML = 'turn the lights on';
    image.src = "download.jpg";
})