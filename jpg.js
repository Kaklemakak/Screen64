html2canvas(document.body, {
    onrendered: function (canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL('image/jpeg').replace('image/jpeg', 'image/octet-stream');
        a.download = 'screenshot.jpg';
        a.click();
    }
});