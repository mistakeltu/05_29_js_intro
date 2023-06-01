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


// pav bet koks, iskvietima kaip norim, bet visais atvejais grazinimas atvejimas butu toks

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