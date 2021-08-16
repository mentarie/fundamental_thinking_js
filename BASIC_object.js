// variabel dalam object {} adalah properti
// function dalam object {} adalah method

//  membuat object literal
var mhs = {
    nama : "Mentari",
    umur : 22,
    ips : [3.7, 3.8, 4.0, 3.8],
    alamat : {
        jalan : "Jl. Manggis no 2",
        kecamatan : "Depok",
        kabupaten : "Sleman",
        provinsi : "DIY"
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
// ------------------------------------------------------------------------------------------------

// membuat object declaration (ada returnnya)
function buatObjectMahasiswa(nama,nrp,email,jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs2 = buatObjectMahasiswa("Mentari","123456","mentari@mail.com", "Computer Science")
// ------------------------------------------------------------------------------------------------

// membuat object constructor
function Mahasiswa(nama,nrp,email,jurusan) { //biasakan pakai huruf kapital
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}
var mhs3 = new Mahasiswa("Fadhlan", "09876", "fadhlan@mail.com", "Teknologi Informasi");


