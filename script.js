function createPostHTML(post) {
    return `
        <div class="post">
            <div class="post-title">Заголовок: ${post.title}</div>
            <div class="post-body">Статья: ${post.body}</div>
        </div>
    `;
}
function addPostToContainer(container, postHTML) {
    container.innerHTML += postHTML;
}

function fetchAndDisplayPosts() {
    const container = document.getElementById('posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postHTML = createPostHTML(post);
                addPostToContainer(container, postHTML);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPosts);