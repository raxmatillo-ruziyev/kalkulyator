

const first = document.querySelector(".first")
const second = document.querySelector(".second")
const qoshish = document.querySelector(".qosh")
const ayir = document.querySelector(".ayir")
const bol = document.querySelector(".bol")
const kopaytir = document.querySelector(".kopaytir")
const res = document.querySelector(".res")
const ildiz = document.querySelector(".ildiz")
const daraja = document.querySelector(".daraja")
const kv = document.querySelector(".kv")
const bir = document.querySelector(".bir")
const ikki = document.querySelector(".ikki")
const uch = document.querySelector(".uch")
const tort = document.querySelector(".tort")
const besh = document.querySelector(".besh")
const olti = document.querySelector(".olti")
const yetti = document.querySelector(".yetti")
const sakkiz = document.querySelector(".sakkiz")
const toqqiz = document.querySelector(".toqqiz")
const nol = document.querySelector(".nol")

bir.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (bir.value-0) 
  

})

ikki.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (ikki.value-0) 

})

uch.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (uch.value-0) 

})

tort.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (tort.value-0) 

})

besh.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (besh.value-0) 

})


olti.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (olti.value-0) 

})

yetti.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (yetti.value-0) 

})

sakkiz.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (sakkiz.value-0) 

})

toqqiz.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (toqqiz.value-0) 

})

nol.addEventListener('click',(e)=>{
  e.preventDefault();
  first.value += (nol.value-0) 

})




qoshish.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =((first.value-0) + (second.value-0))
  res.textContent = natija

})
ayir.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =((first.value-0) - (second.value-0))
  res.textContent = natija

})  
bol.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =((first.value-0) /(second.value-0))
  res.textContent = natija

})
kopaytir.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =((first.value-0) * (second.value-0))
  res.textContent = natija

})
ildiz.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =Math.sqrt(first.value-0) 
  res.textContent = natija

})
daraja.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =((first.value-0) ** (second.value-0))
  res.textContent = natija

})
kv.addEventListener('click',(e)=>{
  e.preventDefault();
  const natija =Math.pow((first.value-0),2)
  res.textContent = natija

})


