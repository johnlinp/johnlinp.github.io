(function() {
    var memeBgName = 'am-i-the-only-one-around-here';
    var upperCaptionLines = ['am i the only one', 'around here'];
    var lowerCaptionLines = ['that comes', 'from taiwan?'];

    var putMemeBg = function(memeBgName) {
        var memeBg = document.getElementById('background-image');
        var image = document.createElement('img');
        image.setAttribute('src', 'images/' + memeBgName + '.jpg');
        memeBg.appendChild(image);
    };

    var putSingleCaption = function(captionLines, topBottom, color, horizontal, vertical) {
        var captionGroup = document.getElementById('meme-caption-group');
        var caption = document.createElement('div');
        caption.className = 'meme-caption';
        for(var i = 0; i < captionLines.length; ++ i) {
            var line = document.createElement('div');
            line.innerHTML = captionLines[i].toUpperCase();
            caption.appendChild(line);
        }
        caption.style[topBottom] = (10 + vertical) + 'px';
        caption.style.left = horizontal + 'px';
        caption.style.color = color;
        captionGroup.appendChild(caption);
    };

    var putPrettyCaption = function(captionLines, topBottom) {
        var borderSize = 4;
        for(var i = -borderSize; i <= borderSize; ++ i) {
            for(var j = -borderSize; j <= borderSize; ++ j) {
                putSingleCaption(captionLines, topBottom, 'black', i, j);
            }
        }
        putSingleCaption(captionLines, topBottom, 'white', 0, 0);
    };

    putMemeBg(memeBgName);

    putPrettyCaption(upperCaptionLines, 'top');
    putPrettyCaption(lowerCaptionLines, 'bottom');

})();
