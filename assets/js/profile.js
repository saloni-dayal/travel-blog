
user_data=JSON.parse(localStorage["users"])
console.log(user_data[0]);

for( let i=0;i<user_data.length;i++){

    const obj=user_data[i]
    const userpro=JSON.parse(localStorage.getItem(user_data[i].mail))
    console.log(user_data[i].mail)
    if(userpro!=null && userpro.islogged){
        document.getElementById("name").value=obj.name
        document.getElementById("username").value=obj.username
        document.getElementById("address").value=obj.address
        document.getElementById("mail").value=obj.mail
        document.getElementById("heading").innerHTML=obj.name
        const edit=document.getElementById("edit")
edit.addEventListener("click",()=>{
        const email1=obj.mail
        localStorage.removeItem(email1)
        const save=document.getElementById("save")
        save.addEventListener("click",()=>{
            obj.name=document.getElementById("name").value
            obj.username=document.getElementById("username").value
            obj.address=document.getElementById("address").value
            obj.mail=document.getElementById("mail").value
        localStorage.setItem(obj.mail,JSON.stringify(obj))
        document.getElementById("name").value=obj.name
        document.getElementById("username").value=obj.username
        document.getElementById("address").value=obj.address
        document.getElementById("mail").value=obj.mail
        document.getElementById("heading").innerHTML=obj.name

        })


})
    }
}