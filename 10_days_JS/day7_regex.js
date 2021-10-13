function regexVar() {
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
// ^ ------- start of a string
// [aeiou] - exactly one vowel.
// .* any -- zero or more
// [aeiou] - exactly one vowel
// $ ------- end of a string.