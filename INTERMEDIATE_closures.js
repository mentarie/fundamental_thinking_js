//  Closure adlah sebuah function yang sebelumnya sudah memiliki data, hasil dari function lain

// Lexical Scope
function init() {
    let nama = "mentari"; //local variabel
    function tampilNama() { //inner function(closure*)
        console.log(nama); // akses parent variabel, ada ga var disini? cari ke atas. Sampe punya akses.
    }
    tampilNama();
}
init();