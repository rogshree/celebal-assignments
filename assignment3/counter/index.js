
// const contract =()=>{
//     let coding = document.getElementById('coding');
//     let projects = document.getElementById('projects');
//     let hearts = document.getElementById('hearts');
//     coding.innerHTML = 0;
//     projects.innerHTML = 0;
//     hearts.innerHTML = 0;
//     let timer = 0;
//    let chalu = setInterval(()=>{
//         ++timer;
//         coding.innerHTML = timer;
//         projects.innerHTML = timer;
//         hearts.innerHTML = timer;
//         if(timer==500)
//         clearInterval(chalu);
//     },1)
// }
// contract();
let contract = document.querySelectorAll('span');
contract.forEach((contra)=>{
    let target = Number(contra.getAttribute('data-target'));
    let starting = +contra.innerHTML;
    let inc = target/100;
    let timer = setInterval(() => {
        starting+=inc;
        contra.innerHTML = starting;
        if(starting==target)
        clearInterval(timer);
    }, 10);
})
