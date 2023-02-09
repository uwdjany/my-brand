const signUp = (e) => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.lname.toLowerCase() == lname.toLowerCase()
    );
  if (!exist) {
    formData.push({ fname, lname, email, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Account Created.\nNow you should sign in");
  } else {
    alert("Ooopppssss..\nYou have already signed up");
  }
  displayData()
  e.preventDefault();
};




function displayData(){
  console.log(JSON.parse(localStorage.getItem('formData')))
}




function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Invalid email or password");
    }
    else{
        location.href = "/blog.html";
    }
    e.preventDefault();
}
