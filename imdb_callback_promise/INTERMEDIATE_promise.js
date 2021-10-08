// PROMISE
// Objectyang merepresentasikan kegagalan/keberhasilan sebuah event yang async di masa yg akan datang
// Menangani Callback hell (callback makin menjorok ke dalam)
// Buat request ke API

// Keadaan
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)

// Callback
// callback (resolve / reject / finally) 

// Aksi
// aksi (then / catch)
// -----------------------------------------------------------------------------------------------------

// SOAL 1
// Buatlah sintaks sederhana untuk membuktikan keterhubungan keadaan-callback-aksi pada Promise!
const janji1 = new Promise((resolve,reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati!');
    } else {
        reject('Ingkar janji...');
    }
});

janji1
    .then(response => console.log('OK! : '+response))
    .then(response => console.log('NOT OK! : '+response));
// ------------------------------------------------------------------------------------------------------