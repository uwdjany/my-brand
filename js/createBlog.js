const id = new URLSearchParams(window.location.search).get("id");

const form = document.querySelector("form");
const title_form = document.querySelector("#title-form");
const btn_form = document.querySelector("#btn-form");

let image = "";
let quill = new Quill("#text-editor", {
  modules: {
    toolbar: toolbaroptions,
  },
  theme: "snow",
});

const viewOne = async () => {
  const view = await fetch("http://localhost:3000/posts/" + id);
  const post = await view.json();
  form.title.value = post.title;
  form.author.value = post.author;
  form.date.value = post.date;
  console.log(post.img);
  document.getElementById("text-editor").children[0].innerHTML = post.body;
};

if (id) {
  btn_form.innerHTML = "update";
  title_form.innerHTML = "Update a new blog";
  viewOne();
}

document.getElementById("img").addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
    image = base64String;
  };
  reader.readAsDataURL(file);
});

const createNewBlog = async (e) => {
  e.preventDefault();
  const content = document.getElementById("text-editor").children[0].innerHTML;
  const view = await fetch("http://localhost:3000/posts/" + id);
  const post = await view.json();
  console.log(content);
  const tempUpdate = {
    title: form.title.value,
    author: form.author.value,
    date: form.date.value,
    body: content,
    img: post.img,
    likes: post.likes,
    comment: post.comment,
  };
  const temp = {
    title: form.title.value,
    author: form.author.value,
    date: form.date.value,
    body: content,
    img: image,
    likes: [],
    comment: [],
  };
  if (id) {
    const res = await fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tempUpdate),
    });
  } else {
    await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(temp),
    });
  }

  window.location.replace("/dashboard.html");
};

form.addEventListener("submit", createNewBlog);
