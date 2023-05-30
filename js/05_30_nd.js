console.clear();

// Daugybos lentele:
// 8 * 1 = 8
// 8 * 2 = 16
// 8 * 3 = 24
// 8 * 4 = 32
// 8 * 5 = 40
// 8 * 6 = 48
// 8 * 7 = 56
// 8 * 8 = 64
// 8 * 9 = 72
// 8 * 10 = 80


const lentelesAtvaizdavimas = '\n\
\tDaugybos lentele:\n\
\t8 * 1 = 8\n\
\t8 * 2 = 16\n\
\t8 * 3 = 24\n\
\t8 * 4 = 32\n\
\t8 * 5 = 40\n\
\t8 * 6 = 48\n\
\t8 * 7 = 56\n\
\t8 * 8 = 64\n\
\t8 * 9 = 72\n\
\t8 * 10 = 80;'

console.log(lentelesAtvaizdavimas);

const a = 8;
let b = 1;
let c = 2;
let d = 3;
let e = 4;
let f = 5;
let g = 6;
let h = 7;
let i = 8;
let j = 9;
let p = 10;

const multi1 = a * b; 
const multi2 = a * c; 
const multi3 = a * d; 
const multi4 = a * e; 
const multi5 = a * f; 
const multi6 = a * g; 
const multi7 = a * h; 
const multi8 = a * i; 
const multi9 = a * j; 
const multi10 = a * p; 

const turboLentele = '\n\
\tDaugybos lentele:\n\
\t' + a + ' * '+ b + ' = ' + multi1 + '\n\
\t' + a + ' * '+ c + ' = ' + multi2 + '\n\
\t' + a + ' * '+ d + ' = ' + multi3 + '\n\
\t' + a + ' * '+ e + ' = ' + multi4 + '\n\
\t' + a + ' * '+ f + ' = ' + multi5 + '\n\
\t' + a + ' * '+ g + ' = ' + multi6 + '\n\
\t' + a + ' * '+ h + ' = ' + multi7 + '\n\
\t' + a + ' * '+ i + ' = ' + multi8 + '\n\
\t' + a + ' * '+ j + ' = ' + multi9 + '\n\
\t' + a + ' * '+ p + ' = ' + multi10;

console.log(turboLentele);

const sickLentele = `
        Daugybos lentele:
        ${a} * ${b} = ${multi1}
        ${a} * ${c} = ${multi2}
        ${a} * ${d} = ${multi3}
        ${a} * ${e} = ${multi4}
        ${a} * ${f} = ${multi5}
        ${a} * ${g} = ${multi6}
        ${a} * ${h} = ${multi7}
        ${a} * ${i} = ${multi8}
        ${a} * ${j} = ${multi9}
        ${a} * ${p} = ${multi10}

`;

console.log(sickLentele);