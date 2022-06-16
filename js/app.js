


//
let postsArray = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const form = document.getElementById("new-post")


// 

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
        <div class="col-md-12">
        <div class="card mb-3 mt-2">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="img/blog-1.jpg" class="img-fluid rounded-start h-100 w-100" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body.slice(0,90)}...</p>
                <button class="btn btn-primary" onclick="updatePost(${post.id})">Update <i class="bi bi-pencil"></i></button>
                <a href="detail.html?id=${post.id}" class="btn btn-secondary">View <i class="bi bi-binoculars-fill"></i></a>
                <button class="btn btn-danger btn-block" onclick="deletePost(${post.id})">Delete <i class="bi bi-trash3-fill"></i></button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
        `
    }
    document.getElementById("post-container").innerHTML = html
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 30)
        renderPosts()
    })

    // js to add a new post

document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = titleInput.value
    const postBody = bodyInput.value
    const data = {
        title: postTitle,
        body: postBody
    }
    
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    fetch("https://jsonplaceholder.typicode.com/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()

            // clear the form
            form.reset()
        })
})




    // js to delete a post

    function deletePost(id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
      })
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
              postsArray = postsArray.filter(post => post.id !== id)
              console.log(postsArray)
              // use a function to display the UI
              renderPosts()
          })
  
  }


  // js to update a post

  function updatePost(id) {
    console.log(id)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {

            console.log(data)
            let postTitles = document.querySelectorAll('#post-title')
            let postBodies = document.querySelectorAll('#post-body')
            console.log(postTitles)
            postTitles.forEach((postTitle, index) => {
                if (index + 1 === id) {
                    if (data.title !== "") {
                        postTitle.innerHTML = data.title
                    }
                }

            })

            postBodies.forEach((postBody, index) => {
                if (index + 1 === id) {
                    if (data.body !== "") {
                        postBody.innerHTML = data.body
                    }
                }

            })

        });
}