function cetakAngka(n) {
    //buat kondisi berhenti
    if(n===0) return;
    //cetak
    console.log(n);
    cetakAngka(n-1);
}
cetakAngka(10);

function faktorial(n) {
    //faktorial = perkalian dari bil n x saling dikalikan hingga n=1
    //buat kondisi berhenti
    if(n===0) return 1;
    //cetak
    return n * faktorial(n-1);
}
console.log(faktorial(5));