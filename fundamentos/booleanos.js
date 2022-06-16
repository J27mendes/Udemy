let ativo = true;
console.log(true);

ativo = 1;
console.log(!!ativo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(ativo = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(ativo = false));

console.log('pra finalizar...');
console.log('' || null || 0 || '123');

let nome = '';
console.log(nome || 'desconhecido');
