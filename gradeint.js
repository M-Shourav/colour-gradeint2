let btn1=document.getElementById('myBtn1');
let btn2=document.getElementById('myBtn2');
let copyDiv=document.querySelector('.copycode');
let rgb1='#004773'
let rgb2="#54d542"

const hexValue=()=>{
    let hexValues='0123456789abcdef';
    let colours="#";
    for(let i=0;i<6;i++){
        colours=colours+hexValues[Math.floor(Math.random()*16)]
    }
    return colours
}

const handleInput1=()=>{
     rgb1=hexValue();
    console.log(rgb1);
    btn1.innerText=rgb1
   document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`
   copyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
}

const handleInput2=()=>{
    btn2.innerHTML=rgb2
     rgb2=hexValue();
    console.log(rgb2);
    btn2.innerText=rgb2
    document.body.style.backgroundImage=`linear-gradient(to right, ${rgb1},${rgb2})`
    copyDiv.innerHTML=`background-image:linear-gradient(to right,${rgb1},${rgb2})`
    
}


btn1.addEventListener('click',handleInput1);
btn2.addEventListener('click',handleInput2);

copyDiv.addEventListener('click',()=>{
   if(true){
    navigator.clipboard.writeText(copyDiv.innerText)
    alert('copied')
   }
})


