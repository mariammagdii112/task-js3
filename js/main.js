// console.log("Hello, World!");


function validate(){
        var text = document.getElementById("text").value;
        var email = document.getElementById("email").value;
        var password  = document.getElementById("password").value;
        var confirmpass= document.getElementById("confirmpass").value;
        var result = document.getElementById("result");


        result.setAttribute("class","alert alert-danger text-center")

        if(text=="" && email==""){
                result.innerHTML=  "Entar Valid name";
                return false;

        }else if(text.length<5 || text.length>15){
                result.innerHTML = "Enter 5-15 character please";
                return false;

        }else if(email.indexOf('@') ==-1 || email.indexOf(".com")==-1){
                result.innerHTML="Enter Valid email";
                return false;
        
        }else if(password==""){
                result.innerHTML="Enter password";
                return false;
        
        }else if(password.length<=8){
                result.innerHTML="week password";
                return false;

        }else if(password.length>15){
                result.innerHTML="Enter password less than 15";
                return false;

        }else if(password != confirmpass){
                result.innerHTML="Enter the same password";
                return false;
        }else{
                return true;
        }
}


