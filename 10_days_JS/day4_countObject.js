function getCount(objects) {
    let sum=0;
    objects.forEach(element => {
        // console.log(element.x);
        if (element.x == element.y) {
            sum++;
        }
    });
    return sum;
}

var n = 5; //window.prompt("Mau isi berapa kali? ");
let objects = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
  ];
console.log(getCount(objects));


// SOAL
// Hitung jumlah object yang o.x === o.y