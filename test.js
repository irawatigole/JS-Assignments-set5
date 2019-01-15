


function findDuplicate(arr){
    if (arr.length==0){
        return 'empty array';
    }
 var result = [];
 for (var i = 0; i < arr.length; i++) {
  if (arr.sort()[i] == arr.sort()[i+1]) {
       
        result.push(arr[i]);
    }
}
return result;
}
console.log(findDuplicate([10, 20, 30, 40, 10, 20]));
console.log(findDuplicate(['a', 'b', 'a', 'c']));
console.log(findDuplicate(['a', 'b', 'a', 'c', 1, 1]));
console.log(findDuplicate([10, 20, 30, 40 ]));
console.log(findDuplicate([]));