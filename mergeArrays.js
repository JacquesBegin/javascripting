// Create function to merge two arrays into their sorted order.

function merge(array1, array2) {
  for (var x = 0; x < array2.length; x++) {
    array1.push(array2[x]);
  }

  var done = false;
  while(!done) {
    done = true;
    for (var y = 1; y < array1.length; y++) {
      if (array1[y - 1] > array1[y]) {
        done = false;
        let tmp = array1[y - 1];
        array1[y - 1] = array1[y];
        array1[y] = tmp;
      }
    }
  }
  
  // array1.sort();
  return array1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);