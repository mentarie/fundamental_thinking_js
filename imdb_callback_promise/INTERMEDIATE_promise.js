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
// let ditepati = true;
// const janji1 = new Promise((resolve,reject) => {
//     if (ditepati) {
//         resolve('Janji telah ditepati!');
//     } else {
//         reject('Ingkar janji...');
//     }
// });

// janji1
//     .then(response => console.log('OK! : '+response))
//     .catch(response => console.log('NOT OK! : '+response));
// ------------------------------------------------------------------------------------------------------



// SOAL 2
// Buatlah promise dengan pengecekan status pending!
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa saat!');
        }, 2000);
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberapa saat!');
        }, 2000);
    }
});

console.log("mulai");
// console.log(janji2); //liat pending
// console.log(janji2.then(() => console.log(janji2))); //lihat proses pending

janji2 //pending ga kelihatan
    .finally(() => console.log('selesai menunggu!')) //apapun hasilnya, dia akan dijalankan stlh nunggu
    .then(response => console.log('OK! : '+response))
    .catch(response => console.log('NOT OK! : '+response));

console.log("selesai");