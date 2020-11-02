"use strict";

export default class Navbar{

    constructor(article){
        this.articles = {}
        this.article = article
    }

    addEventListeners(){
        let thisclass = this
        //Set navlink to active when clicked
        $(".nav-link").click(function () {
            $(".navbar").find(".active").removeClass("active");
            $(this).addClass("active");
        });

         //inject article when navbar btn clicked
         $(".nav-pages .nav-link").click(function(){
            var article_name = $(this).text()
            thisclass.article.changePage(article_name)
        });
    }

    inject_dom(){
        let i = 0;
        for (var article_name in this.articles) {
            var active = (i == 0 ? "active" : '')
            this.insert_nav_item(article_name, active)
            i++;
        }
    }

    insert_nav_item(text, active){
        $('.nav-pages').append(`
        <li class="nav-item"><a class = 'nav-link ${active}' data-name = '${text}' href="#article-navbar">${text}</a></li>
        `)
    }

    setup(){
        let thisclass = this
        $.getJSON('/articles/articles.json', function (data) {
            thisclass.articles = data["articles"]
            thisclass.inject_dom()
            thisclass.addEventListeners();
        });
    }
}