const row = document.querySelector(".row");

const postBlogs = async () => {
  // const url = await fetch("http://localhost:3000/posts");
  // const post = await url.json();

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  fetch("https://my-brand-backend-production-d231.up.railway.app/api/blog", requestOptions)
  .then((response) => response.json())
  .then((result)=>{
    let temp = "";
    result.data.forEach((posted) => {
      temp += `
          <div class="col">
            <img src="${posted.image}" alt="" class="blog-img" />
            <h2>${posted.title}</h2>
            <p>
           ${posted.content.slice(0,100)}
            </p>
            
            <a href="blogContent.html?id=${posted._id}" class="btn">Read More</a>
          </div>
          
          `;
    });
    row.innerHTML = temp;
  })

 
 
};

window.addEventListener("DOMContentLoaded", () => postBlogs());
