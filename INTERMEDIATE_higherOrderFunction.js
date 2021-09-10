// Higher Order Function = 
// Function yg beroperasi di atas function yg lain
// Baik digunakan sebagai argumen, maupun return value

//  Di JS, function adalah First Class Function =
// inti JS sendiri adalah sebuah function
// JS memperlakukan function sebagai object
// Karena function di JS = object, berati mirip kayak string, int, dll
// Maka function bisa kita simapan juga sebagai argumen/return value dari function yg lain

// Function yg jadi argumen = callback
// Function yg punya callback = HOP


// CONTOH 1
function beliSayur(namaSayur, status) { //parameter status adalah callback, beliSayur adalah HOP
    alert(`Saya membeli ${namaSayur}`);
    status();
}

function statusPembelian() {
    alert('Selesai membeli sayur!');
}

beliSayur('Bayam', statusPembelian);


// CONTOH 2
setTimeout(function () {
    console.log('Hello World');
}, 1000); // parameter pertama adalah function, params kedua adalah integer


// CONTOH 3
const tombol = document.querySelector('.submit');
tombol.addEventListener('click', function () { //parameternya function
    console.log('tombol ditekan');
});