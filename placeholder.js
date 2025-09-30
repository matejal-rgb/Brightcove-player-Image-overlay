videojs.registerPlugin('placeholder', function() {
    var myPlayer = this,
        overlay = document.createElement('div');

    // Create the overlay element
    overlay.className = 'vjs-placeholder';
    // Set the inner HTML of the overlay to be your new image
    overlay.innerHTML = "<img src='https://ik.imagekit.io/llumrdvem/Streaming_Placeholder.png?updatedAt=1759255614489'>";
    
    // Add the overlay to the player
    myPlayer.el().appendChild(overlay);

    // Show the overlay when the player is ready
    myPlayer.on('loadstart', function() {
        myPlayer.el().querySelector('.vjs-placeholder').style.display = 'block';
    });

    // Hide the overlay when playback begins
    myPlayer.on('playing', function() {
        myPlayer.el().querySelector('.vjs-placeholder').style.display = 'none';
    });
});
