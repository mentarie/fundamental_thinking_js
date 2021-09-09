//PENERAPAN "KAPAN ARROW FUNCTION DIPAKE"

// Soal
// Buat sebuah box yang:
//     1. Detail stylenya diuraikan dalam css, dipanggil dalam class div
//     2. Ketika di klik, ubah size box dan warna bg
//     3. Ketika di klik lagi, warna bg dihapus dulu, baru size
//     4. Pengaturan ketika click, diatur melalui js

//     file css : style.css
//     file js : file ini
//     file akses : index.html




// Jawaban
const box = document.querySelector('.box'); //nyari class box di html
box.addEventListener('click', function () {
    //untuk merubah alur perubahan yaitu ubah size->wana bg jadi warna bg ilang->size 
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }
    
    this.classList.toggle(satu); //toggle --> memberikan kelas jika belum ada & menghapus kelas jika sudah ada
    //setTimeout(); //ini fungsi kosong, jika masu dikasi, pakai arrow func
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
});





// Kenapa kita menggunakan arrow function di dalam functionnya?
// Karena kalau kita pakai function declaration biasa yg ada thisnya,
// thisnya akan mengacu ke variabel global.
// setTimeout kan ada di dalam func declaration, jadi kita perlu cari cara biar thisnya mengacu
// ke box. Caranya adalah dengan arrow function.
