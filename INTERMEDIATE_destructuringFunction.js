// Destructuring function dengan return array
function kalkulasi(a,b) {
    return [a+b, a*b];
}

let [jumlah, kali] = kalkulasi(2,3); //variabel bisa mengacu index array di function
console.log(jumlah);
console.log(kali);