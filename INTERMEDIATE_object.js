// buat metode secara terpisah, artinya ketika program dijalankan, kita hanya perlu meulis objek 1x
var methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log('makan');
    },
    main: function (jam) {
        this.energi -= jam;
        console.log('tidur');
    }
}

// // buat fungsi mahasiswa (objectnya manual)
// function Mahasiswa(nama,energi) {
//     var mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // ini manggil method luar (manual)
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
// }

// buat fungsi mahasiswa (object.create) kek inheritance
function Mahasiswa(nama,energi) {
    var mahasiswa = Object.create(methodMahasiswa); //manggil kelas lain sebagai parent
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

var mhs1 = Mahasiswa("mentari",10);


// notes: tapi dalam praktek ini, kita masih belum efektif sebenernya
// kita pakai object Mahasiswa terus bikin object lain untuk mendukung pakai methodMahasiswa
// biar ga perlu bikin pakai: "PROTOTYPE"