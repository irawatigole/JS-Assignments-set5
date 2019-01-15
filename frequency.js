// INPUT: frequency('abca');
// OUTPUT: {a: 2, b: 1, c: 1}
// INPUT: frequency('');
// OUTPUT: { }
function frequency(str){
    var output = { };
    str.split('').forEach(function(word){
        if (!output.hasOwnProperty(word)){
            output[word] = 1 ;
        } else {
            output[word] = output[word] + 1 ;
        }   
        });
        return output;
    }
        console.log(frequency('abca'));
        console.log(frequency('a'));
        console.log(frequency(''));


