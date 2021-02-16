// UI Vars 
const postDiv2 = document.getElementById('myPosts');



//load multiple posts function 
function loadPosts() {
    function loadCustomers() {
        const xhr = new XMLHttpRequest();
        //change file URL up on your location
        xhr.open('GET', './', true);
        xhr.onload = function() {
        if (this.status === 200) {
        const posts = JSON.parse(this.responseText);
        let output = '';
        posts.forEach(post => {
       
        //same as previous code
        let output += ` `;
        }});
       
        postDiv1.innerHTML = output;
        }
        }
        xhr.send();
       }

}