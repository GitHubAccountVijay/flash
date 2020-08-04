var aamount=document.getElementById("aamount").value
function transaction()
{
var value=Number(document.getElementById("value").value)
    if(document.getElementById("dropdown").value==document.getElementById("seldeposit").value)
    {
        
    
        if(value==0)
        {
            alert("please enter the amount greater than 0")
        }
        else
        {
            if(value>0)
            {
                document.getElementById("aamount").innerHTML=Number(document.getElementById("aamount").innerHTML)+value;
                document.getElementById("damount").innerHTML=value;
            }
            else{
                alert("please enter the valid amount")
            }
        }
    
    }
    else if(document.getElementById("dropdown").value==document.getElementById("selwithdraw").value)
    {
        
        if(value==0)
        {
            alert("please enter the amount greater than 0")
        }
        else
        {
            if(value>0)
            {
                if(true)
                {
                document.getElementById("aamount").innerHTML=Number(document.getElementById("aamount").innerHTML)-value;
                document.getElementById("wamount").innerHTML=value;
                }
                else{
                    alert("insufficient balance ")
                }
        }
            else{
                alert(" please enter the valid amount")
            }
        }
    }
    else
    {
        alert("something is went wrong")
    }
}