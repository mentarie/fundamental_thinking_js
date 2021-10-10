function sides(literals, ...expressions) {
    const [a,p] = expressions; //masukkan ke variabel area & perimeter
    let hasil = []; //buat nampung hasil dari nilai asli
    
    //Cari rumus
    // console.log(p**2); // kita 
    // console.log(16*a); //
    // console.log(p**2 - 16*a);
    // console.log(Math.sqrt(p**2 - 16*a)/4);
    // console.log(p/4);

    // console.log(p/4 - Math.sqrt(p**2 - 16*a)/4);
    // console.log(p/4 + Math.sqrt(p**2 - 16*a)/4);
    
    
    // kembalikan luas & keliling ke nilai aslinya
    const s1 = (p/4 - Math.sqrt(p**2 - 16*a)/4);
    const s2 = (p/4 + Math.sqrt(p**2 - 16*a)/4);

    // push hasil
    hasil.push(s1);
    hasil.push(s2);

    return hasil.sort(); //hasil diuritkan nilainya
} 


let s1 = 14;//+(readLine());
let s2 = 10;//+(readLine());

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);





// SOAL --------------------------------------------------------------------------------
// Pakai string literal
// Yang dikirim ke template literal adalah luas dan kelilingnya
// Kembalikan hasil ke nilai awa\l, kemudian kirim kembali
