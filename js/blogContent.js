const idOne = new URLSearchParams(window.location.search).get("id");
//const iconLike = document.querySelector('#icon-like');
//const containerLike = document.querySelector("#container-active");
//const likeBtn = document.querySelector("#likedBtn");

const container = document.querySelector("main");

const getOneById = async () => {
  const url = await fetch(" https://my-brand-backend-production-d231.up.railway.app/api/blog/" + idOne);
  const res = await url.json();

  const temp = `
    <div class="img-content" id="container-active">
    <div class="text">
      <h1>${res.data.title}</h1>
    </div>
    <div class="iconsDiv">
      <p>
        <i class="fa-solid fa-calendar-days icon" ></i> ${res.data.date}
        <button style=""><i class="fa-solid fa-comment icon" id="liked"></i> ${res.data.comments.length} +</button>
       
        <button id="likedBtn" onclick="like()"><i class="fa-solid fa-thumbs-up icon"></i></button>
        
       
        <span id="likeCount">${res.data.likes.length}</span>
        
      </p>
    </div>
  </div>

  <div class="container">
    <div class="title">
      <h5>Written by ${res.data.author}</h5>
    </div>
    <div class="content-blog">
      <p>
     ${res.data.content}
      </p>
    </div>
    `;

  container.innerHTML = temp;
};

window.addEventListener("DOMContentLoaded", () => getOneById());
