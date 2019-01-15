// Write a program to find duplicate values in a JavaScript array.

// findDuplicate([10,20,30,40,10,40]);

// output - [10,40];


function findDuplicates(data) {
  if (data.length == 0){
    return 'empty array';
  }
  var result = [];
    data.forEach(function(element,index) {
      // Find if there is a duplicate or not
       if (data.indexOf(element, index + 1) > -1) {
      // Find if the element is already in the result array or not
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
      
    });
    
    return result;
  }
console.log(findDuplicates([10,20,30,40,10,40]));
console.log(findDuplicates(['a', 'b', 'a', 'c']));
console.log(findDuplicates(['a', 'b', 'a', 'c', 1, 1]));
console.log(findDuplicates([10, 20, 30, 40 ]));
console.log(findDuplicates([]));