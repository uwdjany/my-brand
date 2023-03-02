const containerQuery = document.querySelector(".query-page");
// const id = new URLSearchParams(window.location.search).get('id');
//const deleteBtn = document.querySelector('.query-btn')
const getQuery = async () => {
  const url = await fetch(" http://localhost:3000/query");
  const res = await url.json();
  let queryContent = "";

  res.forEach((data) => {
    queryContent += `
    <div class="content">
    <div class="content-comments">
    <h5 class="user-name">${data.names}</h5>
    <h5 class="user-email">${data.email}</h5>
    <p>${data.message}</p>

    <a href class="query-btn" onclick=deleteBtn(${data.id})>Delete</a>
  
   
  </div>
  </div>
    `;
  });
  containerQuery.innerHTML = queryContent;
};

const deleteBtn = async (id) => {
  const res = await fetch("http://localhost:3000/query/" + id, {
    method: "DELETE",
  });
  
  alert("Are you sure You want to delete it.");
   //window.location.replace("/");
};

window.addEventListener("DOMContentLoaded", () => getQuery());
