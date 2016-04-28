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
    document: function() {
        $('html, body').css({
            backgroundColor: info.overflow
        });
        $('#container').css({
            backgroundColor: info.content
        });
    },
    banner: function() {
        var banner = info.banner;
        $('#banner-holder').empty().append(
            '<a href="' + banner.link + '">' +
            '<img src="' + banner.img + '" /></a>' + 
            '<span id="banner-text">' + banner.text + '</span>'
        );
    },
    frames: function() {
        $('#left-frame').empty().css({
            backgroundImage: 'url(https://scontent.fsnc1-1.fna.fbcdn.net/t31.0-8/10005937_10203536846281560_8737587711572837827_o.jpg)'
        });
        $('#middle-frame').empty().css({
            backgroundImage: 'url(https://instagram.fsnc1-1.fna.fbcdn.net/t51.2885-15/s640x640/sh0.08/e35/12918636_608692159294527_26499287_n.jpg?ig_cache_key=MTIyMTgwODkwNjcwOTA1NzE4Mg%3D%3D.2)'
        });
    }, 
    all: function() {
        var b = build;
        b.document();
        b.banner();
        b.frames();
    }
};

$(document).ready(function(){
    build.all();
});