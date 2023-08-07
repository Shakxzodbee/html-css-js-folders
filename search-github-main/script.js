const searchGithub = async () => {
    const username = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const detailsContainer = document.querySelector(".details");
    const data = await response.json();

    if (response.ok) {
        detailsContainer.style.display = "flex";
        document.getElementById("result").innerHTML = `
        <style>
        .profile{
            display:flex;
        }
        .profile-image{
            height: 100px;
            width: 100px;
            margin-right: 10px;
            border-radius: 50%;
            overflow: hidden;
        }
        .profile-image img{
            width: 100%;
            height: 100%;
        }
        .bio{
            font-size: 14px;
            margin-top: 10px;
        }
        .stats{
            background-color: #20232c;
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 20px 0;
            margin-top: 20px;
            text-align: center;
            border: 1px solid #999;
            border-radius: 6px;
        }
        .media{
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        .media p{
            width: 50%;
            display: flex;
            align-items: center;
            font-size: 13px;
        }
        </style>
            <div class="profile">
                <div class="profile-image">
                    <img src="${data.avatar_url}" />
                </div>
                <div class="profile-details">
                    <h2 class="name">${data.name || data.login}</h2>
                    <p class="username">@${data.login}</p>
                    <p class="bio">${data.bio || 'Account doesn\'t have a bio.'}</p>

                    <div class="stats">
                        <div>
                            <div class="stats-name">Public Repos</div>
                            <div class="stats-value">${data.public_repos}</div>
                        </div>
                        <div>
                            <div class="stats-name">Followers</div>
                            <div class="stats-value">${data.followers}</div>
                        </div>
                        <div>
                            <div class="stats-name">Following</div>
                            <div class="stats-value">${data.following}</div>
                        </div>
                    </div>

                <div class="media">
                    <p>
                        <span class="media-value">${data.location || 'Not Available'}</span>
                    </p>
                    <p>
                        <span class="media-value">${data.blog || 'Not Available'}</span>
                    </p>
                    <p>
                        <span class="media-value">${data.twitter_username || 'Not Available'}</span>
                    </p>
                    <p>
                        <span class="media-value">${data.company || 'Not Available'}</span>
                    </p>
                </div>
            </div>
        </div>
        `;
    } else {
        alert(data.message);
    }
}

const body = document.querySelector("body");
body.style.backgroundColor = "#1a212d";
body.style.color = "#fff";
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

const h1element = document.querySelector("h1");
h1element.style.marginBottom = "10px";
h1element.style.textAlign = "center";
h1element.style.fontWeight = "500";

const search = document.querySelector(".searchBox");
search.style.backgroundColor = "#161922";
search.style.display = "flex";
search.style.alignItems = "center";
search.style.justifyContent = "space-between";
search.style.padding = "10px";
search.style.borderRadius = "6px";
search.style.border = "1px solid #999";

const input = document.querySelector("input");
input.style.border = "none";
input.style.outline = "none";
input.style.width = "80%";
input.style.color = "#fff";
input.style.fontSize = "15px";
input.style.backgroundColor = "transparent";


const btn = document.querySelector("button");
btn.style.backgroundColor = "#675afe";
btn.style.color = "#fff";
btn.style.border = "none";
btn.style.outline = "none";
btn.style.borderRadius = "6px";
btn.style.cursor = "pointer";
btn.style.padding = "5px 10px";
btn.style.transition = "all 0.3s ease"

btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = "#3a28fa";
})

const container = document.querySelector(".container");
container.style.padding = "30px 22px";
container.style.width = "42rem";

const detal = document.querySelector(".details");
detal.style.marginTop = "20px";
detal.style.backgroundColor = "#161922";
detal.style.padding = "20px 25px";
detal.style.borderRadius = "6px";
detal.style.display = "none";
detal.style.border = "1px solid #999";

const username = document.querySelector(".username");
username.style.fontSize = "13px";
username.style.color ="#675afe";

const profileImg = document.querySelector(".profile-image");
profileImg.style.height = "100px";
profileImg.style.width = "100px";
profileImg.style.marginRight = "10px";
profileImg.style.borderRadius = "50%";
profileImg.style.overflow = "hidden";

const profidetal = document.querySelector(".profile-details");
profidetal.style.padding = "10px";
profidetal.style.width = "25rem";

const bio = document.querySelector(".bio");
bio.style.fontSize = "14px";
bio.style.marginTop = "10px";

media.style.display = "flex";
media.style.flexWrap = "wrap";
media.style.marginTop = "20px";