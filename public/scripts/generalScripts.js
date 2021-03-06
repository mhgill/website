﻿
function resume_url(){
    return 'https://raw.githubusercontent.com/mhgill/Resume/master/resume.json'
}

function introduction(){
    $.getJSON(resume_url(), function (obj) {
        var intro = obj.intro;
        var titles = document.getElementsByName('ptitle')
        var descs = document.getElementsByName('desc')

        for (var i = 0; i < obj.intro.length; i++){
            var item = obj.intro[i]
            for (title in item){
                titles[i].innerText = title
                if (Array.isArray(item[title])) descs[i].innerText = item[title].join()
                else descs[i].innerText = item[title]
            }
        }
    });
}

function experience(){
    $.getJSON(resume_url(), function (obj) {
        var titles = document.getElementsByName('ptitle')
        var descs = document.getElementsByName('desc')

        for (var i = 0; i < titles.length; i++){ //  change these both to experiece !!!
            titles[i].innerText = obj.experience[i].organization
            descs[i].innerText = obj.experience[i].description.join('\n\n')
        }
    });
}

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