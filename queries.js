// var que=document.getElementById("usertab1")
var que=$("usertab1")
// var num1=document.getElementById("num1")
$(document).ready(function(){
    var url = 'http://127.0.0.1:3006/queries';
    $.get(url,function(data,status){
        query_data=JSON.parse(data);
        $("#num1").text(query_data.length)
// let str="";
for(i=0;i<query_data.length;i++)
{
    // console.log("hii....");
    name=query_data[i].name
    email=query_data[i].email
    subject=query_data[i].subject
    message=query_data[i].message

    // str+=`<tr>

    //        <th>${name}</th>
       
    //        <th>${email}</th>
    //        <th>${subject}</th>
    //        <th>${message}</th>
    //        </tr>`;

    $("#usertab1").append(`<tr>
           <th>${name}</th>
           <th>${email}</th>
           <th>${subject}</th>
           <th>${message}</th>
           </tr>`)

    }
    // console.log(str);
    // $("#usertab1").html(str);
});
});


/*var que=document.getElementById("usertab1")
var num1=document.getElementById("num1")

   
   const xhr = new XMLHttpRequest();
    var url = 'http://127.0.0.1:3006/queries';
    xhr.open("GET", url);
     xhr.send();
    var data="empty";
    xhr.onload = function () {
        query_data = JSON.parse(xhr.responseText);

        num1.innerHTML=query_data.length
for(i=0;i<query_data.length;i++)
{
    name=query_data[i].name
    email=query_data[i].email
    subject=query_data[i].subject
    message=query_data[i].message

    que.innerHTML+=`<tr>

           <th>${name}</th>
       
           <th>${email}</th>
           <th>${subject}</th>
           <th>${message}</th>
           </tr>`;
}
    }*/

