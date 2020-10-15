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



//function colorChoice() // this will force user to pick their favorite color
    var green1;
    var red1;
    var blue1;
    var white1;
    var black1;
    function colorChoice(){    
    var colorPick = prompt('Type in your favorite Deck color! (Red,Green,White,Blue,Black)')
// warning bit reduant and long but it does what i does
    while(colorPick.toLocaleLowerCase() !='red' && colorPick.toLocaleLowerCase() !='green' && colorPick.toLocaleLowerCase() !='white'&& colorPick.toLocaleLowerCase() !='blue' && colorPick.toLocaleLowerCase() !='black') {
        colorPick = prompt('Please choose a correct color(Red,Green,White,Blue,Black!!)');
    }
}

//    colorChoice();

//}




function showingCards(){
var userCardNumber;
var src = "https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg";
show_image("https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg", 100,100,"");
}

function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width= 100;
    img.height= 100;
    img.alt = alt;
    document.getElementById("CardImg").appendChild(img);
}


    
    
// so the code on top of this was suppose to make it easier just to run the functions it self, i'm asumming
// i had to give the img a source and direction but i just opted to make it all into one function dowb below
function askCard() {
    var actualCard = document.getElementById('CardImg');
    var imagePath = 'https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg';
    var img1;
    var cardNumber = prompt("Type in the number of cards you want");
    for (i = 0; i<=cardNumber-01; i++) {
        img1 = new Image();
        img1.src = imagePath;
        actualCard.appendChild(img1);
        img1.width =100;
        img1.height= 100;
    }  
}