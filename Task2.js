var fname=String(prompt("Enter Your Name"));
var counter=0;
for (var i=0;i<fname.length;i++)
{
if(fname[i]=="e"||fname[i]=="E"){counter++;}
}
document.writeln("Count Of \"e\"in the string =  " +counter);