// EXECUTION CONTEXT, HOISTING, & SCOPE


// 1. Creation phase
// di global contxt

// ---------coba di console---------
// ketik nama var --> berisi undefined
// ketik nama function --> berisi fn()

// -----------hoisting---------------
// ketik "window" --> global object
// ketik "this" --> window



// 2. Execution phase
// console.log(sayHello()); //pakai () artinya eksekusi, kalau di run undefined variabelnya

// var nama = "mentari"
// function sayHello() {
//     console.log('Halo, nama saya ${nama}');
//     // return('Halo, nama saya ${nama}'); // nanti ga undefined
// }
// *note : untuk lhat visualisasi dari JS mengeksekusi kode kita pakai pythontutor 
// *note : func membuat local execution context yg dalemna ada creation & execution context
//         pd local exec kita bisa akses window, arguments, hoisting lokal





// Example
// var username = "mentari.er";
// function cetakURL(username) { // jika tida ada argumen username, makan return akan mencari variabel terdekat (lokal) baru global
//     // console.log(arguments); // meski function gaditulis paramsnya, tapi jika pas dipanggil dikasi argumen, tetep argumen akan kebaca kok
//     var instagramURL = "https://instagram.com/";
//     return instagramURL + username; 
// }
// console.log(cetakURL(username));
// console.log(cetakURL('fadhlanhawali')); //daripada variabel yg global,ini lebih diprioritaskan karena argumen yg dibawa langsung ke function + jka functionnya pakai param ya


// Kuis
function satu() {
    var nama = "mentari";
    console.log(nama);
}
function dua() {
    console.log(nama); //lokal var ada ga? di argumen ada ga? oh ke global
}

console.log(nama);
var nama = "enggar";
satu();
dua('rizki');
console.log(nama);