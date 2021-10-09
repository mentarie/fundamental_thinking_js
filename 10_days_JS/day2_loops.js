const string =  'javascriptloops';//readLine();

function cekVokal(string) {
    let a = ["a","i","u","e","o"]; //untuk filter jika huruf vokal
    let vokal=[];
    let nonvokal=[];
    for (const iterator of string) {
        if (a.includes(iterator)) {
            vokal.push(iterator);
        } else {
            nonvokal.push(iterator);
        }
    }
    for (const iterator of vokal.concat(nonvokal)) {
        console.log(iterator);
    }
}

cekVokal(string);



// SOAL -------------------------------------------------
// INPUT
// javascriptloops

// OUTPUT
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s