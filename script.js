

var container=document.querySelector('.container')

var carte=document.querySelectorAll('.carte')

var plus=document.querySelectorAll('.plus')

var moins=document.querySelectorAll('.moins')
var mydelete=document.querySelectorAll('.mydelete')
var price=document.querySelectorAll('.price')
var totalid=document.querySelector('.totalid')


var nombre=document.querySelectorAll('.nombre')

var myheard=document.querySelectorAll('.myheard')




for(let i=0; i<plus.length; i++){
    
    plus[i].addEventListener('click', ()=>{
    plus[i].nextElementSibling.innerHTML++ 
    calculatetotal()
    
    })   
}
function calculatetotal(){
    let total=0
    
    for (let i=0; i<nombre.length; i++){
        total=parseInt(total)+(parseInt(nombre[i].nextElementSibling.nextElementSibling.innerHTML)*(+nombre[i].innerText))
        console.log(total)
        totalid.innerHTML=total
}}


    


for(let i=0; i<moins.length; i++){
   
    moins[i].addEventListener('click', ()=>{
    moins[i].previousElementSibling.innerHTML--
    calculatetotal()
    })
    
    }
    

for(let i=0; i<mydelete.length; i++){
    mydelete[i].addEventListener('click', ()=>{
        carte[i].remove()  })
        calculatetotal()
    }


 
 

    for(let i=0; i<mydelete.length; i++){
myheard[i].addEventListener('click', ()=>{
    myheard[i].classList.toggle('myheardevent') })
    
}

