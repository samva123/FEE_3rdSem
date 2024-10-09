// Simulate fetching user data from a database
function fetchUser(userId, callback) {
    console.log("Fetching user data...");
    setTimeout(() => {
        const user = { id: userId, name: "John Doe" };
        console.log("User data fetched:", user);
        callback(user); // Call the next function with user data
    }, 1000);
}

// Simulate fetching posts for a user
function fetchPosts(user, callback) {
    console.log(`Fetching posts for user ${user.name}...`);
    setTimeout(() => {
        const posts = [
            { id: 1, title: "Post 1", userId: user.id },
            { id: 2, title: "Post 2", userId: user.id }
        ];
        console.log("Posts fetched:", posts);
        callback(posts); // Call the next function with posts data
    }, 1500);
}

// Simulate fetching comments for a specific post
function fetchComments(post, callback) {
    console.log(`Fetching comments for post "${post.title}"...`);
    setTimeout(() => {
        const comments = [
            { postId: post.id, comment: "Great post!" },
            { postId: post.id, comment: "Thanks for sharing!" }
        ];
        console.log("Comments fetched for post:", comments);
        callback(comments); // Call the callback with comments data
    }, 1000);
}

// Main function to initiate the process
function getUserPostsComments(userId) {
    fetchUser(userId, (user) => {
        fetchPosts(user, (posts) => {
            // Use a function to fetch comments sequentially for each post
            function fetchCommentsSequentially(index) {
                if (index < posts.length) {
                    fetchComments(posts[index], (comments) => {
                        console.log(`Comments for post "${posts[index].title}":`, comments);
                        fetchCommentsSequentially(index + 1); // Fetch next post comments
                    });
                }
            }
            fetchCommentsSequentially(0); // Start fetching comments for the first post
        });
    });
}

// Start the process for user with ID 1
getUserPostsComments(1);