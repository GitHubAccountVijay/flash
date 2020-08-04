if(dropdown==deposit)
{
    if(value==0)
    {
        alert("invalid entry")
    }
    else{
        if(value>0)
        {
           deposit()
        }
        else{
            alert("invalid entry")
        }
    }
}
else if(dropdown==withdraw)
{
    if(value==0)
    {
        alert("invalid entry")
    }
    else{
        if(value<balance)
        {
            if(value>0)
            {
                withdraw()
            }
        }
        else{
            alert("enter the possitive number")
        }
    }
}
else
{
    alert("please select the select option as deposit or withdraw")
}
}
function deposit()
{
    var result=avlamount+value;
    document.getElementById("text1").innerHTML=result;
    document.getElementById("text4").innerHTML=value;
}
function withdraw()
{

}