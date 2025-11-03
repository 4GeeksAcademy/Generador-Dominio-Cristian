import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['camiones', 'capcom', 'midu', 'griterio', 'internet'];
const domains = ['com', 'es', 'dev', 'io', 'net']


const dominioGenerator = () => {
  let finalDomain = []
  for (let pronouns of pronoun) {
    for (let adjetive of adj) {
      for (let nouns of noun) {
        for (let domain of domains) {
          let baseDomain = (`${pronouns}${adjetive}${nouns}`);

          if (nouns.endsWith(domain)) {
            baseDomain = baseDomain.slice(0, -domain.length);
          }
          finalDomain.push(`${baseDomain}.${domain}`)
        }
      }
    }
  }

  return finalDomain;
}

console.log(dominioGenerator())



window.onload = function () {
  dominioGenerator();
};


