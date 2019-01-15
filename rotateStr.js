// Sample Input

// "Hello"
// Sample Output

// ["elloH", "lloHe", "loHel", "oHell", "Hello"]  
// As you can see from the example above, each element shifts the first character of the previous version to the end.

// The original string should be included in the output array. The order matters; each element of the output array should be the shifted version of the previous element.

// The output array should have the same length as the input string. 

// The function should return an empty array when a zero-length String is provided as the argument


function rotateStr(str){
    var c=[];
    if (str.length = 0){
        return c;
    }
str = str.charAt(0).toUpperCase() + str.slice(1);
    var a = str.split('');
    for (var i=0; i<a.length; i++){
    var b = a.shift();
    a.push(b);
    c.push(a.join(''));
    }
    return c;
}
console.log(rotateStr('hello'));
console.log(rotateStr(''));


