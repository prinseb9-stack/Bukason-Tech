const feed = document.getElementById("feed");

const posts = [
  {
    id: 1,
    user: "Krista",
    text: "Welcome to Krista 🎉 A place to meet, connect, and share ideas.",
    time: "Just now",
    likes: 0,
    comments: []
  },
  {
    id: 2,
    user: "Bukason",
    text: "Building the future, one platform at a time 🚀",
    time: "5 min ago",
    likes: 0,
    comments: []
  }
];

function renderPosts() {
  feed.innerHTML = "";
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "post-card";

    card.innerHTML = `
      <div class="post-header">
        <span class="post-user">${post.user}</span>
        <span class="post-time">${post.time}</span>
      </div>

      <div class="post-text">${post.text}</div>

      <div class="post-actions">
        <button onclick="likePost(${post.id})">❤️ ${post.likes}</button>
        <button>💬 Comment</button>
      </div>

      <div class="comments" id="comments-${post.id}"></div>

      <input
        class="comment-input"
        placeholder="Write a comment..."
        onkeypress="addComment(event, ${post.id})"
      />
    `;

    feed.appendChild(card);
    renderComments(post);
  });
}

function likePost(id) {
  const post = posts.find(p => p.id === id);
  post.likes++;
  renderPosts();
}

function addComment(e, id) {
  if (e.key === "Enter" && e.target.value.trim() !== "") {
    const post = posts.find(p => p.id === id);
    post.comments.push(e.target.value);
    e.target.value = "";
    renderPosts();
  }
}

function renderComments(post) {
  const commentsDiv = document.getElementById(`comments-${post.id}`);
  if (!commentsDiv) return;
  commentsDiv.innerHTML = "";
  post.comments.forEach(c => {
    const div = document.createElement("div");
    div.className = "comment";
    div.textContent = c;
    commentsDiv.appendChild(div);
  });
}

renderPosts();