html2canvas(document.body, {
    onrendered: function (canvas) {
        var a2 = document.createElement('a');
        a2.href = canvas.toDataURL('image/jpeg');
        a2.download = 'screen.txt';
        a2.click();
    }
});