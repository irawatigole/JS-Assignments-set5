// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
//[{author: "Bill Gates", title: "The Road Ahead", readingStatus: true},{author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true)}];
 
//  var library = [ 
//     {
//          author: 'Bill Gates',
//          title: 'The Road Ahead',
//          readingStatus: true
//      },
//      {
//          author: 'Steve Jobs',
//          title: 'Walter Isaacson',
//          readingStatus: true
//      },
//      {
//          author: 'Suzanne Collins',
//          title:  'Mockingjay: The Final Book of The Hunger Games', 
//          readingStatus: false
//      }];
 
    function readingStatus(library){
        if (library.length == 0){
            return output;
        }
        var output=[];     
 for (var i=0; i<library.length; i++){
     if (library[i].readingStatus == true){
     output.push(library[i]);
    }
     } 
     return output;
    }
console.log(readingStatus( [ 
    {
         author: 'Bill Gates',
         title: 'The Road Ahead',
         readingStatus: true
     },
     {
         author: 'Steve Jobs',
         title: 'Walter Isaacson',
         readingStatus: true
     },
     {
         author: 'Suzanne Collins',
         title:  'Mockingjay: The Final Book of The Hunger Games', 
         readingStatus: false
     }]));
   console.log([]);
   console.log(readingStatus( [ 
    {
         author: 'Bill Gates',
         title: 'The Road Ahead',
         readingStatus: false
     },
     {
         author: 'Steve Jobs',
         title: 'Walter Isaacson',
         readingStatus: false
     },
     {
         author: 'Suzanne Collins',
         title:  'Mockingjay: The Final Book of The Hunger Games', 
         readingStatus: false
     }]));