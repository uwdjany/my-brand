const container = document.querySelector(".blogs");
const renderPost = async () => {
  // const url = (' http://localhost:3000/posts');
  // const res = await fetch(url);
  // const post = await  res.json();
  //console.log(post)

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://my-brand-backend-production-d231.up.railway.app/api/blog/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      let blog = "";
      result.data.forEach((posts) => {
        blog += `
        <div class="post">
        <h2>${posts.title}</h2>
        <p style= "color:#f5d20b;font-weight:bold;">Done:${posts.date}</p>
        <p><small>${posts.likes.length}</small> Likes</p>
        <p><small>${posts.comments.length}</small> Comment</p>
        <p>${posts.content}</p>
        <a href="viewOneblog.html?id=${posts._id}">Read more</a>
        </div>`;
      });
      container.innerHTML = blog;
    });
};

addEventListener("DOMContentLoaded", () => renderPost());
