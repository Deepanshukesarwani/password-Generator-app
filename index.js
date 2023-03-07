console.log("jai mata di");
const copybut=document.querySelector("[data-copyBut]");
const passcontent=document.querySelector("[data-passbox]");
const passlengthdiv=document.querySelector("#passlenghtBox");
const slider=document.querySelector("#passLenSlider");
const uppercase=document.querySelector("#uppercaeLetter");
const lowercase=document.querySelector("#lowerCaseLetter");
const numbercase=document.querySelector("#includeNumber");
const symbolcase=document.querySelector("#includesymbol");
const colorbox=document.querySelector("#colorBox");
const generatorbut=document.querySelector("#GenPassBu");
const checkboxes=document.querySelectorAll("input[type=checkbox]");
// console.log(slider.value);
handleslider();
// let passlen=15;
let count=1;
slider.value=10;
handlecheckbox();
passlengthdiv.textContent=slider.value;
let passwordLength=passlengthdiv.textContent;
console.log(passwordLength);
function randomNumberGenerator(max,min){
    let num=Math.floor(Math.random()*(max-min)+min);
    return num;
}
function upcase(){
   let asciofUpper=randomNumberGenerator(90,65);
    const characters = String.fromCharCode(asciofUpper);
    return characters
}
function lowcase (){
    let ascioflowcase=randomNumberGenerator(122,97);
    const characters = String.fromCharCode(ascioflowcase);
    return characters
}
function number(){
    let n=randomNumberGenerator(9,0);
}
function symbolgen(){
    let arr=['!','@','#','$','%','*','(','_','^'];
    let indexnumber=randomNumberGenerator(9,0);
    let sym=arr[indexnumber];
    return sym;
}
function handleslider(){
    slider.addEventListener('input',(e)=>{
        passlengthdiv.textContent=e.target.value;
        console.log("its sliding")
    });
}
copybut.addEventListener('click',()=>{
    navigator.clipboard.writeText(passcontent.value);
});
function handlecheckbox(){
    // count=0;
    checkboxes.forEach( (checkbox) => {
        if(checkbox.checked)
            count++;
    });
    console.log(count);

    //special condition
    if(passwordLength < count ) {
        passwordLength = count;
        handleslider();
    }
}
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheckbox())
})
   

