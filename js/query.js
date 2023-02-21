const container = document.querySelector('.query-page');
const id = new URLSearchParams(window.location.search).get('id');
//const deleteBtn = document.querySelector('.query-btn')
const getQuery = async()=>{
const url = await fetch(' http://localhost:3000/query');
const res = await url.json();
let queryContent = "";

res.forEach(data => {
    queryContent +=`
    <div class="content">
    <div class="content-comment">
    <h5 class="user-name">${data.names}</h5>
    <h5 class="user-email">${data.email}</h5>
    <p>${data.message}</p>

    <a href class="query-btn" onclick=deleteBtn()>Delete</a>
  
   
  </div>
  </div>
    `
    
});
container.innerHTML = queryContent;

}


// deleteBtn.addEventListener('click', async (e)=>{

//     const res = await fetch('http://localhost:3000/query/' + id,{
//         method:'DELETE'
//     })
//     window.location.replace('/')
// })

window.addEventListener('DOMContentLoaded', ()=> getQuery() )
