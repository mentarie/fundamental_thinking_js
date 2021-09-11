// Ambil semua elemen video
// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
// Ambil durasi masing2 video
// Ubah durasi menjadi int, ubah menit jd detik
// Jumlahkan semua detiknya
// Ubah formatnya jadi jam:menit:detik
// Simpan di DOM


// const videos = document.querySelectorAll('[data-duration]');
// --> kalau masih nodelist, jadiin array dulu

const videos = Array.from(document.querySelectorAll('[data-duration]'));
const filteredVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration) //kita ambil data-duration
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part)); //kita pisah menit dan detiknya lalu ubah ke float
        return (parts[0] * 60) + parts[1]; //menitnya(array index 0) kita jadiin detik, ditambah detiknya(array index 1)
    })
    .reduce((total,detik) => total+detik);

const jam = filteredVideo/3600;


console.log(filteredVideo);
