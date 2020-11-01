function set_card_text(i){
    var [article_name, article_data] = Object.entries(articles)[i]
    $('#article-cards .card-title').text(article_name)
    $('#article-cards .card-text').text(article_data['description'])
}

function set_article_text(article_name){
    $('article').show()
    $('article .card-title').text(article_name)
    loadArticle(article_name);
}

function insert_author_card(author_name){
    var author = authors[author_name]
    $("#about-us-container").append(`
        <div class="card">
            <div class="row ">
                <div class="col-md-7 px-3">
                    <div class="card-block px-6">
                        <h4 class="card-title">${author_name}</h4>
                        <p class="card-text">${author["bio"]}</p>
                        <br>
                        <a href="#article-body" class="mt-auto btn btn-primary  ">Linked in</a>
                        <a href="#article-body" class="mt-auto btn btn-primary  ">Github</a>
                    </div>
                </div>
                <div class="col-md-5"><img class = 'author_img' src = 'authors/images/${author["image"]}'></div>
            </div>
        </div>
    `)
}

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

var articles
$.getJSON('articles/articles.json', function(data){
    articles = data["articles"]
});

var authors
$.getJSON('authors/authors.json', function(data){
    authors = data["authors"]
});

   
$(document).ready(function(){

    //Add active to nav-link on click, remove if click on another

    var i = 0;
    for(var article_name in articles){
        var article_data = articles[article_name]
        var active = (i==0 ? "active" : '')

        $('.nav-pages').append(`
        <li class="nav-item"><a class = 'nav-link ${active}' href="#about_us">${article_name}</a></li>
        `)

        if(i==0){
            set_card_text(i)
        }

        $(".carousel-inner").prepend(`
            <div class="carousel-item ${active}">
                <img class="d-block" src= 'articles/images/${article_data['image']}' alt="">
            </div>
        `)

        $('.carousel-indicators').append(`
            <li data-target="#CarouselTest" data-slide-to="${i}" class="${active}"></li>
        `)

        i++;
    }

    for(var author_name in authors){
        insert_author_card(author_name)
    }

    //hide article until 'Read More' is clicked for the frst time
    $('article').hide()
    $("#about-us-container").hide()

    i = 0

    //add js for carousel
    $(".carousel-control-next").on("click", ()=>{
        i= (i+1).mod(Object.keys(articles).length)
        set_card_text(i)
    });

    $(".carousel-control-prev").on("click", ()=>{
        i = (i-1).mod(Object.keys(articles).length)
        set_card_text(i)
    });

    $(".carousel-indicators>li").click(function(){
        console.log($(this))
        i = parseInt($(this).attr('data-slide-to'))
        set_card_text(i)
    })

    //inject article when read_more btn clicked
    $("#article-cards .btn").on("click", ()=>{
        var article_name = Object.keys(articles)[i]
        set_article_text(article_name)
    })

    //Set navlink to active when clicked
    $(".nav-link").click(function(){
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
    });

    //inject article when navbar btn clicked
    $(".nav-pages .nav-link").click(function(){
        $("#article-cards").show()
        $("#article-container").show()
        $("#about-us-container").hide()

        var article_name = $(this).text()
        set_article_text(article_name)
        i = Object.keys(articles).indexOf(article_name)
        set_card_text(i)
    })

    $(".nav-about-us").click(function(){
        $("#article-cards").hide()
        $("#article-container").hide()
        $("#about-us-container").show()

    })
});