// variabel dalam object {} adalah properti
// function dalam object {} adalah method

//  membuat object literal (variabel berisi object) -------------------------------------------------
var mhs = {
    nama : "Mentari",
    umur : 22,
    ips : [3.7, 3.8, 4.0, 3.8],
    alamat : {
        jalan : "Jl. Manggis no 2",
        kecamatan : "Depok",
        kabupaten : "Sleman",
        provinsi : "DIY"
    },
    scoreMapres: 10,
    akumulasiScore: function (score) { //method
        this.scoreMapres+=score;
    }
};
// cara manggil di console
mhs;
mhs["nama"];
mhs.nama;
mhs.ips[3];
mhs.alamat.kabupaten;
mhs["alamat"]["kabupaten"];
mhs.alamat["kabupaten"];
// notes: tidak efektif untuk object yg banyak, ada duplikasi
// ------------------------------------------------------------------------------------------------

// membuat object declaration (ada returnnya)------------------------------------------------------
function buatObjectMahasiswa(nama,nrp,email,jurusan,scoreMapres) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    mhs.scoreMapres = scoreMapres;

    mhs.akumulasiScore = function (score) { //method
        this.scoreMapres+=score;
    }
    return mhs;
}
var mhs2 = buatObjectMahasiswa("Mentari","123456","mentari@mail.com", "Computer Science",10)
//notes: ketika create object, method di dalamnya tetap dibuat jadi akan memakan memori
// ------------------------------------------------------------------------------------------------

// membuat object constructor ---------------------------------------------------------------------
function Mahasiswa(nama,nrp,email,jurusan,scoreMapres) { //biasakan pakai huruf kapital
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    this.scoreMapres = scoreMapres;

    this.akumulasiScore = function (score) { //method
        this.scoreMapres+=score;
    }
}
var mhs3 = new Mahasiswa("Fadhlan", "09876", "fadhlan@mail.com", "Teknologi Informasi",10);
// constructor akan memudahkan kita ketika membuat prototype