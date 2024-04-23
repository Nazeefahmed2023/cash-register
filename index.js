let a=document.getElementById('input1');
let b=document.getElementById('input2');
let c=document.getElementById('btn');
let e=document.getElementById('form')
let f=document.getElementById('p')
c.addEventListener('click',function(){
let d=document.createElement('li')
d=b.value-a.value
f.append(d)
f.innerHTML="result:"+d;
})