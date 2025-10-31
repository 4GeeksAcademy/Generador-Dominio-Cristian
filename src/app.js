import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['camiones', 'capcom', 'midu', 'griterio', 'internet'];
let domains = ['com', 'es', 'dev', 'io', 'net']


const dominioGenerator = () =>{
  let dominioFinal =[]
  for(let pro of pronoun){
    for(let a of adj){
      for(let no of noun){
        for(let dom of domains){
          let baseDominio = (`${pro}${a}${no}`);

          if(no.endsWith(dom)){
            baseDominio = baseDominio.slice(0, -dom.length);
            //console.log(`-------------`, aux)
          }
          dominioFinal.push(`${baseDominio}.${dom}`)
        }
      }
    }
  }

  return dominioFinal;
}

console.log(dominioGenerator())



window.onload = function () {
  dominioGenerator();
};


