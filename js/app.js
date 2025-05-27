console.log('JS grid')

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

// generare 64 square ciasciuno con un numero da 1 a 64 diverso
const numeri = [];
const righe = 8;
const colonne = 8;
const celleTotali = righe * colonne;

do {
  const n = getRandomIntInclusive(1, celleTotali);
  if (!numeri.includes(n)) {
    numeri.push(n);
  }

} while (numeri.length < celleTotali)

console.log(numeri)

const gridElement = document.querySelector('.grid');

// generare le celle html e appenderle nel dom
for (let i = 0; i < numeri.length; i++) {
  const numero = numeri[i];
  const element = document.createElement('div');
  element.classList.add('square');
  element.append(numero);

  gridElement.appendChild(element);


  // al click su un quadrato
  // se il numero è pari colorare di verde
  // altrimenti colorare di rosso
  element.addEventListener('click', function () {
    if (parseInt(this.innerHTML) % 2 === 0) {
      this.classList.add('even');
    } else {
      this.classList.add('odd');
    }
  })
}