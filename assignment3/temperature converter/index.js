const calculateTemp = ()=>{
    let temp = document.getElementById('temp').value;
    let diff = document.getElementById('temp_diff');
    let resultcontainer = document.getElementById('resultcontainer');
   let value = diff.options[diff.selectedIndex].value;
   console.log(value);
   if(value=="cel")
   resultcontainer.innerHTML =`${Math.round(((temp/5)*9)+32)} fehrenheit`;
   else
   resultcontainer.innerHTML =`${Math.round(((temp-32)*5)/9)} celsius`;
}