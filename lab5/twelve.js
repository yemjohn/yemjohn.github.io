function findSecondBiggest (arr) {
    var largest = Number.MIN_VALUE;
    if(arr.length<2) {
        console.log ("Invalid input");
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    var secondLargest = arr[0];
    for(let i = 1; i < arr.length; i++) {
       
        if(largest > secondLargest) {
            if(secondLargest < arr[i]) {
                secondLargest = arr[i];
            }
        }
    }
    return secondLargest;
}

function largest1(arr){
    let larg = arr[0];
    let secondLarg = larg;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>larg){
            secondLarg=larg;
            larg = arr[i];
        }
		if(secondLargest < arr[i]) {
                secondLargest = arr[i];
            }
    }
    return secondLarg;
}

console.log(secondLargest([1,2,3,4]));
console.log(secondBiggest([1,2,3,4]));