// Destructuring function dengan return array
// function kalkulasiArray(a,b) {
//     return [a+b, a-b, a*b];
// }

// let [jumlah,kurang, kali, bagi='default nilai jika undefined'] = kalkulasiArray(2,3); //variabel bisa mengacu index array di function
// console.log(bagi);




// Destructuring dengan urutan return yang berbeda (pakai object)
// function kalkulasiObject(a,b) {
//     return {
//         tambah: a|+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }
// let {bagi, kurang, kali, tambah} = kalkulasiObject(2,3);
// console.log(kurang);




// Destructuring function argumen (bukan return value)
const mhs1 = {
    nama: 'Mentari ER',
    umur: 22,
    email: 'mentari@gmail.com'
}
function cetakMhs(mhs) {
    return `1: Halo nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun`; //dipecahnya disini
}
function cetakMhs2({nama,umur}) { //dipecah disini
    return `2: Halo nama saya ${nama}, saya berumur ${umur} tahun`; //dipecahnya disini
}
console.log(cetakMhs(mhs1));
console.log(cetakMhs2(mhs1));