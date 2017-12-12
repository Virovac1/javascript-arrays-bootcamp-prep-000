var chocolateBars = ["snickers", "hundred grand","kitkat","skittles"];


/* The two functions add to beginning of array, both a both functions should add the element to the beginning of the array and then return the whole array. */

//does not alter original array,returns a new one
function addElementToBeginningOfArray (array,element){
var arr1= array;
var arr2= [element]; 
var newArray= arr2.concat(arr1);
return newArray;
}

//var moreArray=`${array}`.push(`${element}`);
//returns a modified version of original array
function destructivelyAddElementToBeginningOfArray(array,element){
array.unshift(element);
return array
}

// may want too  use concat for add element

 function addElementToEndOfArray(array,element){
var arr1= array;
var arr2= [element]; 
var newArray= arr1.concat(arr2);
return newArray;
}

function destructivelyAddElementToEndOfArray (array,elemen){
  
}



