let form=document.querySelector("#form");

form.addEventListener("submit",function(ev){
   
    ev.preventDefault();
    let inp=document.querySelector(".input");
    let value=inp.value;
    let far=parseFloat(value)*9/5+32;
    
    convert(value,far);
    inp.value="";
   
})

function convert(value,far)
{
    let p=document.querySelector(".print");
    p.innerHTML=`<h1>${value} °C = ${far} °F`;
}



