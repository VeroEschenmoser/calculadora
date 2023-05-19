
const titulo= document.createElement("h1")
titulo.innerText="Calculadora"

const num1 = document.createElement("input")
num1.value = ""

//const num2 = document.createElement("input")

const resultado= document.createElement("h2")


const suma= document.createElement ("button")
suma.innerText= "+"

const resta= document.createElement ("button")
resta.innerText= "-"

const dividir= document.createElement ("button")
dividir.innerText= "/"

const multiplicar= document.createElement ("button")
multiplicar.innerText= "*"

const igual=document.createElement("button")
igual.innerText= "="


const app = document.querySelector(".app")


function handleClick(e){
  num1.value += e.target.value;
  console.log(typeof num1.value)
}

app.appendChild(titulo)
app.appendChild(num1)
//app.appendChild(num2)
app.appendChild(suma)
app.appendChild(resta)
app.appendChild(dividir)
app.appendChild(multiplicar)
app.appendChild(igual)
//app.appendChild(resultado)

var i=0
for (i;i<10;i++){
  let boton = document.createElement("button")
  boton.innerText=i
  boton.id=i
  boton.value=i
  app.appendChild(boton)
  boton.addEventListener("click", handleClick)
}

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


function handleClickresultado(e){
  operacion+=num1.value
  num1.value=eval(operacion)
}
igual.addEventListener("click", handleClickresultado)










// function handleChangenum1(e){
  
//   nro1= e.target.value

// }


// function handleChangenum2(e){
  
//   nro2=e.target.value

// }

// num1.addEventListener("change", handleChangenum1)
// num2.addEventListener("change", handleChangenum2)

// function sumar(nro1,nro2){
  
//  resultado.innerText= parseInt(nro1)+parseInt(nro2)
// }
// 

// function restar(nro1,nro2){
//   resultado.innerText= parseInt(nro1)-parseInt(nro2)
// }
// resta.addEventListener("click", ()=> restar(nro1, nro2))

// function division(nro1,nro2){
//   resultado.innerText= parseInt(nro1)/parseInt(nro2)
// }
// dividir.addEventListener("click", ()=> division(nro1, nro2))


// function multi(nro1,nro2){
//   resultado.innerText= parseInt(nro1)*parseInt(nro2)
// }
// multiplicar.addEventListener("click", ()=> multi(nro1, nro2))








