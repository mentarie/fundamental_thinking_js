function getSecondLargest(nums) {
    const max = Math.max(...nums);
    const urutkan = nums.sort((a,b) => b - a);
    for (const iterator of urutkan) {
        if (iterator < max) {
            return iterator;
        }
    }
}


const n = 5; //+(readLine());
const nums = [2,3,6,6,5];
console.log(getSecondLargest(nums));


// SOAL
// Cari angka no-2 terbesar