async function fetchData() {
    try {
        const usersResponse = await fetch('https://dummyjson.com/users');
        const usersData = await usersResponse.json();

        const postsResponse = await fetch('https://dummyjson.com/posts');
        const postsData = await postsResponse.json();

        const postsContainer = document.getElementById("postsContainer");

        function getRandomImageURL() {
            const width = 1200;
            const height = 600;
            const randomParameter = Math.random(); // Generate a random number between 0 and 1
            return `https://picsum.photos/${width}/${height}?random=${randomParameter}`;
        }
  
        for (let i = 0; i < Math.min(usersData.users.length, postsData.posts.length); i++) { //Both APIs have the same length of 30
            //! Dynamic users profile pages
         // Create a link that navigates to the user profile page with the user's ID as a query parameter
        const userLink = document.createElement("a");
        userLink.href = `user-profile.html?userId=${usersData.users[i].id}`;
        userLink.textContent = `${usersData.users[i].firstName} ${usersData.users[i].lastName}`;
        // Append the user link to the card structure
        const userContainer = document.createElement("div");
        userContainer.appendChild(userLink);


            const newUserPost = document.createElement("div");
            newUserPost.innerHTML = `
                <div class="card container-fluid mt-2">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1">
                                <img src="${usersData.users[i].image}" alt="avatar" width="50" id="userProfile" />
                            </div>
                            <div class="col-8 ms-3">
                                <a href="user-profile.html?userId=${usersData.users[i].id}" class="card-title link-dark custom-link link-underline-opacity-0  link-underline-opacity-100-hover fw-bold link link-primary       .custom-link:hover {
    color: #007bff !important;
  }" id="userProfile">
                                    ${`${usersData.users[i].firstName} ${usersData.users[i].lastName}`}
                                    <br />
                                    <p class="card-subtitle fw-normal">
                                        ${usersData.users[i].company.title}
                                    </p>
                                </a>
                            </div>
                            <div class="col">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    data-supported-dps="24x24"
                                    fill="currentColor"
                                    class="mercado-match offset-6"
                                    width="24"
                                    height="24"
                                    focusable="false"
                                >
                                    <path
                                        d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <p class="card-text mt-2">
                            ${postsData.posts[i].body}
                        </p>
                    </div>
                    <img
                    src="${getRandomImageURL()}"
                    class="card-img-top mb-2 align-self-center"
                        alt="post-image"
                    />
                </div>
            `;
            postsContainer.appendChild(newUserPost);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
