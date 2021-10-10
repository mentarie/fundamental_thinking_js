class Rectangle {
    constructor(w, h) { //deklarasikan dulu kelas utamanya pakai constructor (bawa argumen)
        this.w = w;
        this.h = h;
    }
}

class Square extends Rectangle { //di child, extend parentsnya
    constructor(s){ //karna berkurang argumennya, di constructor tulis 1 saja
        super(s); //deklarasikan di super
        this.h = s; //masukkan hke dalam s
        this.w = s; //masukkan w ke dalam s
    }
}

Rectangle.prototype.area = function () { //area direturn menggunakan prototype
    return (this.w*this.h);
}

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify([ 'constructor' ])) {
    const rec = new Rectangle(3, 4);
    const sqr = new Square(3);
    
    console.log(rec.area());
    console.log(sqr.area());
} else {
    console.log(-1);
    console.log(-1);
}
// SOAL
// Gunakan prototype untuk hitung luas rectangle & square