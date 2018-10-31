function base64() {
    chrome.tabs.executeScript({
        file: 'base64.js'
    });
}

function jpg() {
    chrome.tabs.executeScript({
        file: 'jpg.js'
    });
}

function png() {
    chrome.tabs.executeScript({
        file: 'png.js'
    });
}

function pdf() {
    chrome.tabs.executeScript({
        file: 'pdf.js'
    });
}

document.getElementById('base64').addEventListener('click', base64);
document.getElementById('jpg').addEventListener('click', jpg);
document.getElementById('png').addEventListener('click', png);
document.getElementById('pdf').addEventListener('click', pdf);