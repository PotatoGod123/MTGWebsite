var timeDisplay = new Date();
var dateSet = (timeDisplay.getMonth()+1)+'/'+timeDisplay.getDay()+'/'+timeDisplay.getFullYear();
var timeSet = timeDisplay.getHours()+':'+timeDisplay.getMinutes();
var timeDate= dateSet+' '+timeSet;

document.write(timeDate+ ' This is the current date:)');
