const a = 9;
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

export {sickLentele};