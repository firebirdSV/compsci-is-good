# room3-compsci-info-website
Website made for Programming Black  

## how this works
Instead of displaying a different HTML document for each article, a snippet of HTML code is inserted in to the `main` tag of `index.html` when the user wants to view a page. This gives the effect to the user of visiting different webpages, but they stay on `index.html`, and the website uses Javascript to update the contents of `index.html` depending on what buttons they press. That's why `index.html` looks empty. 

For example, if the user were to click on the "social media" button in the navbar, the website would use Javascript to replace the `innerHTML` of the `main` tag in `index.html` .