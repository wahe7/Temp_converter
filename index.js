let form=document.querySelector(".form");
let form1=document.querySelector(".form1");
let form2=document.querySelector(".form2");

form.addEventListener("click",function(ev){
   
    ev.preventDefault();
    let inp=document.querySelector(".input");
    let value=inp.value;
    let far=parseFloat(value)*9/5+32;
    let p=document.querySelector(".input1");
    p.value=far;
    let kel=parseFloat(value)+273.15;
    let k=document.querySelector(".input2");
    kel=kel.toFixed(3);
    k.value=kel;
   
})






form1.addEventListener("submit",function(ev){
   
    ev.preventDefault();
    let inp1=document.querySelector(".input1");
    let value1=inp1.value;
    let cel=(parseFloat(value1)-32)*5/9;
    let cel1=cel.toFixed(3);
    
    let t=document.querySelector(".input");
    t.value=cel1;
    let k=document.querySelector(".input2");
    let kel=(parseFloat(value1)-32)*5/9+273.15;
    kel=kel.toFixed(3);
    k.value=kel;

   
   
})



form2.addEventListener("submit",function(ev){
   
    ev.preventDefault();
    let inp2=document.querySelector(".input2");
    let value2=inp2.value;
    let cel=(parseFloat(value2)-273.15);
   let c=document.querySelector(".input");
   cel=cel.toFixed(3);
   c.value=cel;
    
    let t=document.querySelector(".input1");
    let f=(parseFloat(value2)-273.15)*9/5+32;
    f=f.toFixed(3);
    t.value=f;
   
   
   
})
let clr=document.querySelector(".clear");
clr.addEventListener("click",function(ev)
{
    ev.preventDefault();
    let inp=document.querySelector(".input");
    let inp1=document.querySelector(".input1");
    let inp2=document.querySelector(".input2");
    inp.value="";
    inp1.value="";
    inp2.value="";

})



