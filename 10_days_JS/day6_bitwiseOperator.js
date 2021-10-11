function getMaxLessThanK(n, k){
    //Buat array otomatis yang isinya angka 1 sampai ke-n
    // let array = [...Array(n+1).keys()].slice(1);

    let max_anb = 0;
    for (let b = n; b > 0; b--) { //nilai max angggota himpunan adalah b (jadi array akan dibuat sampai nilai b) pengecekan menurun
        for (let a = b-1; a > 0; a--) { //nilai a adalah nilai < b
            if ((a & b) < k && (a & b) > max_anb){ // dalam perulangan a, dicari kondisi yang diminta
                max_anb = (a&b);
            }
        }
    }
    return max_anb;
}

const q = prompt('Masukkan berapa kali input: ');
// alert(q);
    
for (let i = 0; i < q; i++) {
    const [n, k] = prompt(`(Input ke-${i+1}) Masukkan jumlah max anggota himpunan dan nilai key (pisah dengan spasi): `).split(' ').map(Number);
    // console.log(n);
    // console.log(k);
    console.log(getMaxLessThanK(n, k));
}

// SOAL -----------------------------------------------------------------------------------------------------------------------------
// n = jumlah inputan
// S = {} himpunan
// k = bilangan kunci
// a&b = jumlah bilangan dalam himpunan
// Cari total a&b < k dalam S!