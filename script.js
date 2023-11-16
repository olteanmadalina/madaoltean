var button= document.getElementById("button")
var body= document.getElementById("body")
var nume=document.getElementById("nume")
var prenume=document.getElementById("prenume")
var img=document.getElementById("imagine")
var pasiuni=document.getElementById("pasiuni")
var experiente=document.getElementById("experiente")
var an=document.getElementById("anNastere")

button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge )

const d= new Date()
var year=d.getFullYear()
function altaViata()
{
 nume.innerHTML="Functie: Specialist IT"
 prenume.innerHTML="Locul de munca: Silicon Valley "
 pasiuni.innerHTML="Realizari:Viata de vis "
 experiente.innerHTML="Experiente: <li>internship</li><li>licenta</li>"
 img.src="poza2.jpg" 
 body.style.backgroundColor="orange"
 body.style.color="blue"
 img.style.opacity="90%"
 img.style.borderWidth="70%"
 img.style.width= "300px"
 img.style.height="400px"
}

function displayAge()
{
 an.innerHTML=year - an.innerHTML
}
