//Method one using for loop
var filterLongWords = function(words, len){
    let longestWords =[];
    let j=0;
    for(let i=0;i<words.length;i++){
        if(words[i].length>len){
            longestWords[j]=words[i];
            j++;
        }
    }

    return longestWords;
}

// Method two using filter()
var filterLongWords1 = function(words, len){
    const result = words.filter(word=>word.length>len);
    return result;
}

console.log(filterLongWords(["Aregawi","Heran","Yemane","Jon","Meresa"],5))
console.log(filterLongWords1(["Aregawi","Heran","Yemane","Jon","Meresa"],5));