"use strict";

import Article from "https://joeclinton1.github.io/compsci-is-good/js/article.js";
import Authors from "/js/authors.js";
import Navbar from "/js/navbar.js";

//define mod function
Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};

//define function which makes text lower case and replaces spaces with dashes
String.prototype.dash_lower = function () {
    return this.replace(/\s+/g, '-').toLowerCase()
}

//instigate article, navbar and author objects
var article = new Article();
var navbar =  new Navbar(article);
var authors =  new Authors();

$(document).ready(function () {
    article.setup();
    authors.setup();
    navbar.setup();
});