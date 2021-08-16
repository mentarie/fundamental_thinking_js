// buat objectnya pakai constructor/blueprint
function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // bikin method jika ada penumpang naik atau turun
    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else (){
             for (var i = 0; i < this.penumpang.length; i++) {
                if(this.penumpang[i]==undefined){
                    this.penumpang[i]=namaPenumpang;
                    return this.penumpang;
                } else if (this.penumpang[i] == namaPenumpang) {
                     alert('penumpang sudah ada!');
                     return this.penumpang;
                } else if (i== this.penumpang.length-1){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
             }
        }
        
    }
    this.penumpangTurun = function (namaPenumpang, bayar) {
        //cek
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong!');
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] == namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas+=bayar;
                    return this.penumpang;
                } else if(i === this.penumpang.length-1){
                    alert('tidak ada nama penumpang yang dimaksud!');
                    return this.penumpang;
                }
            }
        }
    }
}
// deklarasi angkotnya/dah ada beneran objeknya
 var angkot1 = new Angkot('ai', ['Depok', 'Ngaglik'],[],0);
