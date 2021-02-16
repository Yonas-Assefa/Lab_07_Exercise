// UI Vars 
const postDiv2 = document.getElementById('myPosts');



//load multiple posts function 
function loadPosts() {
    function loadCustomers() {
        const xhr = new XMLHttpRequest();
        //change file URL up on your location
        xhr.open('GET', './jsonData/posts.json', true);
        xhr.onload = function() {
        if (this.status === 200) {
        const posts = JSON.parse(this.responseText);
        let output = '';
        posts.forEach(postItem => {
            const post = JSON.parse(postItem.responseText);
            output = `
            <div class="item">
            <div class="image"> <img src="${post.image}"> </div>
            <div class="content">
            <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
            <div class="meta">
            <span id="bDate">${post.date} </span>
            <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
            </div>
            <div class="description"> <p id="bDesc"> ${post.postText} </p> </div>
            <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
            </div>
            </div> `;
            

        output += ` `;

        })};
       
        postDiv1.innerHTML = output;
        }
        xhr.send();
        }
        
}

