// 1. Biasa
const mhs = {
    nama: 'Mentari',
    usia: 22
};
const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.usia}</span>
</div>`;

document.body.innerHTML = el;


// 2. Looping
const siswa = [
    {
        nama: 'Ai',
        nim: 15145
    },
    {
        nama: 'Fadhlan',
        nim: 15451
    },
    {
        nama: 'Rizki',
        nim: 15445
    }
];
const el2 = `<div class="siswa">
    ${siswa.map(m => `<ul>
        <li>nama: ${m.nama}</li>
        <li>nim: ${m.nim}</li>
    </ul>`).join('')}
</div>`;
document.body.innerHTML = el2;


// 3. Conditional
const lagu = [ 
    {
        judul : 'Tetap Dalam Jiwa',
        penyanyi: 'Isyana Saraswati',
    },
    {
        judul : 'Kau Adalah',
        penyanyi: 'Isyana Saraswati',
        feat: 'Rayi Putra'
    }
];
const el3 = `<div class="lagu">
    ${lagu.map(m => `<ol>
        <li>Judul: ${m.judul}</li>
        <li>Penyanyi: ${m.penyanyi} ${(m.feat)? `(feat. ${m.feat})` : ''}</li>
    </ol>`).join('')}
</div>`;
document.body.innerHTML = el3;


// 4. HTML Bersarang
const matkul = {
    jurusan: 'Ilmu Komputer',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Business Intelligence',
        'Statistika'
    ]
};

function cetakMataKuliah(allMataKuliah) {
    return `
        <ol>
            ${allMataKuliah.map(m => `<li>${m}</li>`).join('')}
        </ol>
    `;
}

const el4 = `<div class="matkul">
    <h2>${matkul.jurusan}</h2>
    <span>Semester: ${matkul.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(matkul.mataKuliah)}
</div>`;

document.body.innerHTML = el4;
