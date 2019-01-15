// Write a JavaScript program to find a pair of elements (indices of the two numbers) from a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50

// Test Case : 

// pairElement(numbers, target);

function pairElement(a,b){
    var output = [];
    for (var i=a.length; i>=0; i--){
        for (var j=a.length; j>i-1; j--){
            if (a[j] == b - a[i]){
                output.push(i+1,j+1);
                return output;
            }
        }
    }
    return output;
}
console.log(pairElement([10,20,10,40,50,60,70],50));
console.log(pairElement([10,20,10,40,50,60,70], 0));
console.log(pairElement([], 50));
console.log(pairElement([7, 5, 0, -4, 5, 2, 3], 5));   