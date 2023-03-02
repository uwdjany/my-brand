const formComment = document.querySelector("form");

const createComment = async (e) => {
  e.preventDefault();
  const fContent = {
    name: formComment.name.value,
    email: formComment.email.value,
    comment: formComment.comment.value,
  };
  await fetch("http://localhost:3000/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(fContent),
  });
  alert("Click Ok button! Done");
};

formComment.addEventListener("submit", createComment);
