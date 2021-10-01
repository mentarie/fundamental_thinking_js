// Rest Parameter (sisa)
// Merepresentasikan argument pada function dengan jumlah 
// yang tidak terbatas menjadi sebuah array

// SOAL 1 -----------------------------------------------------------------------
// Penggunaan dasar rest parameter
function myFunc(a, ...myargs) {
    return `Adik sedang berhitung mulai dari angka ${a}, dilanjutkan ${myargs}`;
}
console.log(myFunc(1,2,3,4,5));
// ------------------------------------------------------------------------------




// SOAL 2 -----------------------------------------------------------------------
// Jumlahkan seluruh parameter yang dikirimkan
function jumlahkan(...angka) {
    return angka.reduce((accumulator, currentValue) => accumulator+currentValue);
}
console.log(jumlahkan(1,2,3,4));

// ------------------------------------------------------------------------------




// SOAL 3 -----------------------------------------------------------------------
// Dengan array destructuring, nama pertama=ketua, nama kedua=wakil, lainnya anggota
const [ketua, wakil, ...anggota] = ['Fadhlan', 'Hawali', 'Mentari', 'Enggar', 'Rizki'];
console.log(`Ketua adalah ${ketua}, wakilnya ${wakil}, dan anggotanya ${anggota}`);
// ------------------------------------------------------------------------------




// SOAL 4 -----------------------------------------------------------------------
// Dengan object destructuring, pisahkan antara PM dari sisa kelompoknya
const team = {
    pm: 'Sandhika',
    fe: 'Muhshin',
    be: 'Winston',
    qa: 'Fachrul',
    design: 'Husni'
}
const {pm, ...myTeam} = team;
console.log(`Pm: ${pm}`);
console.log(myTeam);
// ------------------------------------------------------------------------------




// SOAL 5 -----------------------------------------------------------------------
// Pisahkan nilai yang dikirimkan berdasarkan tipe data
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('string', 1,2, 'Sandhika', false, 10, true, 'Ai')); //kata kuncinya ada di 'string'
// ------------------------------------------------------------------------------