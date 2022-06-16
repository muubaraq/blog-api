// js for detail.html
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteBtn = document.querySelector("#delete");

const renderDetails = async () => { 
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    
  const  template = `
    <img src="img/blog-1.jpg" class="img-fluid rounded-start mb-2" alt="...">
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    `
    container.innerHTML = template;
}

deleteBtn.addEventListener("click", async (e) => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
})
    window.location.replace("index.html");
})

window.addEventListener('DOMContentLoaded', () => renderDetails());