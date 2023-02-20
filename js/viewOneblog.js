const id = new URLSearchParams(window.location.search).get('id');
const content = document.querySelector('.getOne');
const deleteBtn = document.querySelector('.delete')

const viewOne = async ()=>{
    const view = await fetch('http://localhost:3000/posts/' + id);
    const post = await view.json();
//console.log(post)
const viewOneBlog = `
<h1>${post.title}</h1>
<p>${post.body}</p>
`
content.innerHTML= viewOneBlog;
}

deleteBtn.addEventListener('click', async (e)=>{

    const res = await fetch('http://localhost:3000/posts/' + id,{
        method:'DELETE'
    })
    window.location.replace('/allblog.html')
})

window.addEventListener('DOMContentLoaded', ()=> viewOne())
