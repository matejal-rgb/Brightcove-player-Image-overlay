{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 videojs.registerPlugin('placeholder', function() \{\
    var myPlayer = this,\
        overlay = document.createElement('div');\
\
    // Create the overlay element\
    overlay.className = 'vjs-placeholder';\
    // Set the inner HTML of the overlay to be your image\
    overlay.innerHTML = "<img src='https://ik.imagekit.io/llumrdvem/Streaming_Placeholder.png?updatedAt=1759255614489";\
    \
    // Add the overlay to the player\
    myPlayer.el().appendChild(overlay);\
\
    // Show the overlay when the player is ready\
    myPlayer.on('loadstart', function() \{\
        myPlayer.el().querySelector('.vjs-placeholder').style.display = 'block';\
    \});\
\
    // Hide the overlay when playback begins\
    myPlayer.on('playing', function() \{\
        myPlayer.el().querySelector('.vjs-placeholder').style.display = 'none';\
    \});\
\});}
