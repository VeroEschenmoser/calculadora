
const titulo= document.createElement("h1")
titulo.innerText="Calculadora"

const num1 = document.createElement("input")

const num2 = document.createElement("input")

const resultado= document.createElement("h2")

const suma= document.createElement ("button")
suma.innerText= "+"

const resta= document.createElement ("button")
resta.innerText= "-"

const dividir= document.createElement ("button")
dividir.innerText= "/"

const multiplicar= document.createElement ("button")
multiplicar.innerText= "*"


const app = document.querySelector(".app")


app.appendChild(titulo)
app.appendChild(num1)
app.appendChild(num2)
app.appendChild(suma)
app.appendChild(resta)
app.appendChild(dividir)
app.appendChild(multiplicar)
//app.appendChild(boton)
app.appendChild(resultado)


var nro1=0
var nro2=0




function handleChangenum1(e){
  
  nro1= e.target.value

}


function handleChangenum2(e){
  
  nro2=e.target.value

}

num1.addEventListener("change", handleChangenum1)
num2.addEventListener("change", handleChangenum2)

function sumar(nro1,nro2){
  
 resultado.innerText= parseInt(nro1)+parseInt(nro2)
}
suma.addEventListener("click", ()=> sumar(nro1, nro2))

function restar(nro1,nro2){
  resultado.innerText= parseInt(nro1)-parseInt(nro2)
}
resta.addEventListener("click", ()=> restar(nro1, nro2))

function division(nro1,nro2){
  resultado.innerText= parseInt(nro1)/parseInt(nro2)
}
dividir.addEventListener("click", ()=> division(nro1, nro2))


function multi(nro1,nro2){
  resultado.innerText= parseInt(nro1)*parseInt(nro2)
}
multiplicar.addEventListener("click", ()=> multi(nro1, nro2))





