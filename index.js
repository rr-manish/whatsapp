
const form =document.querySelector("#signup");

form.addEventListener("submit",function (event){


event.preventDefault();

let name=form.elements["name"].value;
  //alert(name);

 var Link=document.getElementById("Link");
 document.getElementById("message").innerText="Enter Below Link to Continue";
 Link.innerHTML="Link";
 var l1="https://api.whatsapp.com/send?phone=+91";
 var ans=l1+name;
 Link.href=ans;
   Link.click();
}

);