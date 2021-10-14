function regexVar() {
    const re = /[0-9]+/g;
    return re;
}

const re = regexVar();
const s = readLine();

const r = s.match(re);

for (const e of r) {
    console.log(e);
}


// SOAL --------------------------------
// Verifikasi angka yang dimasukkan, kemudian kembalikan
// nilainya berdasarkan grup angkanya