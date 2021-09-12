// Template Literal
// Pakai s tring literal = string biasa tp pakai backtick ``

// Contoh 1
// console.log(`string text`);

// COntoh 2
// console.log(`string text baris 1
// string text baris 2
// string text baris 3`); //multi-line string

// Contoh 3
// console.log(`string text baris ${expression}`); //embedded expression

// Contoh 4
// tag `string text baris ${expression}` //tagged template


// SOAL -------------------------------------------------------------------
// 1. Template Literal
const nama = 'Mentari';
const usia = '22';
console.log(`Halo nama saya ${nama}, usia saya ${usia} tahun.`);

// 2. Embedded Expression
console.log(`${alert('halo!')}`); //bisa diisi function
console.log(`${2+3}`); //bisa melakukan operasi matematik
const x =10;
console.log(`${(x % 2 ==0)? 'genap' : 'ganjil'}`); //bisa pakai ternary expression

// 3. HTML Fragments
const mhs = {
    nama: 'Mentari',
    usia: 22,
    nrp: '0892736',
    email: 'mentari@mail.com'
};
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);
document.body.innerHTML = el;
