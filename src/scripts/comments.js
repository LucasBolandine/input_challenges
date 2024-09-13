const posts = document.querySelectorAll(".txt_comment")
const displayComments = document.querySelector(".comments")
const comments = document.createElement("div")
const footer = document.createElement("footer")
console.log(posts);


const getPosts = async () => {
  try {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(posts => posts.json())
    console.log("Aqui", posts);

    return posts
  } catch (error) {
    console.log(error);
  }
}

const newPosts = async () => {
  const postsUsers = await getPosts()
  const postsUser_1 = postsUsers.filter(user => user.userId === 1)
  console.log(postsUser_1);

  postsUser_1.forEach(post => {
    comments.setAttribute("class", "comments ps-relative")
    comments.innerHTML += `<div class="comment">
          <img src="../assets/assets-03/img-profile.png" alt="" srcset="">
          <div class="user">
            <strong class="user_name">
              Marcelo Melo <span class="comment_time">• 3h atrás</span>
            </strong>
            <p class="txt_comment">
              ${post.body}
            </p>
          </div>
        </div>`

    displayComments.append(comments)
  })
  footer.setAttribute("class", "ft_comments")
  footer.innerHTML = `<span class="likes"></span>
          <p class="txt_p">
            <strong class="ft_txt">Você e outras 40 pessoas</strong> curtiram esse comentário
          </p>`
  comments.append(footer)
}
newPosts()