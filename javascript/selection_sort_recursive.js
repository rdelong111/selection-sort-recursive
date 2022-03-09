function selectionSortRecursive(arr) {
  
  if (typeof arr[0] === 'object') {
    return arr[0].list;
  }
  else {
    if (typeof arr[arr.length - 1] === 'object') {
      const min = Math.min(...arr.slice(0, arr.length - 1));
      const idx = arr.indexOf(min);
      arr[arr.length - 1].list.push(arr.splice(idx, 1)[0]);
    }
    else {
      arr.push({'list': []});
    }
    return selectionSortRecursive(arr);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

/*
If arr has been iterated through
  return the sorted list
If above fails
  If there is a place to store the sorted list at the end of arr
    Store the value of the min of arr
    Store the value of the index of min of arr
    Push the min into the sorted array
  If above fails
    Generate a spot at end of arr to store the list of sorted values
  Return the function selectionSortRecursive with arr as the argument
*/

/*
The first IF statement tests if the array has been iterated through by seeing if the first element of the array is an object that has the sorted list stored inside.
If the array has not been iterated through/the object is not first, then another IF statement is encountered.
This IF statement test if this is the first iteration of the array. If it is, than an object with a spot to store the sorted array is pushed to the end of arr.
Otherwise, The min is found in the array. The min is pushed in the stored object array. The min is then removed from arr.
Once the inside IF statement is completed, then the function is returned with arr.
*/