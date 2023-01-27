const submit=document.getElementById("addplace")
submit.addEventListener("click",()=>{
    console.log("button clicked")

    src=document.getElementById("imgsrc").value
    name=document.getElementById("imgname").value
    data=document.getElementById("imgdata").value
    const xhr1=new XMLHttpRequest();
    var url = 'http://127.0.0.1:3008/places';
    xhr1.open("POST", url);
    var data1={
      src:src,
      name:name,
      data:data
    };
    data1=JSON.stringify(data1)
    xhr1.setRequestHeader("content-type","application/json")

    xhr1.send(data1)
    console.log("success")

})
