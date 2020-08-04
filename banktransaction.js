function transaction() {
   
    if(document.getElementById("dropdown").value==document.getElementById("seldeposit").value)
    {
        alert("hii")
        if(value==0)
        {
            alert("please enter the amount greater than 0")
        }
        else
        {
            if(value>0)
            {
                document.getElementById("aamount").innerHTML=aamount+value;
                document.getElementById("damount").innerHTML=value;
                document.getElementById("leftdeposit").innerHTML=description + "-" +  value + " " + +new Date;
            }
            else{
                alert("please enter the valid amount")
            }
        }
    }
    else if(document.getElementById("dropdown").value==document.getElementById("selwithdraw").value)
    {
        alert("hello")
        
        if(value==0)
        {
            alert("please enter the amount greater than 0")
        }
        else
        {
            if(value>0)
            {
                document.getElementById("aamount").innerHTML=aamount-value;
                document.getElementById("damount").innerHTML=value;
            }
            else{
                alert("please enter the valid amount")
            }
        }
    }
    else{
        alert("something is went wrong")
    }
}
