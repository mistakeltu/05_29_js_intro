console.clear();


const empty = '     gg      ';
console.log(empty.length);
//                     11111
//           012345678901234
const str = 'Pavyzdys';
console.log(str, 8, '>>>', str.length);
console.log(str, 8, '>>>', str.length);

const raide1 = str[0];
console.log(raide1, 'P');
console.log('---------------');

let strIndex = 0;

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.log(str[strIndex++]);
console.log(str[strIndex++]);
console.log(str[strIndex++]);

console.log(str[-1]);
console.log(str[-2]);
console.log(str[-24562]);



// const userFirstName = 'Chuck';
// const userLastName = 'Norris';
const userFirstName = 'Pamela';
const userLastName = 'Anderson';

const userAbbr = `${userFirstName[0]}.${userLastName[0]}.`;
console.log(userAbbr);

const vardas = 'Karolis';
console.log(vardas, 7, '>>>>', vardas.length);
const raide = vardas[2];
console.log(raide);
