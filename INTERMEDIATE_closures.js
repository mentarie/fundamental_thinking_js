//  Closure adlah sebuah function yang sebelumnya sudah memiliki data, hasil dari function lain

// Lexical Scope
function init() {
    let nama = "mentari"; //local variabel
    function tampilNama() { //inner function(closure*)
        console.log(nama); // akses parent variabel, ada ga var disini? cari ke atas. Sampe punya akses.
    }
    tampilNama();
    return tampilNama; //tidak tampil apa2 karena baru dijalankan sebagian, harus masukkin hasilnya ke variabel
}
init();

function init2() {
    let nama2 = "mentari"; //local variabel
    function tampilNama2() {
        console.log(nama2); 
    }
    return tampilNama2; // mereturn hasil tp "init" harus masuk sbg variabel --> nanti bisa buat bikin func factory
}
let panggilNama = init();
panggilNama(); //sama aja sihintinya klo mau jalanin function harus pake ()
console.dir(panggilNama); //lihat struktur

// -------------------------------------------------------------------------------------------------
// Fungsi closure:
// 1. Buat bikin function factories (kita bikin function sesuai dengan "blueprint" function lain)
// 2. Buat private method
// -------------------------------------------------------------------------------------------------
//  STUDI KASUS
//  Buat function untuk menampilkan angka dari sebuah counter. Setiap fungsi
//  dipanggil, angka dalam counter akan bertambah 1. Gunakan konsep closures untuk mencegah
//  isi variabel counter gagal.
let counter = 0;
let add = function () {
    return function () {
        return ++counter;
    }
}
let a = add();

console.log(a());
console.log(a());
console.log(a());