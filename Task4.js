var UserName;
do
{
     UserName=prompt("Enter your User Name");
    
}while(!isNaN(UserName));
var PhoneNumber;
do
{
     PhoneNumber=prompt("Enter your Phone Number");
    
}while(PhoneNumber.length!=8);
var mobileNum;
do{
     mobileNum = prompt("Enter you Mobile with 11 number & starts with (010 or 011 r  012)"); //by default string
}
while(!(mobileNum.length == 11 && (mobileNum.startsWith("010") || mobileNum.startsWith("011") ||  mobileNum.startsWith("012"))) );
var validRegex = /^[a-zA-Z]{3}@[0-9]{3}.com*$/;
var em;
do{
     em=prompt("please enter your email ");

}while(!em.match(validRegex))
var choice =prompt("choose color from (red,blue,green)");

document.writeln("<h1>entering user info</h1> <hr>");
document.writeln('<h4 style="color:'+choice+';">Welcome dear guest </h4>'+UserName);
document.writeln('<h4 style="color:'+choice+';">Your telephone number is </h4>'+PhoneNumber);
document.writeln('<h4 style="color:'+choice+';">Your mobile number is </h4>'+mobileNum);
document.writeln('<h4 style="color:'+choice+';">Your email address is</h4>'+em);

