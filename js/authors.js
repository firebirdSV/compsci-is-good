"use strict";

export default class Authors{
    constructor(){
        this.authors = {}
    }

    addEventListeners(){
        let thisclass = this;
         //go to authors card when author btn clicked
         $('.article-author .btn').click(function () {
            thisclass.show_about_us();
        })
        $("#about-us").click(function () {
            thisclass.show_about_us();
        });
    }

    insert_author_card(author_name) {
        var author = this.authors[author_name]
        $("#about-us-container").append(`
            <div id = "${author_name.dash_lower()}" class = "card">
                <div class="row ">
                    <div class="col-md-7 px-3">
                        <div class="card-block px-6">
                            <h4 class="card-title">${author_name}</h4>
                            <p class="card-text">${author["bio"]}</p>
                            <br>
                            <a href="${author['linked-in']}" class="mt-auto btn btn-primary  ">Linked in</a>
                            <a href="${author['github']}" class="mt-auto btn btn-primary  ">Github</a>
                        </div>
                    </div>
                    <div class="col-md-5 p-5">
                        <div class = 'author-img-container rounded-circle'>
                            <img class = 'author-img img-responsive' data-holder-rendered='true' alt='profile picture' src = 'authors/images/${author["image"]}'>
                        </div>
                    </div>
                </div>
            </div>
        `)
    }

    show_about_us(){
        $("#article-navbar").hide();
        $("#article-container").hide();
        $("#about-us-container").show();
    }

    inject_dom(){
        for (var author_name in this.authors) {
            this.insert_author_card(author_name)
        }
    }

    setup(){
        let thisclass = this
        $.getJSON('authors/authors.json', function (data) {
            thisclass.authors = data["authors"]
            thisclass.inject_dom()
            thisclass.addEventListeners();
        });
    }
}