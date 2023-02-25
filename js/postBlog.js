const row = document.querySelector(".row");

const postBlogs = async () => {
  const url = await fetch("http://localhost:3000/posts");
  const post = await url.json();

  let temp = "";
  post.forEach((posted) => {
    temp += `
        <div class="col">
          <img src="data:image/png;base64,${
            posted.img
          }" alt="" class="blog-img" />
          <h2>${posted.title}</h2>
          <p>
         ${posted.body.slice(0, 150)}
          </p>
          
          <a href="blogContent.html?id=${posted.id}" class="btn">Read More</a>
        </div>
        
        `;
  });
  row.innerHTML = temp;
};

window.addEventListener("DOMContentLoaded", () => postBlogs());
