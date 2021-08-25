// IIFE
// Immediatly Invoked Function Expression --> Func expression yg dipanggil langsung ketika dibuat

// SIAF
// Self Invoking Anonymous Function --> Menjaga variabel di func tidak bisa diakses dari luar (private)


// Contoh IIFE-------------------------------------------------------------------------------------------------
var x = function () {
    // isi
};

// Contoh SIAF-------------------------------------------------------------------------------------------------
(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
});
console.log(i); //ini akan error karena var gabisa diakses di luar func

// kasus ini bisa juga terjadi waktu kita make library/func buatan orang lain
// nama variabelnya sama tp funcnya beda (perilakunya beda)
// Konsep SIAF mirip seperti jika kita kita pakai "let" yang mana menganut blockscope
for (let i = 0; i < 10; i++) {
        console.log(i);
};
console.log(i); 


// Kesimpulan :
// "let" & "const" (konstanta, meminimalisir perubahan state) --> block scopes
// "var" --> function scopes