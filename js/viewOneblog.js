const id = new URLSearchParams(window.location.search).get("id");
const content = document.querySelector(".getOne");
const deleteBtn = document.querySelector(".delete");
const editBtn = document.querySelector(".edit");

const viewOne = async () => {
  const view = await fetch("http://localhost:9090/api/blog/" + id);
  const post = await view.json();
  console.log(post);
  const viewOneBlog = `
<h1>${post.data.title}</h1>
<p>${post.data.content}</p>
`;
  content.innerHTML = viewOneBlog;
};

deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:3000/posts/" + id, {
    method: "DELETE",
  });
  window.location.replace("/dashboard.html");
});

editBtn.addEventListener("click", async (e) => {
  // const res = await fetch('http://localhost:3000/posts/'+id,{
  //     method:'PUT'

  // })
  window.location.replace("createBlog.html?id=" + id);
});

window.addEventListener("DOMContentLoaded", () => viewOne());
