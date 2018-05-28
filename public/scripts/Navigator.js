$(document).ready(function () {
    var translation = ["translate(-125px, 0px)", "translate(-105px,60px)", "translate(-60px,105px)", "translate(0px,125px)"]
    var active = [false, false, false, false]

    var icons = document.getElementById("Navigator").childElementCount
    for (var i = 0; i < icons; i++) {
        var item = $(this).find('.circleIcon' + (i + 1).toString())
        if (!active[i]) item.css({ 'background-color': 'gray', 'transform': translation[i] });
        else item.css({ 'background-color': 'dimGray', 'transform': 'none' });
    }
    for (var i = 0; i < icons; i++) {
        active[i] = !active[i]
    }

    $('.IconNavigator').on('mousedown touchstart', function () {
        var icons = document.getElementById("Navigator").childElementCount
        for (var i = 0; i < icons; i++) {
            var item = $(this).find('.circleIcon' + (i + 1).toString())
            if (!active[i]) item.css({ 'background-color': 'gray', 'transform': translation[i] });
            else item.css({ 'background-color': 'dimGray', 'transform': 'none' });
        }
        for (var i = 0; i < icons; i++) {
            active[i] = !active[i]
        }
    });


});

