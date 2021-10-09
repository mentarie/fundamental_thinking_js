function Rectangle(a,b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2*a + 2*b;
    this.area = a*b;
}


const a = 4;
const b = 5;

const rec = new Rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);


// SOAL
// Buat Object Rectangle
// Menghasilkan pjg, lebar, keliling, luas