function render() {
    let content = document.getElementById('user');
    content.innerHTML = '';
    for (let i = 0; i < userStory.length; i++) {
        const userstory = userStory[i];

        content.innerHTML += `
            <div  class="user">
                <a href="#"><img src="${userstory.image}"></a>
                <a href="#"><span class="cut-text2">${userstory.name}</span></a>
            </div>
        `;
    }

    genProfileContainer();
    genPost();
    comment();
}


function genProfileContainer() {
    let suggestion = document.getElementById('suggestionContainer');
    suggestion.innerHTML = '';
    for (let j = 0; j < suggestionUser.length; j++) {
        const user = suggestionUser[j];

        suggestion.innerHTML += suggestionContainerHTML(user, j);
    }
}

function suggestionContainerHTML(user, j) {
    return `
        <div class="suggestionContainerUser (${j})">
            
            <div class="suggestionContainerNameLeft (${j})">
                <img src="${user.image}">
                <div class="suggestionContainerName">
                    <span class="profileContainerNameUser">${user.username}</span><br>
                    <div class="textGrey cut-text">${user.followerText}</div>
                </div>
            </div>

            <div class="suggestionContainerNameRight">
                <span class="profileContainerNameRight" id="follow(${j})"><a onclick="followUnChange(${j})" href="#">Folgen</a></span>
            </div>
        </div>
        `;
}


function genPost() {
    let post = document.getElementById('postContainer');
    post.innerHTML = '';
    for (let k = 0; k < posts.length; k++) {
        const posting = posts[k];
        post.innerHTML += generateArticleHTML(posting, k);
    }
}


function generateArticleHTML(posting, k) {
    return `
    <article class="article">
        <div class="articleHeader">
            <div class="articleHeaderLeft">
                <a href="#"><img src="${posting.authorImage}"></a>
                <a href="#"><p>${posting.author}</p></a>
            </div>

            <a href="#"><img class="icon-size articleIconLeftFilter" src="icon/more.png"></a>
        </div>

        <div class="articleImg">
            <img src="${posting.image}">
        </div>

        <div class="articleIcon">
            <div class="articleIconLeft">
                <a id="image(${k})"><img  onclick="likeButton(${k})" class="articleIconLeftFilter" src="icon/like.png"></a>
                <a href="#input${k}"><img class="articleIconLeftFilter" src="icon/comments-32.png"></a>
                <a href="#"><img class="articleIconLeftFilter" src="icon/sharethis-32.png"></a>
            </div>
            <div class="articleIconRight">
                <a href="#"><img class="articleIconLeftFilter" src="icon/book-16-32.png"></a>
            </div>
        </div>

        <span class="articleLikeText">Gefällt <span id="likes(${k})">${posting.likes}</span> mal</span>

        <div class="articlePostText">
            <span class="articleLikeText">${posting.author}</span>
            <span>${posting.description}</span>
        </div>

        <span class="articleCommentHeadline">Kommentare</span>

        <div id="articleCommentContainer${k}" class="articleCommentContainer">
            
        </div>

        <div class="articleInput">
            <input name="alert" required id="input${k}" type="text" placeholder="Kommentieren..."></input>
            <button onclick="addPost(${k})" class="articlePostButton">Posten</button> 
        </div>
    </article>
    `;
}

function comment() {
    for (let i = 0; i < posts.length; i++) {
        let articleCommentContainer = document.getElementById(`articleCommentContainer${i}`);
        articleCommentContainer.innerHTML = '';
        const post = posts[i];

        for (let p = 0; p < post['comments'].length; p++) {
            const comment = post['comments'][p];

            articleCommentContainer.innerHTML += `
            <div id="postComment(${i})">
                <b>19quattro94:</b>
                <div>${comment}</div><br>
            </div>
        `;
        }
    }
}


function addPost(k) {
    let input = document.getElementById(`input${k}`);
    if (input.value.length == '') {
        alert('Comment must be filled out');
    } else {
        posts[k]['comments'].push(input.value);
        render();
    }
}


function follow(j) {
    document.getElementById(`follow(${j})`).innerHTML = `
    <a onclick="followUnChange(${j})">Folgen</a>
    `;
}


function followUnChange(j) {
    document.getElementById(`follow(${j})`).innerHTML = `
    <a onclick="follow(${j})">Angefragt</a>
    `;
}


function likeButton(k) {
    document.getElementById(`image(${k})`).innerHTML = `
    <img onclick ="dislikeButton(${k})" src="icon/hearts.png">`;

    dislike(k);
}


function dislikeButton(k) {
    document.getElementById(`image(${k})`).innerHTML = `
    <img onclick ="likeButton(${k})" src="icon/like.png">`;

    like(k);
}


function like(k) {
    let number = posts[k].likes;
    document.getElementById(`likes(${k})`).innerHTML = `${number}`;
}


function dislike(k) {
    let number = +posts[k].likes;
    document.getElementById(`likes(${k})`).innerHTML = `${number + 1}`;
}