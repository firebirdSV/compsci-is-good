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


Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

var articles
$.getJSON('articles/articles.json', function(data){
    articles = data["articles"]
});
   
$(document).ready(function(){

    //Add active to nav-link on click, remove if click on another

    var i = 0;
    for(var article_name in articles){
        var article_data = articles[article_name]
        $('#alt-navbar div.card-group').append(`
        <div class = 'article-img-container'>
            <img class = 'article-img' src = 'images/${article_data['image']}'>
        </div>
        `)

        $('.nav-pages').append(`
        <li class="nav-item"><a class = 'nav-link' href="#about_us">${article_name}</a></li>
        `)

        if(i==0){
            set_card_text(i)
        }

        var active = (i==0 ? "active" : '')
        $(".carousel-inner").prepend(`
            <div class="carousel-item ${active}">
                <img class="d-block" src= 'images/${article_data['image']}' alt="">
            </div>
        `)

        $('.carousel-indicators').append(`
            <li data-target="#CarouselTest" data-slide-to="${i}" class="${active}"></li>
        `)
        i++;
    }

    //hide article until 'Read More' is clicked for the frst time
    $('article').hide()

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
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");

        var article_name = $(this).text()
        set_article_text(article_name)
        i = Object.keys(articles).indexOf(article_name)
        set_card_text(i)
    })
});