const id = new URLSearchParams(window.location.search).get("id");
const user = JSON.parse(localStorage.getItem("loginedUser"));
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
  if (id) {
    document.getElementById("img").style.display = "none";
  }
  const view = await fetch("http://localhost:9090/api/blog/" + id);
  const post = await view.json();
  form.title.value = post.data.title;
  // form.author.value = post.data.author;
  form.date.value = post.data.date;
  console.log(post.img);
  document.getElementById("text-editor").children[0].innerHTML =
    post.data.content;
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
  // const view = await fetch("http://localhost:3000/posts/" + id);
  // const post = await view.json();
  // console.log(content);
  const tempUpdate = {
    title: form.title.value,
    content: content,
  };

  if (id) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    myHeaders.append("Content-Type", "application/json");
    fetch("http://localhost:9090/api/blog/update/" + id, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(tempUpdate),
      redirect: 'follow'
    }).then((res) => {
      window.location.replace("/dashboard.html");
    });
  } else {
    const image = document.getElementById("img");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${user.token}`);
    var formdata = new FormData();
    formdata.append("title", form.title.value);
    formdata.append("content", content);
    formdata.append("image", image.files[0]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,

      body: formdata,

      redirect: "follow",
    };

    fetch("http://localhost:9090/api/blog/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        window.location.replace("/dashboard.html");
      })
      .catch((error) => console.log("error", error));
  }
};

form.addEventListener("submit", createNewBlog);
