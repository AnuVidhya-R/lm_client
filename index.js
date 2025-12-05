
function cli(){
    alert("Login Successfully");
}
function clic(){
    const heading=document.getElementById("data");
    heading.innerHTML="<i>Welcome To The Tech World...<i>"
   
}
let a = 0;
function coun1() {
  const heading = document.getElementById("data2");
  heading.innerHTML = ++a;
}
/*function clic2(){
    const heading=document.getElementById("data1");
    const arr=[]
    for(let i=0;i<=10;i++){
        arr[i]=i;
    }
    heading.innerText=arr;
} */

const arr=()=>{
    const heading=document.createElement("h3");
    heading.innerHTML="<i>Computer</i>";
    const cont=document.getElementById("container");
    cont.appendChild(heading);
}

document.addEventListener("click",()=>{
    const heading=document.createElement("h1");
    heading.innerText="Computer❤️";
    const cont =document.getElementById("container");
    cont.appendChild(heading);
})


const col=function(){
    const div =document.getElementById("cont")
    div.style.backgroundColor="pink"
}   


const body=document.body;
const ligtbut=document.getElementById("lightmode")
const darkbut=document.getElementById("darkmode")

ligtbut.addEventListener("click",()=> setTheme("light"))
darkbut.addEventListener("click",()=> setTheme("dark"))


const setTheme =(theme)=>{
    if(theme ==="dark"){
           body.classList.add("dark")
    }
    else{
          body.classList.remove("dark")
    }
    sessionStorage.setItem("theme",theme)
}

const currentTheme=sessionStorage.getItem("theme");

if (currentTheme === "dark"){
    body.classList.add("dark")
}