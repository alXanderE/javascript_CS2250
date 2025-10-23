//write a function that accepts a string as a parameter
//and find the longest word within the string

function findLongestWord(str){
    let textArray = str.split(" ");
    let longestWord;
    let longestWordLength = 0;

    for (let word of textArray){
        if (word.length > longestWordLength){
            longestWord = word;
            longestWordLength = word.length;
        }
    }
    let result = `The Longest Word: ${longestWord}\n The Longest Word's Length: ${longestWordLength}`;
    return result;
}

text = "I love JavaScript and Python";

console.log(text);

console.log(findLongestWord(text));