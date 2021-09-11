// Ambil semua elemen video
// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
// Ambil durasi masing2 video
// Ubah durasi menjadi int, ubah menit jd detik
// Jumlahkan semua detiknya
// Ubah formatnya jadi jam:menit:detik
// Simpan di DOM


// const videos = document.querySelectorAll('[data-duration]');
// --> kalau masih nodelist, jadiin array dulu

//durasi
const videos = Array.from(document.querySelectorAll('[data-duration]'));
let filteredVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration) //kita ambil data-duration
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part)); //kita pisah menit dan detiknya lalu ubah ke float
        return (parts[0] * 60) + parts[1]; //menitnya(array index 0) kita jadiin detik, ditambah detiknya(array index 1)
    })
    .reduce((total,detik) => total+detik);

const jam = Math.floor(filteredVideo/3600);
filteredVideo = filteredVideo - jam * 3600;
const menit = Math.floor(filteredVideo/60);
const detik = filteredVideo - menit *60;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;

//jumlah video
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video`;
