let mobileNav = document.querySelector("#mobile-nav");
let list = document.querySelector("nav");
mobileNav.addEventListener("click", ()=>{
    mobileNav.classList.toggle("fa-times");
    list.classList.toggle("active");

})
toggle = () => {
    mobileNav.classList.toggle("fa-times");
    list.classList.toggle("active");

  };

  //Add blog javascript

  function logoutDash(){
    let user = localStorage.getItem("formData")
    localStorage.removeItem("loggedIn",user)
    location.href='/index.html'
  }