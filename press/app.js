$(function () {
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
        // asigning press data
        data = data.press.elements;
        // caching 
        var $app = $('div#app');
        var length = data.length;
        // build functions
        var build = {
            menu: function () {
                $app.empty();
                for (var i = 0; i < length; i++) {
                    var html = '<div class="press-item" id="' + i + '">';
                    html += '<img src="' + data[i].cover + '" />';
                    html += '<h1>' + data[i].title + '</h1>';
                    html += '</div>';
                    $app.append(html);
                }
                $('div.press-item').click(function () {
                    build.selected($(this).attr('id'));
                });
            },
            selected: function (id) {
                $app.empty();
                var html = '<span id="close">X</span>';
                function addImage(image) {
                    var html = '';
                    if (image != '') html += '<img class="press-image" src="' + image + '" />';
                    return html;
                }
                html += addImage(data[id].page1);
                html += addImage(data[id].page2);
                html += addImage(data[id].page3);
                html += addImage(data[id].page4);
                html += addImage(data[id].page5);
                $app.append(html);
                $('span#close').click(function () {
                    build.menu();
                });
            }
        };
        build.menu();
    }

    // calling and appending gDoc info
    tabletop('1rObbrV92DzNdiEX5YZ12JpBOJsB8ODmynMR1tc-fPkI');
});