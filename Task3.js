var inputString = prompt("Enter a string:"); 
var isCaseSensitive = confirm("Do you want to consider case sensitivity?");

var reversedInputString = inputString.split('').reverse().join('');

if(isCaseSensitive==true){ //consider case sensitive
    if(inputString === reversedInputString){
        document.writeln("Palindrome with case sensetive");
    }
    else{
        document.writeln("Not Palindrome with case sensetive");
    }
}
else{ //not case sensetive
    inputString =inputString.toLowerCase();
    reversedInputString =reversedInputString.toLowerCase();

    if(inputString === reversedInputString){
        document.writeln("Palindrome with not case sensetive");
    }
    else{
        document.writeln("Not Palindrome with not case sensetive");
    }

}