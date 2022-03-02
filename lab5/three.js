var isVowel = function(cha){
    var regEx = /^[aoieu]$/;
    return regEx.test(cha.toLowerCase());
}

console.log(isVowel("I"));