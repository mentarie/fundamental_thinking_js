function isPositive(a) {
     if (a==0) {
        throw new Error("Zero Error");
    } else if (a<0){
        throw new Error("Negative Error");
    }
    return "YES";
}


const n = 1;
const a = 0; //ini yang diubah2
for (let i = 0; i < n; i++) {
    try {
        console.log(isPositive(a));
    } catch (e) {
        console.log(e.message);
    }
}


// SOAL
// Pakai throw & catch
// Jika a = positive --> return string YEs
// Jika a = 0 --> Zero Error
// Jika a = negative --> Negative Error