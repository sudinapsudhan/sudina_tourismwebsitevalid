var y=document.getElementById("mobile");

    function validate(){
        
    if(mobile.value=="")
    {
        alert("field cannot be empty");
        return false;
    }
    else if(mobile.value.length!=10||mobile.value.length>10 )
    {
        alert("invalid");
        mobile.style.border="2px solid red";
        return false;
    }

    
}
 
 
    
      
   
    
