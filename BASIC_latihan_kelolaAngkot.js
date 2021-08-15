// deklarasi nama penumpang & array
    // jika angkot kosong
        // tambah penumpang di awal array
        // kembalikan isi array & keluar dr function
    // else
        // telusuri seluruh kursi dari awal
            //jika kursi kosong
                // tambah penumpang di kursi tsb
                // kembalikan isi array & keluar dari function
            // jika sudah ada nama yg sama
                // error msg
                // kembalikan isi array & keluar dari function
            // jika seluruh kursi terisi
                // tambah penumpang di akhir array
                // kembalikan isi array & keluar dari function

var penumpang = ['mentari', undefined, 'rizki'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.lenght == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if(penumpang[i] == namaPenumpang){
                console.log('Sudah ada nama yang sama!');
                return penumpang;
            } else if(i == penumpang.length -1 ) { //cek sampai kursi terakhir
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

 //deklarasi fungsi hapus penumpang
    //jika angkot kosong
        // tampilkan pesan
        // kembalikan isi array & keluar dari function
    // jika ada penumpang yg namanya sesuai
        // hapus dengan memberi nilai undefined
        // kembalikan isi array & keluar dari function
    // jika tidak ada yg namanya sesuai
        // err msg
        // kembalikan isi array & keluar dari function

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0){
        console.log('Angkot kosong!');
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
            } else if (i == penumpang.length-1){
                console.log('Tidak ada penumpang dengan nama tersebut!');
            }
        }
    }
    return penumpang;
}