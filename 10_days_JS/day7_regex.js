function regexVar() {
    // Deklarasikan re yg isinya hurus vokal
    const re = /^[aeiou]$|^([aeiou]).*\1$/;
    return re;
}

const re = regexVar();
const s = prompt('Masukkan huruf: ');//readLine();

console.log(re.test(s));



// SOAL ------------------------------------------------------------------
// Buat function yang mengolah pengecekan regex
// cek huruf awal harus vokal
// huruf akhir adalah huruf vokal yang sama