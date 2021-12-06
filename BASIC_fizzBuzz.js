fizzBuzz = (input) => {
    let hasil = [];
    let start = 0;
    for(let i = start; i <= input; i++) {
        if (i % 3 == 0 && i % 5 == 0) hasil.push('FizzBuzz');
        else if (i % 3 == 0) hasil.push("Fizz");
        else if (i % 5 == 0) hasil.push("Buzz");
        else hasil.push(i);
    }
    hasil.forEach(function(e,i){
        console.log(hasil[i]);
    })
 }
 
 fizzBuzz(15)