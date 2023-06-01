console.clear();

// function suma(masyvas) {
//     return masyvas[0] + masyvas[1] + masyvas[2];
// }

const a1 = [1, 2, 3];
const s1 = suma(a1);

const a2 = [10, 2, 5];
const s2 = suma(a2);

const a3 = [1, 2, 10];
const s3 = suma(a3);

console.log(s1);
console.log(s2);
console.log(s3);

function suma(masyvas){
    return masyvas[0] + masyvas[1] + masyvas[2]; 
}

 const b1 = [5, 5, 5];
 const b2 = suma(b1);

//console.log(suma([5, 5, 5]));

console.log(b2);


// Jonas: paskutinis pazymys yra 8.
// Maryte: paskutinis pazymys yra 8.
// Petras: paskutinis pazymys yra 7.
// Ona: paskutinis pazymys yra 5.

const stud1 = 'Jonas';
const marks1 = [10, 2, 8, 2, 10];
const stud2 = 'Maryte';
const marks2 = [10];
const stud3 = 'Juozas';
const marks3 = [10, 2, 8, 2];
const stud4 = 'Petras';
const marks4 = [10, 2, 8];

const index = marks1.length - 1;
const index1 = marks2.length - 1;
const index2 = marks3.length - 1;
const index3 = marks4.length - 1;

function studentIntro (studentas, pazymys){

    return `${studentas}: paskutinis pazymys yra: ${pazymys}`;
}

console.log(studentIntro(stud1,marks1[index]));
console.log(studentIntro(stud2,marks2[index1]));
console.log(studentIntro(stud3,marks3[index2]));
console.log(studentIntro(stud4,marks4[index3]));