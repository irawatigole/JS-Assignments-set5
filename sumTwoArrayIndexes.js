// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.


// Sample array : 
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output : 
// [4, 5, 8, 10, 12, 13] 


function sumTwoArrayIndexes(a,b){
    var sum = [];
 for (var i=0; i< Math.max(a.length,b.length); i++) {
  sum.push((a[i] || 0) + (b[i] || 0));
}
return sum;
}
console.log(sumTwoArrayIndexes([1,0,2,3,4],[3,5,6,7,8]));
console.log(sumTwoArrayIndexes([],[5,3]));
console.log(sumTwoArrayIndexes([1,2],[]));