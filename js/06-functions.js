console.clear();

function pirmaRaide(vardas) {
    return vardas[0];
}

const r1 = pirmaRaide('Jonas');
const r2 = pirmaRaide('Karolis');
console.log(r1, r2);


function inicialai(inicialas1, inicialas2) {
    return `${inicialas1[0]}. ${inicialas2[0]}.`
}


const ini1 = inicialai('Chuck', 'Noris');
const ini2 = inicialai('Chuck1', 'Noris1');

console.log('Inicialas 1:', ini1);
console.log('Inicialas 2:', ini2);

console.clear();


function pasisveikinimas(vardas, metai){
    return `Sveiki, mano vardas ${vardas} ir man ${metai}`;
}


const zmogus = pasisveikinimas('Jonas', 99);
const zmogus1 = pasisveikinimas('Ona', 99);
const zmogus2 = pasisveikinimas('Maryte', 99);
const zmogus3 = pasisveikinimas('Juozas', 99);

console.log(zmogus);
console.log(zmogus1);
console.log(zmogus2);
console.log(zmogus3);


// Jonas: paskutinis pazymys yra 8.
// Maryte: paskutinis pazymys yra 8.
// Petras: paskutinis pazymys yra 7.
// Ona: paskutinis pazymys yra 5.

// const stud1 = 'Jonas';
// const marks1 = [10, 2, 8, 2, 10];
// const index = marks1.length - 1;

// function studentIntro (studentas, marks1){

//     return `${studentas}: paskutinis pazymys yra: ${marks1}`;
// }

// console.log(studentIntro(stud1,marks1[index]));

//const vardas = `Karolis`;
//const inicialas = vardas[0];

// function pirmaRaide(firstLetter){
//     return firstLetter[0];
// }

// console.log(pirmaRaide('Karolis'));

// function inicialai(pirmas, antras){
//     return `${pirmas[0]}. ${antras[0]}. `;
// }

// const ini1 = inicialai('Chuck', 'Norris');
// const ini2 = inicialai('Karolis', 'Norris');

// console.log(ini1);
// console.log(ini2);

//Sveiki, mano vardas Jonas ir man 99 metai!
//Sveiki, mano vardas Antanas ir man 69 metai!
//Sveiki, mano vardas Kestas ir man 79 metai!
//Sveiki, mano vardas Zygis ir man 88 metai!

// function metai(vardas, metai){
//     return `Sveiki, mano vardas ${vardas} ir man ${metai}`;
// }

// const metai1 = metai('Jonas', 99);
// const metai2 = metai('Antanas', 69);
// const metai3 = metai('Kestas', 79);
// const metai4 = metai('Zygis', 88);

// console.log(` ${metai1}\n ${metai2}\n ${metai3}\n ${metai4}`);

