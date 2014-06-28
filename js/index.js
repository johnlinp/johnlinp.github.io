(function() {
    var memeBgName = 'am-i-the-only-one-around-here';
    var upperCaptionContent = 'am i the only one around here';
    var lowerCaptionContent = 'that comes from taiwan?';

    var meme = document.getElementById('meme');
    var memeBg = document.getElementById('background-image');
    var image = document.createElement('img');
    image.setAttribute('src', 'images/' + memeBgName + '.jpg');
    memeBg.appendChild(image);

    var upperCaption = document.getElementById('upper-caption');
    var lowerCaption = document.getElementById('lower-caption');
    upperCaption.innerHTML = upperCaptionContent.toUpperCase();
    lowerCaption.innerHTML = lowerCaptionContent.toUpperCase();
})();
