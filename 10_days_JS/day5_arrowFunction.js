function modifyArray(nums) {
    const hasil = nums.map(n => n = (n%2==0) ? n*2 : n*3);
    return hasil;
}

const n = 5;//+(readLine());
const a = [1,2,3,4,5];//readLine().split(' ').map(Number);

console.log(modifyArray(a).toString().split(',').join(' '));

// SOAL -----------------------------------------------------------------------
// Modifikasi array, ketika array sudah diinput, index tg ganjil dikali 3
// Index genap dikali 2