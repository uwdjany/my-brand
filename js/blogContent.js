const id = new URLSearchParams(window.location.search).get("id");
//const iconLike = document.querySelector('#icon-like');
//const containerLike = document.querySelector("#container-active");
//const likeBtn = document.querySelector("#likedBtn");

const container = document.querySelector("main");
const getOneById = async () => {
  const url = await fetch(" http://localhost:3000/posts/" + id);
  const res = await url.json();
  const temp = `
    <div class="img-content" id="container-active">
    <div class="text">
      <h1>${res.title}</h1>
    </div>
    <div class="iconsDiv">
      <p>
        <i class="fa-solid fa-calendar-days icon" ></i> ${res.date}
        <button style=""><i class="fa-solid fa-comment icon" id="liked"></i> ${res.comment} +</button>
       
        <button id="likedBtn" onclick="like()"><i class="fa-solid fa-thumbs-up icon"></i></button>
        
       
        <span id="likeCount">${res.likes.length}</span>
        
      </p>
    </div>
  </div>

  <div class="container">
    <div class="title">
      <h5>Written by ${res.author}</h5>
    </div>
    <div class="content-blog">
      <p>
     ${res.body}
      </p>
    </div>
    `;

  container.innerHTML = temp;
};

window.addEventListener("DOMContentLoaded", () => getOneById());
