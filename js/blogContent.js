
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('main');
const getOneById = async ()=>{
    const url = await fetch(' http://localhost:3000/posts/' + id);
    const res = await url.json();
    const temp = `
    <div class="img-content">
    <div class="text">
      <h1>${res.title}</h1>
    </div>
    <div class="iconsDiv">
      <p>
        <i class="fa-solid fa-calendar-days icon"></i> ${res.date}
        <i class="fa-solid fa-comment icon"></i> ${res.likes} +
        <i class="fa-solid fa-thumbs-up icon"></i> ${res.comment}+
      </p>
    </div>
  </div>

  <div class="container">
    <div class="title">
      <h5>Written by ${res.author}</h5>
    </div>
    <div class="content-blog">
      <p>
     ${res.body}
      </p>
    </div>
    `
 
    container.innerHTML = temp;

}


window.addEventListener('DOMContentLoaded' , ()=> getOneById ())