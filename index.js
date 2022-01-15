const InpuElm=document.querySelector("input");
const span=document.querySelector(".counter");
const InputMaxlentgh=InpuElm.getAttribute("maxlength");

InpuElm.addEventListener("keydown" ,function(){
    span.innerHTML=InputMaxlentgh-InpuElm.value.length;
})
