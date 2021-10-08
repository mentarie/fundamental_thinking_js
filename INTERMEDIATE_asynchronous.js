// Asinkron (multitred) :
// Callback
// Promise
// ajax (methodnya jquery)
// Async & Await


// Konsep heap & stack -------------------------------
// Heap: tempat alokasi memori, hoisting
// Stack: tempat function call & eksekusi context
// ---------------------------------------------------

// Event Loop ----------------------------------------
// Isi dari stack di V8 dipindahkan ke Web API
// Urutan:
// 1. DOM
// 2. ajax (xhttprequest)
// 3. setTimeout
// 4. setInterval
// 5. Callback Queue --> onclick, onLoad, $.get, delay

// Mau coba que --------------------------------------
// https://latentflip.com


// DON'T BLOCK THE EVENT LOOP!