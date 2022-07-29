const acting = () => {
    let chacting = document.getElementById("action");
    chacting.innerHTML = "&#xf2cb";
    chacting.style.color = "#0000FF";
    setTimeout(() => {
        chacting.innerHTML = "&#xf2ca";
        chacting.style.color = "#f8b627";
        setTimeout(() => {
            chacting.innerHTML = "&#xf2c9";
            setTimeout(()=> {
                chacting.innerHTML = "&#xf2c8";
                setTimeout(()=>{
                    chacting.innerHTML = "&#xf2c7";
                    chacting.style.color = "#d63031";
                },1000)
            },1000)
        },1000);
    },1000);
    
}
acting();
setInterval(acting,5000);