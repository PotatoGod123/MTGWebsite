var questionAnswer = prompt('How old are you?');
var agecomment;

if (questionAnswer < 10){
    document.write("Wow you're "+questionAnswer + ' years old! That is pretty young to start playing magic, but welcome!');
} else if(questionAnswer>10) {
    document.write( questionAnswer + " years old? Solid age to start playing!");
}

