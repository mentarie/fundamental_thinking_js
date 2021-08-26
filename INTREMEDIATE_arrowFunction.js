// Function Declaration -----------------------------------------------------------------------------------------
function tampilPesan(nama) {
    alert('Function Declaration : Halo '+nama);
}
// tampilPesan('Mentari');

// Function Expression ------------------------------------------------------------------------------------------
let tampilPesan2 = function (nama) {
    alert('Function Expression : Halo '+nama);
}
// tampilPesan2('Mentari');

// Arrow Function ------------------------------------------------------------------------------------------------
const tampilPesan3 = nama => `Arrow Function 1 : Halo, ${nama}`; //implisit return, isinya emang hanya return
console.log(tampilPesan3('Mentari'));

const tampilPesan4 = () => {return `Arrow Function 2 : Hai Ai`}; //tanpa parameter
console.log(tampilPesan4());

const tampilPesan5 = (nama,waktu) => {return `Arrow Function 3 : Selamat ${waktu} ${nama}`};
console.log(tampilPesan5('Mentari', 'Pagi'));


// SOAL
// Cari length dari tiap nama menggunakan arrow function
