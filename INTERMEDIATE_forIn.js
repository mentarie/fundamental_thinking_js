//for .. in
// Membuat looping hanya pada properti/title/enumerables

// SOAL 1 ----------------------------------------------------------
// Cetak properti dari array di bawah menggunakan perulangan!
const mhs1 = {
    nama: 'Mentari ER',
    umur: 22,
    email: 'mentari@gmail.com',
    nilai: {
        tugas: 50,
        uts: 79,
        uas: 90
    }
}

for (const key in mhs1) {
    //print propertinya
    console.log(key);
}

console.log('--------------------------');

for (const key in mhs1) {
    //print isinya
    if (Object.hasOwnProperty.call(mhs1, key)) {
        const element = mhs1[key];
        console.log(element);
    }
}