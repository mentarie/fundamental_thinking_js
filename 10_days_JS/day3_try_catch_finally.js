function reverseString(s) {
    try {
        var splitString = s.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        console.log(joinArray);
    } catch (error) {
        console.log('s.split is not a function');
        console.log(s);
    }
}

const s = 1234;
// const s = "1234";
reverseString(s);


// SOAL
// Pakai try, catch, finally
// Reverse string yang diinput
// klo bener try, klo salah catch
// try --> string yang sudah ter-reversse
// catch --> pesan error & kembalikan nilai s