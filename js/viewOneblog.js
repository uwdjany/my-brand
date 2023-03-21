const id = new URLSearchParams(window.location.search).get("id");
const content = document.querySelector(".getOne");
const deleteBtn = document.querySelector(".delete");
const editBtn = document.querySelector(".edit");
const user = JSON.parse(localStorage.getItem('loginedUser'))

const viewOne = async () => {
  const view = await fetch("https://my-brand-backend-production-d231.up.railway.app/api/blog/" + id);
  const post = await view.json();
  console.log(post);
  const viewOneBlog = `
<h1>${post.data.title}</h1>
<p>${post.data.content}</p>
`;
  content.innerHTML = viewOneBlog;
};

deleteBtn.addEventListener("click", () => {
  // const res = await fetch("http://localhost:9000/posts/api/blog/delete/" + id, {
  //   method: "DELETE",
  // });
  // window.location.replace("/dashboard.html");
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.token}`);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
  };
  fetch(`https://my-brand-backend-production-d231.up.railway.app/api/blog/delete/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result)
          window.location.replace("/dashboard.html");
      })
      .catch(error => console.log('error', error));
});

editBtn.addEventListener("click", async (e) => {
  // const res = await fetch('http://localhost:3000/posts/'+id,{
  //     method:'PUT'

  // })
  window.location.replace("createBlog.html?id=" + id);
});

window.addEventListener("DOMContentLoaded", () => viewOne());
