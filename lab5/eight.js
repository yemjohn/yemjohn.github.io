function computeSumOfSquares (arr){
    var sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum += Math.pow(arr[i],2);
    // }
    // return sum;
  
  var total = arr.map(arr1=>arr1*arr1).reduce((a, b)=> a+b, 0);
  return total;
}
console.log ("the sum of squares using stream is" +computeSumOfSquares ([1,2,3]));