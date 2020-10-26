/*
Instead of displaying a different HTML document for each article, a snippet of 
HTML code is inserted in to the `main` tag of `index.html` when the user wants 
to view a page. This creates the effct of visiting different webpages, but the 
user stays on `index.html`. That's why `index.html` looks empty. 

For example, if the user were to click on the "social media" button in the navbar,
the website would use Javascript to replace the `innerHTML` of the `main` tag in 
`index.html` .
 */

// Renders the home screen
function loadHomePage() {
    mainTag = document.querySelector("main");

    fetch("articles/home.html")
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

    // Make navbar buttons functional
    // Would be good to cut out this whole code block and iterate over nav bar elements
    // from `document.getElementByClassName("nav-item")` and set the behaviour that way.
    document.getElementById("home").onclick = () => loadHomePage();
    document.getElementById("about-us").onclick = () => loadArticle("about-us");
    document.getElementById("education").onclick = () => loadArticle("education");
    document.getElementById("flood-prediction").onclick = () => loadArticle("flood-prediction");
    document.getElementById("medicine").onclick = () => loadArticle("medicine");
    document.getElementById("social-media").onclick = () => loadArticle("social-media");
    
    loadHomePage();
}