// Renders the home screen
function loadHomePage() {
    mainTag = document.getElementById("main");

    fetch("home.html")
        .then(HTMLcode => HTMLcode.text())
        .then(homepage => mainTag.innerHTML = homepage);
}

/* loadArticle injects the HTML of a specified article
   in to the `main` tag of index.html.
 */
function loadArticle(articleName) {
    // Reference to the tag we're updating
    mainTag = document.querySelector("main");
    
    // Load the article as HTML code. Then convert it to a
    // string. Finally, we insert the string in to `index.html` 
    fetch(`articles/${articleName}.html`)
        .then(HTMLcode => HTMLcode.text())
        .then(article => mainTag.innerHTML = article);
}

// Initialise the webpage
window.onload = function() {
    loadHomePage();
}