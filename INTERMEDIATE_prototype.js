// pakai constructor function, constructor dah punya parent bernama prototype, jadi onject.create gapelu ditulis lg

function Mahasiswa(nama,energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return "makan";
}

var mhs1 = new Mahasiswa("mentari",10);