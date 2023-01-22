function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;
    var email = document.myform.email.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length<6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
      window.open("welcome.html");
    }  
users = [
    {
        uname : "uname",
        email : "email",
        password : "password"
    }
]

function submitForm() {
    let form = document.getElementById("myform");
    form.submit();
}
users.append(uname,email,password);

