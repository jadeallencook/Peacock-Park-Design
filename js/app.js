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
        $('div#contact-us').css({
            display: 'inline-block'
        });
        $('a#close-contact').click(function () {
            $('div#contact-us').css({
                display: 'none'
            });
        });
    });
});