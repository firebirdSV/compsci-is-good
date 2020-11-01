/*
Instead of displaying a different HTML document for each article, a snippet of 
HTML code is inserted in to the `main` tag of `index.html` when the user wants 
to view a page. This creates the effct of visiting different webpages, but the 
user stays on `index.html`. That's why `index.html` looks empty. 

For example, if the user were to click on the "social media" button in the navbar,
the website would use Javascript to replace the `innerHTML` of the element with id `article-body` in 
`index.html` .
 */


/* loadArticle injects the HTML of a specified article
   in to the `main` tag of index.html.
 */
function loadArticle(articleName) {
    // Reference to the tag we're updating
    articleBody = document.getElementById('article-body');
    articleName = articleName.dash_lower();
    // Load the article as HTML code. Then convert it to a
    // string. Finally, we insert the string in to `index.html` 
    fetch(`articles/${articleName}.html`)
        .then(HTMLcode => HTMLcode.text())
        .then(article => articleBody.innerHTML = article);
}