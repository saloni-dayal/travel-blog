$(document).ready(function(){
  $("#send").click(function(){
     name=$("#name").val();
     service_name=$("#service_name").val();
     email=$("#email").val();
     Date_of_Service=$("#service").val();
     Number_of_days=$("#days").val();
     var data1={
        name:name,
        service_name:service_name,
        email:email,
        Date_of_Service:Date_of_Service,
        Number_of_days:Number_of_days
      };
      alert(data1.name);
      data1=JSON.stringify(data1);
      alert(data1);
      console.log(data1)
     var url = 'http://127.0.0.1:3005/services';
     $.ajaxSetup({ 
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     }
     });
     $.post(url,data1,function(xhr,status,responseText){
        console.log(responseText);
     });
  });
});


/*const send=document.getElementById("send")
send.addEventListener("click",()=>{
    console.log("button clicked")
    name=document.getElementById("name").value
    service_name=document.getElementById("service_name").value
    email=document.getElementById("email").value
    Date_of_Service=document.getElementById("service").value
    Number_of_days=document.getElementById("days").value

    const xhr1=new XMLHttpRequest();
    var url = 'http://127.0.0.1:3005/services';
    xhr1.open("POST", url);
    var data1={
      name:name,
      service_name:service_name,
      email:email,
      Date_of_Service:Date_of_Service,
      Number_of_days:Number_of_days
    };
    data1=JSON.stringify(data1)
    xhr1.setRequestHeader("content-type","application/json")

    xhr1.send(data1)
    console.log("success")
    console.log(data1)
})*/