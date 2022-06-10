const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.getElementsByClassName("class"); 

btn.addEventListener('click' , function(){
    console.log(" event listener");
    let hexColor = "#";
    for (let i =0; i<6; i++) {
        hexColor += hex[getRandColor()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandColor(){
    return Math.floor(Math.random() * hex.length);
}