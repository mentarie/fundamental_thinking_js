// Asyncronous Function
// Function yang bekerja secara async (melalui event loop)
// menghasilkan (implisit) promise sebagai return valuenya
// tapi cara penulisan code-nya menggunakan yang sync (standart)

// Sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya
// sambil menunggu promis-nya selesai


//  SOAL
// Buat penerapan async dan await untuk menampilkan data dengan pending tertentu
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if (waktu<5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    });
}

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (error) {
        console.error();
    }
}

cobaAsync();