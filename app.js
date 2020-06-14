const defaultConfig = {
    "name": "startpage",
    "version": "0.0.1",

    "pageBG": "#111111",
    "terminalBG": "#0d0d0d",
    "terminalShadow": "#0a0a0a",
    "tildeColor": "#ffffff",
    "arrowColor": "#d3d2c7",
    "textColor": "#d3d2c7",
    "echoColor": "#398eb2",
    "nameColor": "#d81a20",
    "openAllColor": "#34d180",
    "linkColor": "#398eb2",
    "linkHoverColor": "#34d180"
};

function init() {
    // Read the config
    readTextFile("config.json", function (text) {
        var config = JSON.parse(text)
        loadConfig(config)
        setOnClicks(config)
    })
    decideBackgroundImage()
    startTime()
}

function loadConfig(config) {
    var html = document.querySelector('html');
    html.style.setProperty('--pageBG',
        config.hasOwnProperty("pageBG") ? config.pageBG : defaultConfig.pageBG);
    html.style.setProperty('--terminalBG',
        config.hasOwnProperty("terminalBG") ? config.terminalBG : defaultConfig.terminalBG);
    html.style.setProperty('--terminalShadow',
        config.hasOwnProperty("terminalShadow") ? config.terminalShadow : defaultConfig.terminalShadow);
    html.style.setProperty('--tildeColor',
        config.hasOwnProperty("tildeColor") ? config.tildeColor : defaultConfig.tildeColor);
    html.style.setProperty('--arrowColor',
        config.hasOwnProperty("arrowColor") ? config.arrowColor : defaultConfig.arrowColor);
    html.style.setProperty('--textColor',
        config.hasOwnProperty("textColor") ? config.textColor : defaultConfig.textColor);
    html.style.setProperty('--echoColor',
        config.hasOwnProperty("echoColor") ? config.echoColor : defaultConfig.echoColor);
    html.style.setProperty('--nameColor',
        config.hasOwnProperty("nameColor") ? config.nameColor : defaultConfig.nameColor);
    html.style.setProperty('--openAllColor',
        config.hasOwnProperty("openAllColor") ? config.openAllColor : defaultConfig.openAllColor);
    html.style.setProperty('--linkColor',
        config.hasOwnProperty("linkColor") ? config.linkColor : defaultConfig.linkColor);
    html.style.setProperty('--linkHoverColor',
        config.hasOwnProperty("linkHoverColor") ? config.linkHoverColor : defaultConfig.linkHoverColor);

    document.getElementById('js-categories').innerHTML = config.categories.map(function (value) {
        return '<div class="section"> ' +
            '<a class="link openAllAnchor myFontItalic" href="#" > <b>' + value.name + '</b></a>' +
            '<br class="halfBreak"> <br>' + value.links.map(function (value2) {
                return '<a class="link" href="' + value2.link + '" target = "_blank" > ' + value2.name + '</a>'
            }).join('<br class="fullBreak">') + '</div>'
    }).join('')
}

function setOnClicks(config) {
    var elements = document.getElementsByClassName("openAllAnchor")
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).addEventListener('click', function () {
            var name = this.text.trim()
            config.categories.filter(function (value) {
                return name === value.name
            }).forEach(function (value) {
                value.links.reverse().forEach(function (value2) {
                    window.open(value2.link)
                })
            })
        })
    }
}

function decideBackgroundImage() {
    document.getElementById("body").style.setProperty("background", "url('" +
        "images/wall" + Math.floor(Math.random() * 21) + ".jpg"
        + "') no-repeat center center fixed")
    document.getElementById("body").style.setProperty("-webkit-background-size","cover")
    document.getElementById("body").style.setProperty("-moz-background-size","cover")
    document.getElementById("body").style.setProperty("-o-background-size","cover")
    document.getElementById("body").style.setProperty("background-size","cover")

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = h >= 12 ? 'pm' : 'am'
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    document.getElementById('js-time').innerText = h + ":" + m + ":" + s + " " + ampm
    setTimeout('startTime()', 500);
}


/*
* Helper functions
* */

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

window.onload = function () {
    init()
}
