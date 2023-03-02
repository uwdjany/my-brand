const containerComment = document.querySelector("#container-comments");
const id = new URLSearchParams(window.location.search).get("id");

const renderComment = async () => {
  const url = await fetch("http://localhost:3000/comments");
  const res = await url.json();
  let tempComment = "";
  res.forEach((comment) => {
    tempComment += `
        <div class="content-comment">
        <div style="padding-left:20px; padding-right:20px;">
        <h5 class="user-name">
            ${comment.name}
        </h5>
        <h5 class="user-email">
        ${comment.email}
        </h5>
        <p style="padding-bottom:10px;">${comment.comment}</p>
        </div>
        <div  style="padding-left:20px;">
        <button style="background:red; padding:7px; color:white;" onclick="btnDelete(${comment.id})">Delete</button>
        </div>   
        </div>
  
    
    `;
  });

  containerComment.innerHTML = tempComment;
};

addEventListener("DOMContentLoaded", () => renderComment());


const btnDelete = async (id) => {
  const res = await fetch("http://localhost:3000/comments/" + id, {
    method: "DELETE",
  });
  
  alert("Are you sure You want to delete it.");
   //window.location.replace("/");
};

const formComment = document.querySelector("form");

const createComment = async (e) => {
  const id = new URLSearchParams(window.location.search).get("id");
  const userLoggedIn = localStorage.getItem("loggedIn");

  e.preventDefault();

  if(!userLoggedIn){
    alert("please!! create account")
  }else{
    const fContent = {
      name: formComment.name.value,
      email: formComment.email.value,
      comment: formComment.comment.value,
      // blogId: parseInt(id),
    };
    await fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fContent),
    });
    alert("Click Ok button! Done");

  }

};

formComment.addEventListener("submit", createComment);

let boxComments = document.querySelector("#box-comments");

const getComment = async()=>{

   
  const commentLink = await fetch("http://localhost:3000/comments");
  const resComment = await commentLink.json();
  let docComments = "";
  resComment.forEach((el)=>{
docComments +=`
<i class="fa-solid fa-comment icon-box "></i>
<span class="box-span">${el.id}</span>
<div class="sub-tilte">
    <h4>Comments</h4>
</div>
`
  })

  boxComments.innerHTML=docComments
}
addEventListener('DOMContentLoaded',() => getComment())