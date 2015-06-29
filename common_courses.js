// write a function that prints to standard output (stdout) all the course IDs that are contained in both arrays, sorted in ascending order
/* input>
 * courses1: 1, 2, 8, 4, 5, 8, 3
 * courses2: 8, 2, 2, 7, 10
 * output>
 * 2 8
 */


function get_common_courses(courses1, courses2) {
  
  var common_courses = [];
  var common_courses_sorted;

  for ( var c1_i = 0 ; c1_i < courses1.length; c1_i++ ) {
    
    for ( var c2_i = 0; c2_i < courses2.length; c2_i++ ) {
      
      if ( courses1[c1_i] === courses2[c2_i] ) {
        common_courses.push( courses1[c1_i] )
      }

    }

  } 

  common_courses_sorted = common_courses.sort( function(a,b){ return a-b } ).join( " " );
  return common_courses_sorted;

}

courses1 = [1, 2, 8, 4, 5, 8, 3];
courses2 = [8, 2, 2, 7, 10];

console.log( get_common_courses(courses1, courses2) );
