(function() {
    var memeBgName = 'good-friend-john-lin';
    var upperCaptionLines = ["knows you don't", 'understand this meme'];
    var lowerCaptionLines = ['explain it to you'];

    var putMemeBg = function(memeBgName) {
        var memeBg = document.getElementById('background-image');
        var image = document.createElement('img');
        image.setAttribute('src', 'images/' + memeBgName + '.png');
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
        var borderSize = 3;
        for(var i = -(borderSize * 2); i <= (borderSize * 2); ++ i) {
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
