
const form = document.querySelector('form');

let image = ""

document.getElementById('img').addEventListener("change",(e)=>{
    const file=e.target.files[0]
    const reader= new FileReader()
    reader.onloadend=()=>{
        const base64String = reader.result.replace("data:" ,"").replace(/^.+,/,"");
        image = base64String
    };
    reader.readAsDataURL(file);
})

const createNewBlog = async(e) =>{
    e.preventDefault();
    const temp ={
        title:form.title.value,
        author:form.author.value,
        date:form.date.value,
        body:form.body.value,
        img:image,
        likes:0,
        comment:0
    }
await fetch('http://localhost:3000/posts',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify(temp)

    });
window.location.replace('/allblog.html')

}

form.addEventListener('submit', createNewBlog)