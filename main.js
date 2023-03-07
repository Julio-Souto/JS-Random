// import { App } from "./App"

// document.addEventListener("DOMContentLoaded", App)

function random1(max,min){
  return Math.floor(Math.random()*(max-min))+min
}

document.getElementById("b_generar").addEventListener("click", () => {
  let max = Number(prompt("Max"))
  let min = Number(prompt("Min"))
  let string = ""
  for(let i=0; i<20; i++){
    string += " "+random1(max,min)
  }
  alert(string)
})


function random2(){
  return random1(100,0)
}

let ejercicio2 = random2();
let input = document.getElementById("aleatorio")
let count = 0;

document.getElementById("b_aleatorio").addEventListener("click", () => { 
  if(Number(input.value)===ejercicio2){
    alert("Has acertado el numero: "+ejercicio2)
    ejercicio2 = random2();
    count = 0;
    return;
  }
  else if(Number(input.value)>ejercicio2)
    alert("El numero es más bajo \nIntentos restantes: "+(10-count))
  else
    alert("El numero es más alto \nIntentos restantes: "+(10-count))
  count++;
  if(count>10){
    alert("Has perdido \nEl número era: "+ejercicio2)
    ejercicio2 = random2();
    count = 0;
  }
})

document.getElementById("enlace_1").addEventListener("click", () => { 
  let upper = false;
  let lower = false;
  let string = prompt("Introduce una frase","Esta es una frase")
  let length = string.length
  if(isNaN(string)){
    for(let i=0; i<length;i++){
      if(string[i]==string[i].toLowerCase()){
        lower=true;
      }
      else if(string[i]==string[i].toUpperCase()){
        upper=true;
      }
      if(upper&&lower){
        break;
      }
    }
    if(upper&&lower)
      alert(string+" - Mezcla de mayúsculas y minúsculas")
    else if(lower)
      alert(string+" - Minúsculas")
    else if(upper){
      alert(string+" - Mayúsculas")
    }
  }
  else{
    alert(string+" - Numérico")
  }
})

document.getElementById("enlace_2").addEventListener("click", () => {
  let string = prompt("Introduce una frase","La ruta nos aporto otro paso natural")
  let palind = string.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[,\s+]/g,"").toLowerCase();
  let check = false;
  let length=palind.length
  alert(palind)
  for(let i = 0; i<=length/2;i++){
    if(palind[i]!=palind[length-i-1]){
      check=true;
      break;
    }
  }
  if(check)
    alert("No es un palíndromo")
  else
    alert("Es un palíndromo")
  
})

