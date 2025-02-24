//percentage calculator

var totalMarks =400;

var UserName = prompt('enter your name')
var engmarks = +prompt("enter your English Marks")
var urdumarks = +prompt("enter your urde Marks")
var mathsmarks = +prompt("enter your Maths Marks")
var commarks = +prompt("enter your computer Marks")

var studentObtainedMarks =engmarks + urdumarks + mathsmarks + commarks;
var percentage = studentObtainedMarks / totalMarks * 100;
console.log("Username is " + UserName + 'and-result is' + percentage +"%")