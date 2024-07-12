let btnList = document.querySelectorAll(".boxes");//it is an html collection not an array
let r = false;
let t = true;
let k = true;
let num = Math.random()*10;
if(num < 5)
{
    k = true;
}
else{
    k = false;
}
let winning = [[0,1,2] , [3,4,5] ,[6,7,8] , [0,4,8] ,[0,3,6],[2,5,8] , [2,4,6] ,[1,4,7]];
let n = document.querySelector("#newGame");
let reset = document.querySelector("#reset");
n.disabled = true;
let u = false;
for(let i = 0 ; i < btnList.length ; i++)
{
btnList[i].addEventListener("click" , () =>{
  if(btnList[i].innerHTML == "" && t)
  {
    r = true;
    if(k)
    {
        btnList[i].innerHTML = "X";

    }
    else 
    {
btnList[i].innerHTML = "O";
    }
     k = !(k);
}

    for(let arr of winning)
    {
        let a = btnList[arr[0]].innerText;
        let b = btnList[arr[1]].innerText;
        let c = btnList[arr[2]].innerText;
        if(a !== "" && b !== "")
        {
        if(a == b && b == c )
        {
            t= false;
          u = true; 
          if(r)
          {
        putImg();
           let e2 = document.createElement("h2");
           e2.innerText = `${a} Won !`;
           document.body.childNodes[2].before(e2);
           e2.style.display = "inline";
       e2.style.margin ="0px";
           n.disabled = false;
           reset.disabled= true;
           e2.style.color = "green";
           r = false;
          }

        }
       
    }
    }
    let l = true;
    for(let i = 0 ; i < btnList.length ; i++)
    {
       
            if(btnList[i].innerText == "")
            {
                l = false;
            }
        
    }
    let y = (l);
  if(y && u)
  {
    checkK();
  }
  
   
})
}

const clear = ()=>{
    
        for(let i = 0 ; i < btnList.length; i++)
        {
            btnList[i].innerText="";
   t = true;

}
}
reset.addEventListener("click" ,clear);



n.addEventListener("click" , clear);
const clear2 = () => {
    document.body.firstElementChild.remove();
    if(document.body.firstElementChild.innerText != "Tic Tac")
    {
    document.body.firstElementChild.remove();
    }
    n.disabled = true;
    reset.disabled = false;
}
n.addEventListener("click" , clear2);


const putImg = () =>{
    let e = document.createElement("h2");
    e.innerText = "Congratualtions !";
    e.style.fontFamily ="fantasy";
    e.style.fontSize ="50px";
    e.style.display ="inline";
    e.style.margin = "0px";
     e.style.width = "40vw";
    e.style.color="orange";
    e.style.textShadow="0 1px 1px 1px #000";
  
   document.body.childNodes[1].before(e);
  

}
const checkK = () =>
{
let e = document.createElement("h2");
e.innerText ="OOPs! No one Won";
e.style.fontFamily ="fantasy";
    e.style.fontSize ="50px";
    e.style.display ="inline";
    e.style.margin = "0px";
    e.style.color="orange";
    e.style.textShadow="0 1px 1px 1px #000";
  
   document.body.childNodes[1].before(e);
   n.disabled = false;
   reset.disabled= true;

}
const changeToD =()=>
{
    if(   mode.innerText == "dark mode")
    {
    mode.innerText = "light mode";
    mode.style.backgroundColor ="black";
    mode.style.color = "white";
    document.body.style.backgroundColor = "black";
    }
    else{
        mode.innerText = "dark mode";
        mode.style.backgroundColor ="white";
        mode.style.color = "black";
        document.body.style.backgroundColor = "white";  
    }
}

let mode = document.querySelector("#mode");
mode.addEventListener("click", changeToD);
