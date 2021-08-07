// Suit : batu, gunting, kertas
// Batu > Gunting
// Gunting > Kertas
// Kertas > Batu

//deklarasi
var hasil;
var textComMenang = 'komputer menang';
var textPMenang = 'kamu menang';

//save pilihan player
var p = prompt('pilih: batu, gunting, kertas');

//save pilihan komputer
//buat bilangan random
var comp = Math.random();
if(comp<0.34){
    comp = 'batu';
}else if(comp>=0.34 && comp<0.67){
    comp = 'gunting';
}else {
    comp = 'kertas';
}

//menentukan rules
if(comp === p){
    hasil= 'seri';
}else if(comp == 'batu' && p == 'gunting'){
    hasil=textComMenang;
}else if(comp == 'gunting' && p == 'kertas'){
    hasil=textComMenang;
}else if(comp == 'kertas' && p == 'batu'){
    hasil=textComMenang;
}else{
    hasil=textPMenang;
}

//tampilkan hasil
alert('Kamu memilih : ' +p+ ' dan komputer memilih : ' +comp+ ' maka hasilnya ' +hasil);
