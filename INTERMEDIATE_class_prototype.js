// pakai constructor function, constructor dah punya parent bernama prototype, jadi onject.create gapelu ditulis lg
// versi object ----------------------------------------------------------
function Mahasiswa(nama,energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return "makan";
}

var mhs1 = new Mahasiswa("mentari",10);

// versi class -----------------------------------------------------------
class Mahasiswa2 {
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }
    makan (porsi) {
        this.energi += porsi;
        return "makan";
    }
}
var mhs2 = new Mahasiswa2("fadhlan",20);