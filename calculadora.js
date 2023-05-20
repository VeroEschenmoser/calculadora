
const titulo= document.createElement("h1")
titulo.innerText="Calculadora"
titulo.classList.add("titulo")



const num1 = document.createElement("input")
num1.value = ""
num1.classList.add("display")

const borrar=document.createElement("button")
borrar.value= 0
borrar.innerText="Borrar"
borrar.classList.add("borrar")



const suma= document.createElement ("button")
suma.innerText= "+"
suma.classList.add("suma")

const resta= document.createElement ("button")
resta.innerText= "-"

const dividir= document.createElement ("button")
dividir.innerText= "/"

const multiplicar= document.createElement ("button")
multiplicar.innerText= "*"

const igual=document.createElement("button")
igual.innerText= "="


const off =document.createElement ("button")
off.innerText= "on/off"
off.classList.add("off")


const app = document.querySelector(".app")
app.classList.add("calculator")


function handleClick(e){
  num1.value += e.target.value;
  console.log(typeof num1.value)
}

app.appendChild(titulo)
app.appendChild(num1)



var i=0
for (i;i<10;i++){
  let boton = document.createElement("button")
  boton.innerText=i
  boton.id=i
  boton.value=i
  app.appendChild(boton)
  boton.addEventListener("click", handleClick)
  
}
app.appendChild(suma)
app.appendChild(resta)
app.appendChild(dividir)
app.appendChild(multiplicar)
app.appendChild(igual)
app.appendChild(borrar)
app.appendChild(off)


var operacion



function handleClicksuma(e){
  operacion=num1.value + "+"
  num1.value= ""
}
suma.addEventListener("click", handleClicksuma)

function handleClickresta(e){
  operacion=num1.value + "-"
  num1.value= ""
}
resta.addEventListener("click", handleClickresta)

function handleClickdividir(e){
  operacion=num1.value + "/"
  num1.value= ""
}
dividir.addEventListener("click", handleClickdividir)

function handleClickmultiplicar(e){
  operacion=num1.value + "*"
  num1.value= ""
}
multiplicar.addEventListener("click", handleClickmultiplicar)

function handleClickborrar(e){
  num1.value=""
}
borrar.addEventListener("click", handleClickborrar)



function handleClickresultado(e){
  operacion+=num1.value
  num1.value=eval(operacion)
}
igual.addEventListener("click", handleClickresultado)


function handleClickoff(e){
app.classList.toggle("dark-mode")
}
off.addEventListener("click", handleClickoff)

















