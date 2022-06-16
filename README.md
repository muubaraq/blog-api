# Kodecamp - Blog api  solution

This is a solution to (Create a website where a user can create posts, delete posts, get posts, and also Upate posts. Each postcard should have a button to delete as well as view posts. Give the page a design of your choice. 
 
Note you will use the Jsonplaceholder API
 
)

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### Links

- Solution URL: [solution URL](https://github.com/muubaraq/blog-api)
- Live Site URL: [ live site URL](https://muubaraq.github.io/blog-api/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- javascript
- [Bootstrap](https://getbootstap.com/) for responsive design



### What I learned
I learnt how to get post, create post, and delete post. Update seems to be working but not displaying on the page

```html
<div class="carousel-item active">
                <img src="img/carousel-1.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
```
```css
@media screen and (max-width: 780px) {
   .non-sticky {
        min-height:  100vh !important;
        margin-bottom: 10em;
        
   }
    
}
```
```js
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

```



### Useful resources

- [Bootstrap](https://getbootstrap.com) - This helped me for responsiveness. I really liked this pattern and will use it going forward.
- [Example resource 2](https://mdbootstrap.com/) - This is an amazing website which helped me finally understand some components and thier uses in bootstrap. I'd recommend it to anyone still learning this concept.



## Author

- Twitter - [@muubaraq](https://www.twitter.com/muubaraq)





