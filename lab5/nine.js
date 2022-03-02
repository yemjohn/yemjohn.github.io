// Method 1 using for loop
var printOddNumbersOnly = function(nums){
    let ods =[];
    let j=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2!=0){
            ods[j]=nums[i];
            j++;
        }
    }
    return ods;
}
// Method two using filter;
const printOddNumbersOnly1 = function(nums){
    const result = nums.filter(num=>num%2!=0);
    return result;
}
console.log(printOddNumbersOnly([5,4,8,13,7,6]));
console.log(printOddNumbersOnly1([5,4,8,13,7,6]));