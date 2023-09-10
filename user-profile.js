// user-profile.js
async function loadUserProfile(userId) {
    try {
        const usersResponse = await fetch('https://dummyjson.com/users');
        const usersData = await usersResponse.json();

        // Find the user with the specified ID
        const user = usersData.users.find(user => user.id == userId);//! if === won't work


        if (user) {
            const userProfileContainer = document.getElementById("userProfile");
            userProfileContainer.innerHTML = `
            <div class="card">
            <img class="card-img-top mb-3" src="https://picsum.photos/1200/300" alt="cover" />
            <img
              src="${user.image}"
              class="card-img-top position-absolute rounded-circle"
              alt="avatar"
              style="width: 15%; margin-top: 14%; margin-left: 4%"
            />
            <div class="card-body">
              <h3 class="card-title d-inline-block col-5">${user.firstName} ${user.lastName}</h3> <span class="col"><img src="https://www.svgrepo.com/show/510025/institution.svg" width="28" class="mb-1"> ${user.university}</span>
              <p class="card-text">
                I work at ${user.company.name} with the lovely ${user.company.department} team as a ${user.company.title}.
              </p>
              <span
                >${user.address.city},
                <a
                  href="#"
                  class="fs-5 card-link link-primary link-underline-opacity-0 link-underline-opacity-100-hover"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  >Contact info</a
                ></span
              >
              <div class="container" id="profileButtons">
              <a
                class="btn mt-2 rounded-pill me-1 px-4"
                href="#"
                style="background-color: #0a66c2; font-weight: 700; color:white;"
                onMouseOver="this.style.backgroundColor='#004182';"
                onMouseOut="this.style.backgroundColor='#0a66c2';"
                >Open to</a
              >

              <a
                class="btn btn-outline-primary mt-2 rounded-pill me-1 px-4"
                href="#"
                style="color: #106ac3; font-weight: 500"
                onMouseOver="this.style.backgroundColor='#e2f0fe';"
                onMouseOut="this.style.backgroundColor='#ffffff';"
                >Add profile section</a
              >
              <a
                class="btn btn-outline-secondary mt-2 rounded-pill px-4"
                href="#"
                style="color: #666666; font-weight: 500"
                onMouseOver="this.style.backgroundColor='#ebebeb';"
                onMouseOut="this.style.backgroundColor='#ffffff';"
                >More</a
              >
            </div>

              <!-- Modal -->
              <div
                class="modal fade"
                id="modal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog col-8">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                      ${user.firstName} ${user.lastName}
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body row">
                      <i
                        class="fa fa-linkedin-square fs-1 col-1"
                        aria-hidden="true"
                      ></i>
                      <br />
                      <h4 class="col-6 ms-1 mt-1">&nbsp;Your profile</h4>
                      <a href="" class="link ms-5 mb-3">
                        linkedin.com/in/${user.username}</a
                      >

                      <i
                        class="fa fa-phone fs-1 col-1"
                        aria-hidden="true"
                      ></i>
                      <br />
                      <h4 class="col-6 ms-1 mt-1">&nbsp;Phone</h4>
                      <p href="" class="ms-5 mb-3">${user.phone} (Mobile)</p>

                      <i
                        class="fa fa-envelope fs-1 col-1"
                        aria-hidden="true"
                      ></i>
                      <br />
                      <h4 class="col-6 ms-1 mt-1">&nbsp;Email</h4>
                      <a href="" class="link ms-5 mb-3">
                        ${user.email}</a
                      >

                      <i
                        class="fa fa-comment fs-1 col-1"
                        aria-hidden="true"
                      ></i>
                      <br />
                      <h4 class="col-6 ms-1 mt-1">&nbsp;IM</h4>
                      <p href="" class="link ms-5 mb-3">
                        live:${user.username} (Skype)
                      </p>

                      <i
                        class="fa fa-calendar fs-1 col-1"
                        aria-hidden="true"
                      ></i>
                      <br />
                      <h4 class="col-6 ms-1 mt-1">&nbsp;Birthday</h4>
                      <p href="" class="link ms-5 mb-3">${user.birthDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <!--! Analytics -->
          <div class="container card mt-3">
            <h4 class="card-title mt-4 ms-3 mb-0">Analytics</h4>
            <p class="ms-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                data-supported-dps="16x16"
                fill="#666666"
                class="mercado-match mb-1"
                width="26"
                height="26"
                focusable="false"
              >
                <path
                  d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"
                ></path>
              </svg>
              Private to you
            </p>
            <div class="card-body d-flex flex-row justify-content-between ">
              <!-- Section A -->
              <div class="me-2 col-4">
                <h5 class="card-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#404040"
                    class="mercado-match"
                    width="30"
                    focusable="false"
                  >
                    <path
                      d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
                    ></path>
                  </svg>
                  14 profile views
                </h5>
                <p class="">Discover who's viewed your profile.</p>
              </div>

              <!-- Section B -->
              <div class="me-2 col-4">
                <h5 class="card-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#404040"
                    class="mercado-match"
                    width="30"
                    focusable="false"
                  >
                    <path
                      d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"
                    ></path>
                  </svg>
                  62 post impressions
                </h5>
                <p class="card-text">
                  Check out who's engaging with your posts.
                </p>
              </div>

              <!-- Section C -->
              <div class="col-4 ">
                <h5 class="card-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="#404040"
                    class="mercado-match"
                    width="30"
                    focusable="false"
                  >
                    <path
                      d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"
                    ></path>
                  </svg>
                  13 search appearances
                </h5>
                <p class="card-text">
                  See how often you appear in search results.
                </p>
              </div>
            </div>
          </div>
            `;
            //! Right side (laguage and URL preferences)
            const ProfileLanguage = document.getElementById("ProfileLanguageURL")
            ProfileLanguage.innerHTML=`
            <div class="card mb-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item fw-bold">Profile language <span class="ms-5 fa fa-pencil-square-o"></span> <br><span class="fw-normal">English</span></li>
                <li class="list-group-item fw-bold">Public profile URL  <span class="ms-4 fa fa-pencil-square-o"></span> <br><span class="fw-normal">linkedin.com/in/${user.username}</span></li>
              </ul>
            </div>
            <!--! Add to your feed -->
            <div class="card col-12 mb-3">
              <div class="card-body">
                <h6 class="card-title fw-bold">
                  Add to your feed
                  <svg
                    fill="#00000075"
                    viewBox="-1.7 0 20.4 20.4"
                    xmlns="http://www.w3.org/2000/svg"
                    class="cf-icon-svg ms-4 mb-1"
                    stroke="#00000075"
                    width="25"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16.406 10.283a7.917 7.917 0 1 1-7.917-7.917 7.916 7.916 0 0 1 7.917 7.917zM9.48 14.367a1.003 1.003 0 1 0-1.004 1.003 1.003 1.003 0 0 0 1.004-1.003zM7.697 11.53a.792.792 0 0 0 1.583 0V5.262a.792.792 0 0 0-1.583 0z"
                      ></path>
                    </g>
                  </svg>
                </h6>

                <div class="row">
                  <div class="col-3">
                    <img src="/Me_round.png" alt="avatar" width="50" />
                  </div>
                  <span class="card-title col-8 fw-bold"
                    >Mark James <br />
                    <p class="card-subtitle fw-normal">
                      Software Engineer
                    </p></span
                  >
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill col-8 ms-5"
                  >
                    + Follow
                  </button>
                </div>

                <div class="row">
                  <div class="col-3">
                    <img src="/Me_round.png" alt="avatar" width="50" />
                  </div>
                  <span class="card-title col-8 fw-bold"
                    >Mark James <br />
                    <p class="card-subtitle fw-normal">
                      Software Engineer
                    </p></span
                  >
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill col-8 ms-5"
                  >
                    + Follow
                  </button>
                </div>

                <div class="row">
                  <div class="col-3">
                    <img src="/Me_round.png" alt="avatar" width="50" />
                  </div>
                  <span class="card-title col-8 fw-bold"
                    >Mark James <br />
                    <p class="card-subtitle fw-normal">
                      Software Engineer
                    </p></span
                  >
                  <button
                    type="button"
                    class="btn btn-outline-secondary rounded-pill col-8 ms-5"
                  >
                    + Follow
                  </button>
                </div>

                <p class="mt-3">
                  <a
                    href="#"
                    class="link-body-emphasis fw-bold text-body-tertiary"
                  >
                    View recommendations
                    <svg
                      viewBox="0 -6.5 38 38"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      fill="#585050"
                      stroke="#585050"
                      width="20"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>right-arrow</title>
                        <desc>Created with Sketch.</desc>
                        <g
                          id="icons"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="ui-gambling-website-lined-icnos-casinoshunter"
                            transform="translate(-1511.000000, -158.000000)"
                            fill="#4e5056"
                            fill-rule="nonzero"
                          >
                            <g
                              id="1"
                              transform="translate(1350.000000, 120.000000)"
                            >
                              <path
                                d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                                id="right-arrow"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g></svg
                  ></a>
                </p>
              </div>
            </div>

            <!--! Premium AD -->
            <div
              class="card col-12 mb-3 text-center position-sticky"
              style="top: 12%"
            >
              <h6 class="card-title mt-3">Get your Premium badge!</h6>
              <p>Mo, invest in your future with this exclusive offer.</p>
              <div class="align-self-center mb-2">
                <img src="/Me_round.png" alt="avatar" width="75" />
                <img
                  src="https://media.licdn.com/dms/image/C560EAQE5QXI8NcOggQ/rightRail-logo-shrink_200_200/0/1631010989710?e=1693339200&amp;v=beta&amp;t=sWlVv3U9AUCKj6PBIfjspHGenLNyJvIic34VliDTCGM"
                  alt="LinkedIn Premium"
                  width="75"
                />
              </div>
              <p>Enjoy 50% off 2 months of LinkedIn Premium!</p>
            </div>`
           

        } else {
            console.error('User not found.');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Get the user ID from the query parameter (assuming "?userId=1" in the URL)
const queryParams = new URLSearchParams(window.location.search);
const userId = queryParams.get("userId");

if (userId) {
    loadUserProfile(userId);
} else {
    console.error('User ID not provided.');
}