const container = document.querySelector(".blogs");
const renderPost = async ()=>{
    const url = (' http://localhost:3000/posts');
    const res = await fetch(url);
    const post = await  res.json();
    //console.log(post)

    let blog =''
    post.forEach(posts => {
        blog +=`
        <div class="post">
        <h2>${posts.title}</h2>
        <p style= "color:#f5d20b;font-weight:bold;">Done:${posts.date}</p>
        <p><small>${posts.likes}</small> Likes</p>
        <p><small>${posts.comment}</small> Comment</p>
        <p>${posts.body.slice(0,150)}</p>
        <a href="viewOneblog.html?id=${posts.id}">Read more</a>
        </div>`
    });
    container.innerHTML = blog

}




addEventListener('DOMContentLoaded' ,()=>renderPost())









