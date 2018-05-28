
/* new Clipboard('.btn'); */

function centerItem(identifier) {
    var $box = $(identifier)
    var boxLeft = ($(window).width()) / 2 - ($box.width() / 2)
    $box.css({
        left: boxLeft,
    });
}

function centerFixedItem(identifier) {
    var $box = $(identifier)
    var boxLeft = ($(window).width()) / 2 - ($box.width() / 2)
    $box.css({
        positon: relative,
        left: boxLeft,
    });

    $box.css({
        positon: fixed,
    });
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

function toast(msg) {
    var x = document.getElementById("snackbar")
    if (msg == null) x.innerHTML = 'Copied To Clipboard!'
    else x.innerHTML = msg

    centerItem('#snackbar')
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 2000);
}


