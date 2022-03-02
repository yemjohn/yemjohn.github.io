function findLongestWord(arr) {
    var longestWordLength = arr[0];
    for( let i = 1; i < arr.length; i++) {
        if(arr[i].length > longestWordLength) {
            longestWordLength = arr[i].length;
        }
    }
    return longestWordLength;
}
var len = findLongestWord(["Yemane", "ea", "aee"]);
console.log("The longest word ever in th array is"+ len);