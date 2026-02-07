// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Feed Elements
  const postButton = document.getElementById("postButton");
  const postText = document.getElementById("postText");
  const feed = document.getElementById("feed-posts");

  // Initialize feed with default message
  if (!feed.hasChildNodes()) {
    const defaultMsg = document.createElement("p");
    defaultMsg.textContent = "🗣️ No posts yet. Be the first.";
    feed.appendChild(defaultMsg);
  }

  // Post button click
  postButton.addEventListener("click", () => {
    const text = postText.value.trim();
    if (text === "") return;

    // Remove default message if exists
    const firstChild = feed.firstChild;
    if (firstChild && firstChild.textContent.includes("No posts yet")) {
      feed.innerHTML = "";
    }

    // Create new post
    const post = document.createElement("p");
    post.textContent = "🗣️ " + text;
    post.style.background = "#1e293b";
    post.style.padding = "10px";
    post.style.borderRadius = "8px";
    post.style.marginBottom = "10px";

    // Prepend post to feed
    feed.prepend(post);

    // Clear textarea
    postText.value = "";
  });

  // Navigation logic (Feed, Profile, Settings)
  const links = document.querySelectorAll(".dashboard-nav .nav-link");
  const sections = {
    feed: document.getElementById("feed"),
    profile: document.getElementById("profile"),
    settings: document.getElementById("settings")
  };

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.textContent.toLowerCase();

      // Toggle active class
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Show/hide sections
      for (const sec in sections) {
        sections[sec].style.display = (sec === target) ? "block" : "none";
      }
    });
  });
});