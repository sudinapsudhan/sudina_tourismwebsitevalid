function validate(){
    let email=document.getElementById("emaill");
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9/-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value))
    {
        alert("valid");
        error.style.color = "green";
        return true;
    }
    else {
       alert("invalid");
        error.style.color = "red";
        return false;
    }
}

    
 
 
    