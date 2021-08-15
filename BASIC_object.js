// variabel dalam object {} adalah properti
// function dalam object {} adalah method

//  membuat object
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