const peso1 = 1.0;
const peso2 = 2.0;

console.log(peso1, peso2)
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 6.5874;
const avaliacao2 = 8.6987;
 
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso2 + peso1)
console.log(media.toFixed(2));
console.log(media.toString(2));
console.log(typeof Number);



