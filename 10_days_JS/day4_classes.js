class Polygon {
    constructor(sisi){
        this.sisi = sisi;
    }
    perimeter () {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sisi.reduce(reducer);
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

// SOAL
// Hitung keliling menggunakan class