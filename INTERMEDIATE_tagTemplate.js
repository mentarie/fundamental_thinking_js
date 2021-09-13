// Tagged Tempolate
const nama = 'Mentari';
const usia = 22;


// 1.
function coba(strings) {
    return strings; //jika yg di retur parameternya, maka dia print tulisan setelah tag, hasilnya array
}
const str = coba `Halo, nama saya ${nama}, saya ${usia} tahun.`;
console.log(str);


// 2.
function coba2(strings, nama) {
    return strings, nama; //nama = parameter yang diambil dari dalam tag
}
const str2 = coba2 `Halo, nama saya ${nama}, saya ${usia} tahun.`;
console.log(str2);



// 3. Rest parameter
function coba3(strings, ...values) { //... akan menjadi sebuah erray tg isinya semua expression dalam tag
    return values; //akan menampilkan hanya parameter
}
const str3 = coba3 `Halo, nama saya ${nama}, saya ${usia} tahun.`;
console.log(str3);



// 4. Pengabungan
function coba4(strings, ...values) {
    let result = '';
    strings.forEach((str,i) => {
        result += `${str}${values[i] || ''}`;
    });
    return result;
}
const str4 = coba4 `Halo, nama saya ${nama}, saya ${usia} tahun.`;
console.log(str4);