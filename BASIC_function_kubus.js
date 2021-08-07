function jumlahVolumeDuaKubus(a,b){
    //deklarasi
    var volumeA,volumeB, total;

    //cari masin2 volume
    volumeA=a*a*a;
    volumeB=b*b*b;

    //jumlahkan
    total=volumeA+volumeB;
    return total;
}

console.log(jumlahVolumeDuaKubus(8,3));