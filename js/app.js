var info = {
    business: 'Peacock Park Design',
    photo: '(555) 555-5555',
    email: 'someone@peacockparkdesign.com',
    overflow: '#366c72',
    content: '#f4e7cf',
    banner: {
        link: '#',
        img: 'img/header.png',
        text: 'Interested in our products? Contact us to find a retailer near you!'
    }
};

var build = {
    document: function () {
        $('html, body').css({
            backgroundColor: info.overflow
        });
        $('#container').css({
            backgroundColor: info.content
        });
    },
    banner: function () {
        var banner = info.banner;
        $('#banner-holder').empty().append(
            '<a href="' + banner.link + '">' +
            '<img src="' + banner.img + '" id="contact-us" /></a>' +
            '<span id="banner-text">' + banner.text + '</span>'
        );
    },
    frames: function () {
        // using tabletop to get gDoc
        function tabletop(doc) {
            Tabletop.init({
                key: doc,
                callback: insertDoc,
                simpleSheet: false
            });
        }

        // after gDoc loads
        function insertDoc(data, tabletop) {
            $('div#left-frame').empty().css({
                backgroundImage: 'url("' + data.buttons.elements[0].photo + '")'
            });
            $('div#middle-frame').empty().css({
                backgroundImage: 'url("' + data.buttons.elements[1].photo + '")'
            });
            $('#instagram-link').attr('href', data.buttons.elements[1].link);
            // featured product section
            var currentFeatured = (data.featured.elements.length - 1);
            $('div#featured-product').empty().css({
                backgroundImage: 'url("' + data.featured.elements[currentFeatured].photo + '")'
            });
            $('#featured-link').attr('href', data.featured.elements[currentFeatured].link);
            var showFeatured = setInterval(function () {
                if (currentFeatured >= (data.featured.elements.length - 1)) currentFeatured = 0;
                else currentFeatured++;
                $('div#featured-product').empty().css({
                    backgroundImage: 'url("' + data.featured.elements[currentFeatured].photo + '")'
                });
                $('#featured-link').attr('href', data.featured.elements[currentFeatured].link);
            }, 5000);
            // press article 1
            $('div#press-article-1 img').attr('src', data.blog.elements[0].photo);
            $('div#press-article-1 h1').append(data.blog.elements[0].header);
            $('div#press-article-1 p').append(data.blog.elements[0].body);
            // press article 2
            $('div#press-article-2 img').attr('src', data.blog.elements[1].photo);
            $('div#press-article-2 h1').append(data.blog.elements[1].header);
            $('div#press-article-2 p').append(data.blog.elements[1].body);
            // press article 3
            $('div#press-article-3 img').attr('src', data.blog.elements[2].photo);
            $('div#press-article-3 h1').append(data.blog.elements[2].header);
            $('div#press-article-3 p').append(data.blog.elements[2].body);
        }

        // calling and appending gDoc info
        tabletop('1rObbrV92DzNdiEX5YZ12JpBOJsB8ODmynMR1tc-fPkI');
    },
    all: function () {
        var b = build;
        b.document();
        b.banner();
        b.frames();
    }
};

$(function () {
    function scrollHand() {
        if ($(window).scrollTop() === 0) {
            $('div#scroll-down').fadeIn(1500);
            $(window).scroll(function () {
                $('div#scroll-down').fadeOut(750);
            });
        }
    }
    setTimeout(scrollHand, 5000);
    build.all();
    $('img#become-retail').click(function () {
        $('div#retailer-wrapper').css({
            display: 'inline-block'
        });
        $('a#close-retailer').click(function () {
            $('div#retailer-wrapper').css({
                display: 'none'
            });
        });
    });
    $('img#contact-us').click(function () {
        $('form#contact-us-form').ready(function () {
            gDoc({
                connect: true,
                id: '1FAIpQLSeX8nzpoRTK5sVy6_Ox32MWnj_3Ajilzd9yj-SSIO0UhmfHmg',
                appendTo: 'contact-us-form',
                submitValue: 'Submit Form', // submit button text
                successMsg: 'It worked!', // success message after submit
            });
        });
        $('div#contact-us').css({
            display: 'inline-block'
        });
        $('a#close-contact').click(function () {
            $('div#contact-us').css({
                display: 'none'
            });
        });
    });
    console.log(true)
    $('div#peacock-press-articles').hide();
    $('img#press-header').click(function(){
        $('div#peacock-press-articles').show();
    });
});