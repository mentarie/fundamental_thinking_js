function getDayName(dateString) {
    // console.log(date);
    let dayName;
    var searchTanggal = new Date(dateString);
    var nomorHari = searchTanggal.getDay();

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (const iterator of weekdays) {
        dayName = weekdays[nomorHari];
    }
    return dayName;
}

const d = 1;
    
for (let i = 0; i < d; i++) {
    const date = '10/11/2009';
    
    console.log(getDayName(date));
}

// SOAL
// Ketika user input tanggal, keluarkan hari pada tanggal tsb 