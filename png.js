html2canvas(document.body, {
    onrendered: function (canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        a.download = 'screenshot.png';
        a.click();
    }
});