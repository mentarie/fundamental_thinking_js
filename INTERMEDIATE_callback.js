// Callback
// Callback adalah function yang dikirimkan sebagai parameter pada function yg lain

function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(Callback) {
    const nama = prompt('Masukkan nama: ');
    Callback(nama);
}

tampilkanPesan(halo);