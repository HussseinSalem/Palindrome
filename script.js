function isPalindrome(str) {                                              // function to check if a word is a palindrom
    var cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();           // remove all non-alphabetic characters and convert to lowercase
    var reversedStr = cleanStr.split("").reverse().join("");              // reverse the string
    return cleanStr === reversedStr;                                
}

function checkPalindrome() {
    var inputString = document.getElementById("inputString").value;
    var resultElement = document.getElementById("result");

    if (isPalindrome(inputString)) {
        resultElement.innerText = "The word is a palindrom!";
    } else {
        resultElement.innerText = "The word is not a palindrom.";
    }
}
