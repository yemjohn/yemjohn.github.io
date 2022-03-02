function computeSumOfEvenSquares (arr){
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(a[i] % 2 == 0) {
            sum += Math.pow(arr[i],2);
        }
        
    }
    return sum;
}
function computeSumOfSquaresofEven (arr){
    var sum = 0;
  
  
  var total = arr.filter(arr1=>arr1 % 2 ==0 ).map(arr1=>arr1*arr1).reduce((a, b)=> a+b, 0);
  return total;
}
console.log ("the sum of squares using stream is" + computeSumOfSquaresofEven ([1,2,3,4]));