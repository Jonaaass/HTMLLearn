// You can use JavaScript to fetch and display blog posts dynamically.
// Here's a basic example:

document.addEventListener("DOMContentLoaded", function() {
    // Simulated blog post data
    const blogPosts = [
        { title: "Title 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Title 2", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        // Add more blog post objects as needed
    ];

    const main = document.querySelector("main");

    // Function to display blog posts
    function displayBlogPosts() {
        blogPosts.forEach(post => {
            const postElement = document.createElement("article");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            main.appendChild(postElement);
        });
    }

    // Call the function to display blog posts
    displayBlogPosts();
});
