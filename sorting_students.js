// Bubble sort algorithm starts by comparing the first two elements of an array and swapping if necessary. With each pass through the array, the largest number in the unsorted half will bubble up to the highest index in the unsorted half. Implement the bubblesort algorithm to sort the array in ascending order and print the sorted elements to standard output
// Ex input: [1,9,4,5,7] output: 1 4 5 7 9

function sort_students(numbers) {

  for (var j = 0; j < numbers.length-1; j++) {

    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] > numbers[i+1]) {
            var larger = numbers[i];
            var smaller = numbers[i+1];
            numbers[i] = smaller;
            numbers[i+1] = larger;
        }    
    }

  }
   return (numbers.join(" "));
}

numbers = [1,9,4,5,7];
console.log( sort_students(numbers) );

