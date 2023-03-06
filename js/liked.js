const likedBtn = document.querySelector("#likedBtn");
const likedCount = document.querySelector("#likeCount");


const like = async () => {
 
  const id = new URLSearchParams(window.location.search).get("id");
  const userLoggedIn = localStorage.getItem("loggedIn");
 
   
  const view = await fetch("http://localhost:3000/posts/" + id);
  const post = await view.json();

 
  console.log(userLoggedIn);
  if(!userLoggedIn){
    alert("plese create account!")

  }else{
    const likes = post.likes.filter(
      (item) => item.toString() == userLoggedIn.toString()
    );

  if (likes.length == 0) {
    post.likes.push(userLoggedIn);
    const res = await fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
  
    //  console.log(res);
  }
  
  
  
  else {
   
    const likes = post.likes.filter(
(item) => item.toString() != userLoggedIn.toString()
      
    );

   
   
    console.log(likes);
    post.likes = likes;
    const res = await fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });
    //  console.log(res);
  
   
}

}




};

let likeContainer = document.querySelector("#box-like");
const getLike =async()=>{
  const postLike = await fetch('http://localhost:3000/posts');
  const render = await postLike.json()
let tempLike = '';

render.forEach(el => {
  tempLike +=`
  <i class="fa-solid fa-heart icon-like"></i>
  <span class="box-span">${el.likes.length}</span>
  <div class="sub-tilte">
      <h4>Likes</h4>
  </div>
  
  `
  
});

likeContainer.innerHTML = tempLike

}


window.addEventListener('DOMContentLoaded', ()=>getLike())