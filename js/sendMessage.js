const form = document.querySelector('form');
const editor = document.getElementById("text-editor")
const sendQuery =async(e)=>{
    e.preventDefault();

    const content ={
        names:form.names.value,
        email:form.email.value,
        message:form.message.value,
    }
    await fetch('http://localhost:3000/query',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
      
        body:JSON.stringify(content)
    })
     //alert("sent successful")
     window.location.replace('/sentSuccessful.html')


}
form.addEventListener('submit', sendQuery)

