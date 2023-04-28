let posts = [
    {
        'author': '19quattro94',
        'authorImage': 'img/profile.jpeg',
        'image': 'img/nature.jpg',
        'description': 'Sonnenuntergang am Strand, Leo Carrillo State Beach',
        'location': '',
        'comments': [],
    },

    {
        'author': 'SilverSurfer',
        'authorImage': 'img/profile2.jpeg',
        'image': 'img/abstract.jpg',
        'description': 'Abstract black hexagon pattern on light blue background technology style',
        'location': '',
        'comments': []
    },

    {
        'author': 'TechWizard',
        'authorImage': 'img/profile3.jpeg',
        'image': 'img/computer.jpg',
        'description': 'Maschinelles Lernen ist die Grundlage von intelligenten Chatbots',
        'location': '',
        'comments': []
    },

    {
        'author': 'ShadowHunter',
        'authorImage': 'img/profile4.jpeg',
        'image': 'img/cubes.jpg',
        'description': 'Cubes of Shiny Material. Modern wallpaper in orange and yellow',
        'location': '',
        'comments': []
    },

    {
        'author': 'PhoenixFire3',
        'authorImage': 'img/profile5.jpeg',
        'image': 'img/tech.jpg',
        'description': 'Die Abkürzung GPU steht für die Graphics Processing Unit.',
        'location': '',
        'comments': [],

    },

];


let userStory = [
    {
        'image': 'img/profile1.jpeg',
        'name': 'Boltknightmaster',
    },

    {
        'image': 'img/profile3.jpeg',
        'name': 'CyberNinja',
    },

    {
        'image': 'img/profile2.jpeg',
        'name': 'Starlight',
    },

    {
        'image': 'img/profile4.jpeg',
        'name': 'Thunderbolt',
    },

    {
        'image': 'img/profile5.jpeg',
        'name': 'MysticOracle',
    },

    {
        'image': 'img/profile6.jpeg',
        'name': 'Digitaldreamer',
    },

    {
        'image': 'img/profile7.jpeg',
        'name': 'Neonknight',
    },

    {
        'image': 'img/profile8.jpeg',
        'name': 'ElectricEcho',
    },
];


let suggestionUser = [
    {
        'image': 'img/user1.jpeg',
        'username': 'NightOwl',
        'followerText': 'Spikefivestar und 22 weitere Person(en) sind Follower'

    },

    {
        'image': 'img/user2.jpeg',
        'username': 'MindBender',
        'followerText': 'Blaze und 15 weitere Person(en) sind Follower'

    },

    {
        'image': 'img/user3.jpeg',
        'username': 'MysticSoul',
        'followerText': 'Dash und 9 weitere Person(en) sind Follower'

    },

    {
        'image': 'img/user4.jpeg',
        'username': 'Moonstone',
        'followerText': 'Rebel und 6 weitere Person(en) sind Follower'

    },

    {
        'image': 'img/user5.jpeg',
        'username': 'FireflyHunter',
        'followerText': 'Viper und 4 weitere Person(en) sind Follower'

    },
];


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

        suggestion.innerHTML += `
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
}


function genPost() {
    let post = document.getElementById('postContainer');
    post.innerHTML = '';
    for (let k = 0; k < posts.length; k++) {
        const posting = posts[k];

        post.innerHTML += `
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

            <span class="articleLikeText">Gefällt mir xx mal</span>

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
// Diese funktion funktioniert ebenfalls, bloß ohne die Meldung sobald das Feld leer gepostet wird
// function addPost(k) {
//     let input = document.getElementById(`input${k}`);
//     posts[k]['comments'].push(input.value);
//     render();

// }


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
}


function dislikeButton(k) {
    document.getElementById(`image(${k})`).innerHTML = `
    <img onclick ="likeButton(${k})" src="icon/like.png">`;
}







