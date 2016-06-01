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
            '<img src="' + banner.img + '" /></a>' +
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
                backgroundImage: 'url("' + data.Sheet1.elements[0].photo + '")'
            })
            $('#story-link').attr('href', data.Sheet1.elements[0].link);
            $('div#middle-frame').empty().css({
                backgroundImage: 'url("' + data.Sheet1.elements[1].photo + '")'
            });
            $('#instagram-link').attr('href', data.Sheet1.elements[1].link);
            $('div#featured-product').empty().css({
                backgroundImage: 'url("' + data.Sheet1.elements[2].photo + '")'
            });
            $('#featured-link').attr('href', data.Sheet1.elements[2].link);
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

$(document).ready(function () {
    build.all();
    $('a#story-link').mousedown(function () {
        $('div#our-story').css({
            display: 'inline-block'
        });
        $('span#close-video').mousedown(function () {
            $('div#our-story').css({
                display: 'none'
            });
        });
    });
});