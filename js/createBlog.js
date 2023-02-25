const form = document.querySelector("form");

let image = "";
let quill = new Quill("#text-editor", {
  modules: {
    toolbar: toolbaroptions,
  },
  theme: "snow",
});

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
  console.log(content);
  const temp = {
    title: form.title.value,
    author: form.author.value,
    date: form.date.value,
    body: content,
    img: image,
    likes: 0,
    comment: 0,
  };
  await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(temp),
  });
    window.location.replace("/dashboard.html");
};

form.addEventListener("submit", createNewBlog);
