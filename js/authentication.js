

const signUp = (e) => {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  const role = "admin";
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.fname.toLowerCase() == fname.toLowerCase() &&
        data.lname.toLowerCase() == lname.toLowerCase()
    );
  if (!exist) {
    formData.push({ fname, lname, email, role, pwd });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("fname").focus();
    alert("Account Created.\nNow you should sign in");
  } else {
    alert("Ooopppssss..\nYou have already signed up");
  }
  e.preventDefault();
};
let tbody = document.querySelector("tbody");
function displayData() {

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  //const users = JSON.parse(localStorage.getItem("formData"));]
  fetch("https://my-brand-backend-production-d231.up.railway.app/api/user/all-user/", requestOptions)
  .then((response) => response.json())
  .then((result)=>{
    tbody.innerHTML = "";
  

    result.data.forEach((user, i) => {
      tbody.innerHTML += `<tr>
     <td>${++i}</td>
     <td>${user.firstName}</td>
     <td>${user.lastName}</td>
     <td>${user.email}</td>
     <td>${user.password}</td>
     <td>${user.role}</td>
     <td>
     <button  style="background:red ; color:white; padding:6px 9px; border-radius:8px;" type="button"  onclick="deleteUser('${
       user.email
     }');">Delete</button>
     </td>
     </tr>
     `;
    });
  })
 
}
deleteUser = (email) => {
  console.log(email);
  if (confirm("Are you sure You want to delete this User")) {
    const posts = JSON.parse(localStorage.getItem("formData")) || [];
    const newPost = posts.filter((item) => item.email != email);
    localStorage.setItem("formData", JSON.stringify(newPost));
    displayData();
  }
};






function signIn(e) {
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd
    );


  console.log(exist);
  if (!exist) {
    alert("Invalid email or password");
  } else {
    const user = JSON.parse(localStorage.getItem("formData")).filter(
      (item) => item.email == email && item.pwd == pwd
    )[0];
    localStorage.setItem("loggedIn", user.email);
    if (user.role.toLowerCase() == "admin") {
      location.href = "/dashboard.html";
      
    }
    
   
    else {

      location.href = "/index.html";
    
    }
  }
  e.preventDefault();
}
let userAccount = document.getElementById("user-account");
let btnNav = document.getElementById("btn-home")
 if(userAccount){
  btnNav.style.display="none"
}

function logout(){
  //let user = localStorage.getItem("formData")
let user = localStorage.getItem('loginedUser')
  if(!(localStorage.removeItem("loginedUser",user))){
    btnNav.style.display="block"
    userAccount.style.display="none"
  }
  else{
    userAccount.style.display="none"
     location.href='/index.html';
  }

}
