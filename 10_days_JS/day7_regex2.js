function regexVar() {
    // const re = /^[Mrs.]|^([Mr.])/;
    const re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])+$/;
    return re;
}


const re = regexVar();
const s = prompt('Masukkan nama (dengan Mr. atau Mrs.): ')//readLine();

console.log(!!s.match(re));


// SOAL ------------------------------------------------------------------
//Buat function yang return hanya boleh "Mr." dan "Mrs."