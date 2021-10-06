// Jika kita tidak ingin membuat function success & error sendiri=
// pakai JQuery
// code.jquery.com, pakai yang minified. Karena klo slim gaada ajaxnya.


// JQuery
console.log('mulai');
$.ajax({
    url: 'data/INTERMEDIATE_callback_mahasiswa.json',
    success : (mhs) => { //gausa diparsing karena dah object
        console.log(mhs);

        // manggil properti tertentu
        mhs.forEach(m => {
            console.log(m.nama);
        });
    },
    error: () => {}
});
console.log('selesai');
