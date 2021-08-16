// this
// console.log(this); //isinya = object window berisi object global
// var a =10;
// console.log(window.a); // object window dengan properti a


// cara 1 - function declaration ----------------------------------------------
function halo() {
    console.log(this);
}
this.halo(); //this = mengembalikan object global

// cara 2 - object literal ----------------------------------------------------
var obj = {a:10, nama:"ai"};
obj.halo = function () {
    console.log(this);
}
obj.halo(); //this = mengembalikan object yg bersangkutan

// cara 3 - constructor -------------------------------------------------------
function Halo() {
    console.log(this);
}
Halo(); //this = mengembalikan object global
new Halo(); //this = mengembalikan object baru dibuat/instance baru
var obj2 = new Halo(); //kaya yg atas