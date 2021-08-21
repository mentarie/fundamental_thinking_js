// EXECUTION CONTEXT, HOISTING, & SCOPE


// 1. Creation phase
// di global contxt

// ---------coba di console---------
// ketik nama var --> undefined
// ketik nama function --> fn()

// -----------hoisting---------------
// ketik "window" --> global object
// ketik "this" --> window



// 2. Execution phase
console.log(sayHello()); //pakai () artinya eksekusi, kalau di run undefined variabelnya

var nama = "mentari"
function sayHello() {
    console.log('Halo, nama saya ${nama}');
    // return('Halo, nama saya ${nama}'); // nanti ga undefined
}
// *note : untuk lhat visualisasi dari JS mengeksekusi kode kita pakai Javascript tutor 