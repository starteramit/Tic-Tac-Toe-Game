var count=0,y1,y2,y3,y4,y5,y6,y7,y8,y9;
function chance1()
{   
    if(count%2==0 || count==0)
    {
    y1=document.getElementById("first").innerHTML="X";
    document.getElementById("first").disabled=true;
    document.getElementById("first").style.fontSize="100px";
    document.getElementById("first").style.color="blue";
    }
    
    else{
        y1=document.getElementById("first").innerHTML="O";
        document.getElementById("first").disabled=true;
        document.getElementById("first").style.fontSize="100px";
        document.getElementById("first").style.color="red";
    }
    count=count+1;
    win();
}


function chance2()
{
    if(count%2==0 || count==0)
    {
    y2=document.getElementById("second").innerHTML="X";
    document.getElementById("second").disabled=true;
    document.getElementById("second").style.fontSize="100px";
    document.getElementById("second").style.color="blue";
    }
    else{
        y2=document.getElementById("second").innerHTML="O";
        document.getElementById("second").disabled=true;
        document.getElementById("second").style.fontSize="100px";
        document.getElementById("second").style.color="red";
    }
    count=count+1;
    win();
}
function chance3()
{
    if(count%2==0 || count==0)
    {
    y3=document.getElementById("third").innerHTML="X";
    document.getElementById("third").disabled=true;
    document.getElementById("third").style.fontSize="100px";
    document.getElementById("third").style.color="blue";
    }
    else{
        y3=document.getElementById("third").innerHTML="O";
        document.getElementById("third").disabled=true;
        document.getElementById("third").style.fontSize="100px";
        document.getElementById("third").style.color="red";
    }
    count=count+1;
    win();
}
function chance4()
{
    if(count%2==0 || count==0)
    {
    y4=document.getElementById("forth").innerHTML="X";
    document.getElementById("forth").disabled=true;
    document.getElementById("forth").style.fontSize="100px";
    document.getElementById("forth").style.color="blue";
    }
    else{
        y4=document.getElementById("forth").innerHTML="O";
        document.getElementById("forth").disabled=true;
        document.getElementById("forth").style.fontSize="100px";
        document.getElementById("forth").style.color="red";
    }
    count=count+1;
    win();
}
function chance5()
{
    if(count%2==0 || count==0)
    {
    y5=document.getElementById("fifth").innerHTML="X";
    document.getElementById("fifth").disabled=true;
    document.getElementById("fifth").style.fontSize="100px";
    document.getElementById("fifth").style.color="blue";
    }
    else{
        y5=document.getElementById("fifth").innerHTML="O";
        document.getElementById("fifth").disabled=true;
        document.getElementById("fifth").style.fontSize="100px";
        document.getElementById("fifth").style.color="red";
    }
    count=count+1;
    win();
}
function chance6()
{
    if(count%2==0 || count==0)
    {
    y6=document.getElementById("sixth").innerHTML="X";
    document.getElementById("sixth").disabled=true;
    document.getElementById("sixth").style.fontSize="100px";
    document.getElementById("sixth").style.color="blue";
    }
    else{
        y6=document.getElementById("sixth").innerHTML="O";
        document.getElementById("sixth").disabled=true;
        document.getElementById("sixth").style.fontSize="100px";
        document.getElementById("sixth").style.color="red";
    }
    count=count+1;
    win();
}
function chance7()
{
    if(count%2==0 || count==0)
    {
    y7=document.getElementById("seven").innerHTML="X";
    document.getElementById("seven").disabled=true;
    document.getElementById("seven").style.fontSize="100px";
    document.getElementById("seven").style.color="blue";
    }
    else{
        y7=document.getElementById("seven").innerHTML="O";
        document.getElementById("seven").disabled=true;
        document.getElementById("seven").style.fontSize="100px";
        document.getElementById("seven").style.color="red";
    }
    count=count+1;
    win();
}
function chance8()
{
    if(count%2==0 || count==0)
    {
    y8=document.getElementById("eight").innerHTML="X";
    document.getElementById("eight").disabled=true;
    document.getElementById("eight").style.fontSize="100px";
    document.getElementById("eight").style.color="blue";
    }
    else{
        y8=document.getElementById("eight").innerHTML="O";
        document.getElementById("eight").disabled=true;
        document.getElementById("eight").style.fontSize="100px";
        document.getElementById("eight").style.color="red";
    }
    count=count+1;
    win();
}
function chance9()
{
    if(count%2==0 || count==0)
    {
    y9=document.getElementById("nine").innerHTML="X";
    document.getElementById("nine").disabled=true;
    document.getElementById("nine").style.fontSize="100px";
    document.getElementById("nine").style.color="blue";
    }
    else{
        y9=document.getElementById("nine").innerHTML="O";
        document.getElementById("nine").disabled=true;
        document.getElementById("nine").style.fontSize="100px";
        document.getElementById("nine").style.color="red";
    }
    count=count+1;
    win();
}
function win()
{
    if(y1==y2&&y2==y3&&y3=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y1==y2&&y2==y3&&y3=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y4==y5&&y5==y6&&y6=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y4==y5&&y5==y6&&y6=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y7==y8&&y8==y9&&y9=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y7==y8&&y8==y9&y9=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y1==y4&&y4==y7&&y7=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y1==y4&&y4==y7&&y7=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y2==y5&&y5==y8&&y8=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y2==y5&&y5==y8&&y8=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y3==y6&&y6==y9&&y9=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y3==y6&&y6==y9&&y9=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y1==y5&&y5==y9&&y9=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y1==y5&&y5==y9&&y9=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    if(y3==y5&&y5==y7&&y7=='O'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER SECOND";
        disall();
    }
    if(y1==y5&&y5==y9&&y9=='X'){
        document.getElementById("win").innerHTML="<br>WINNER IS PLAYER FIRST";
        disall();
    }
    else{
        
    }
}
function disall()
{
    document.getElementById("first").disabled="true";
    document.getElementById("second").disabled="true";
    document.getElementById("third").disabled="true";
    document.getElementById("forth").disabled="true";
    document.getElementById("fifth").disabled="true";
    document.getElementById("sixth").disabled="true";
    document.getElementById("seven").disabled="true";
    document.getElementById("eight").disabled="true";
    document.getElementById("nine").disabled="true";
}