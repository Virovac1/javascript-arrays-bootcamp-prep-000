var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];


/* The two functions add to beginning of array, both a both functions should add the element to the beginning of the array and then return the whole array. */

//does not alter original array,returns a new one
function addElementToBeginningOfArray (array,element){
var arr1= array 
var arr2= [toString(`${element}`)]  // this to put element into form of a string in the array
var newArray= arr1.concat(arr2);
return newArray;
}

//var moreArray=`${array}`.push(`${element}`);


//returns a modified version of original array
/*function destructivelyAddElementToBeginningOfArray(array,element) {
array1.push(adel);
return  array1 
console.log(array1);
}
*/
