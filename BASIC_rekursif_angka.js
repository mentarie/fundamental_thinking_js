function cetakAngka(n) {
    //buat kondisi berhenti
    if(n===0) return;
    //cetak
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(10);