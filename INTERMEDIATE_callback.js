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
