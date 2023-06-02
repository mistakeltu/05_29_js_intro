console.clear();

// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę 
// kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.

const firstName = 'Petras';
const lastName = 'Petraitis';


function stringLength(vardas, pavarde){
   let string; 
    if(vardas.length > pavarde.length){
        string = vardas;
   }else {
        string = pavarde;
   }
   
    return string;
}   

const length1 = stringLength(firstName, lastName)

console.log(length1);

console.clear();

// Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir 
// šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus 
// paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius 
// atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

const name = 'Karolis';
const surname = 'Kavaliauskas';
const year = 1996;
const currentYear = 2023;

function hello(vardas, pavarde){
    let myYear = currentYear - year;
    return `As esu ${vardas} ${pavarde}. Man yra ${myYear} metai(u)`;
}

console.log(hello(name, surname));


// Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę 
// kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš 
// trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.

console.clear();

const loveName = 'Jonas';
const loveSurname = 'Jonaitis';

function lastStrings(vardas, pavarde){
    let index;
    let index1;
    let index2;

         index = loveName.length - 1;
         index1 = loveName.length - 2;
         index2 = loveName.length - 3;
    
    let index3;
    let index4;
    let index5;
     
              index3 = loveSurname.length - 1;
              index4 = loveSurname.length - 2;
              index5 = loveSurname.length - 3;

    return `Vardo paskutinis trys raides: ${vardas[index]}, ${vardas[index1]}, ${vardas[index2]}, Pavardes paskutines trys raides: ${pavarde[index3]}, ${pavarde[index4]}, ${pavarde[index5]}`;
}


console.log(lastStrings(loveName,loveSurname));

// Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” 
// (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

console.clear();

let stringas = `Once upon a time in hollywood`;
let naujasStringas = stringas
    .replaceAll('o', '*')
    .replace('O', '*')
;

console.log(naujasStringas);

// Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes 
// nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(0, 2));
console.log(getRandomInt(0, 2));
console.log(getRandomInt(0, 2));
console.log(getRandomInt(0, 2));