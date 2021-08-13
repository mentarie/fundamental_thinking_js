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

var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.lenght == 0) {
        penumpang.push(namaPenumpang);
        console.log(console.log(penumpang.join(' - ')));
    }else{
        
    }
};