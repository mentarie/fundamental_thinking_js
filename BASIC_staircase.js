stairCase = (input) => {
    var pola = '';
    for (let i = 0; i < input; i++) {
        for (let j = 0; j <= i; j++) {
            pola+='#';
        }
        pola+='\n';
    }
    return pola;
 }
 console.log(stairCase(2));
// output:
// #
// ##
console.log(stairCase(4));
// output:
// #
// ## 
// ###
// ####
