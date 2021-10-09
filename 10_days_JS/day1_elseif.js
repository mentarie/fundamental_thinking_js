function getLetter(s) {
    let letter = s.charAt(0);
    let a = ["a","i","u","e","o"];
    let b = ["b","c","d","f","g"];
    let c = ["h","j","k","l","m"];
    let d = ["n","p","q","r","s","t","v","w","x","y","z"];
    
    if(a.includes(letter)){
        letter='A';
    }else if(b.includes(letter)){
        letter='B';
    }else if(c.includes(letter)){
        letter='C';
    }else{
        letter='D';
    }
    
    return letter;
}



// SOAL
// the first character in string  is in the set {"a","i","u","e","o"}, then return A.
// If the first character in string  is in the set {"b","c","d","f","g"}, then return B.
// If the first character in string  is in the set {"h","j","k","l","m"}, then return C.
// If the first character in string  is in the set {"n","p","q","r","s","t","v","w","x","y","z"}, then return D.