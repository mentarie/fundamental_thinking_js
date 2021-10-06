// Callback
// Callback adalah function yang dikirimkan sebagai parameter pada function yg lain


// Synchronous Callback -----------------------------------------------------------------------------
function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(Callback) { //parameternya function
    const nama = prompt('Masukkan nama: ');
    Callback(nama); //cari yang function(nama) pakai HOF
}

tampilkanPesan(halo); //parameternya function halo. gapakai () karena nungggu dipanggil di baris-12
// --------------------------------------------------------------------------------------------------



// Asynchronous Callback ----------------------------------------------------------------------------
// Kita punya array berwujud object. Saya mau menampilkan data mereka ke dalam console.
// Berikan pula pesan callback apabila error maupun success.
// data mahasiswa ada di 'data/INTERMEDIATE_callback_mahasiswa.json'


function getDataMahasiswa(url, success, error) {
    let xhr =  new XMLHttpRequest(); //bikin object ajax baru

    xhr.onreadystatechange = function () { //ketika state sudah siap, function ngecek:
        if (xhr.readyState === 4) { //ngecek scr asinkron, 4 = state terakhir ketika dah siap
            if (xhr.status === 200) { //200=ok
                success(xhr.response); //responsenya dibungkus dalam function callback
            }else if (xhr.status === 404) { //404=page not found
                error();
            }
        }
    }

    xhr.open('get', url); //methodnya apa, urlnya apa
    xhr.send(); //kita kirim
}


// console.log("mulai"); ---------------------------------------------------------------------------------------------------
getDataMahasiswa('data/INTERMEDIATE_callback_mahasiswa.json', results => { //kalau error coba nyalain live server
    console.log(results); //hasilnya akan array, belum object
    console.log(JSON.parse(results)); //hasilnya jadi object
    
    // cara nampilin nilai tertentu
    const detailMhs = JSON.parse(results);
    detailMhs.forEach(m => {
        console.log(m.nama);
    });
    
}, () => {
    
});
//struktur di atas sebenernya: getDataMahasiswa(url, func success, func error)
// console.log("selesai"); ---------------------------------------------------------------------------------------------------