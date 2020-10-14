// condesing all my js code into this you can check them out in pass pushes
function askUserNameQuestion(){

    var userName = prompt('Please Enter your name');// this is to get there name and display it under title
    // don't mind this, just for a friend of mine    

    if (userName ==='Derek'|| userName ==='derek') {
        document.write('Stinky '+ userName);
    } else {
        document.write('Welcome ' + userName);
    }

    //return userName;

}

function askUserAge(){
    var questionAnswer = prompt('How old are you?');
    var agecomment;

    if (questionAnswer < 10){
        document.write("Wow you're "+questionAnswer + ' years old! That is pretty young to start playing magic, but welcome!');
    } else if(questionAnswer>10) {
        document.write( questionAnswer + " years old? Solid age to start playing!");
    }
}

function displayDate(){
    var timeDisplay = new Date();
    var dateSet = (timeDisplay.getMonth()+1)+'/'+(timeDisplay.getDay()+11)+'/'+timeDisplay.getFullYear();
    var timeSet = timeDisplay.getHours()+':'+timeDisplay.getMinutes();
    var timeDate= dateSet+' '+timeSet;
    
    document.write(timeDate+ ' This is the current date:)');
    }



function colorChoice(){
    var green1;
    var red1;
    var blue1;
    var white1;
    var black1;
}
