function jumlahVolumeDuaKubus(a,b){
    //deklarasi
    var volumeA,volumeB, total;

    //cari masin2 volume
    volumeA=a*a*a;
    volumeB=b*b*b;

    //jumlahkan
    return total=volumeA+volumeB;
}

var a = prompt('Masukkan nilai ke-1 : ');
var b = prompt('Masukkan nilai ke-2 : ');
var hasil;
alert(jumlahVolumeDuaKubus(a,b));