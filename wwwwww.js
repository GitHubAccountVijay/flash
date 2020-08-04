if(description==" " && Number(value)==" ")
{
    alert("please fill the description and amount")
}
else if(dvalue==document.getElementById("deposit"))
{
    document.getElementById("leftdescription").innerHTML=datenow + "-"+description + "-" + value;
}
else if(dvalue==document.getElementById("withdraw")){
   document.getElementById("rightdescription").innerHTML=date + "-"+description + "-" + value;
}
else{
    alert("something went wrong")
}




document.getElementById("aamount").innerHTML=aamount+value;
    document.getElementById("damount").innerHTML=value;
    document.getElementById("wamount").innerHTML=value;
    document.getElementById("aamount").innerHTML=aamount-value;