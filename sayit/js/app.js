"use strict";
// const textOutput = "";
const output = document.getElementById("output");
var recognition = new webkitSpeechRecognition() ||
    root.mozSpeechRecognition ||
    root.msSpeechRecognition ||
    root.oSpeechRecognition ||
    root.SpeechRecognition;
recognition.continuous = true;

function startRecording() {
    document.getElementById('alert-box').classList.add('alert-danger');
    setTimeout(() => {
        document.getElementById('alert-box').innerHTML = "Started Recorder, Now Try Say Something 🔊";
    }, 1000);
    
    recognition.onresult = function(event) {
        console.log(event || "nothing here");
        output.value = "";
        for (var i = 0; i < event.results.length; i++) {
            output.value = output.value + " " + event.results[i][0].transcript;
        }
    }
    recognition.start();
    recognition.onend = function() {
        document.getElementById('alert-box').classList.add('alert-danger');
        //          
        document.getElementById("share-buttons").innerHTML = "";
        setTimeout(() => {
            document.getElementById('alert-box').innerHTML = "Recording Has Stopped 👏";
        }, 1000);
        setTimeout(() => {
            showShareButtons(output.value);
        }, 2000);
    }
}

function copyText() {
    var copyText = document.getElementById("output");
    if (copyText.value === "") {
        alert('Nothing to copy here')
    } else {

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Text Copied to clipboard 🚀");
    }
}

function showShareButtons(text) {
    var emailTemp = encodeURI(text);
    var template = `
        <p class="text-center">
            Share generated output on social media 🏌️‍♂️:
        </p>
        <!-- Facebook -->
        <a href="https://www.facebook.com/sharer.php?u=https://asaoluelijah.github.io/sayit" target="_blank"><img src="https://4.bp.blogspot.com/-raFYZvIFUV0/UwNI2ek6i3I/AAAAAAAAGSA/zs-kwq0q58E/s1600/facebook.png" alt="Facebook" /></a>
        <!-- Twitter -->
        <a href="https://twitter.com/share?url=https://asaoluelijah.github.io/sayit&text=${text} text generated by #sayIt" target="_blank"><img src="https://4.bp.blogspot.com/--ISQEurz3aE/UwNI4hDaQMI/AAAAAAAAGS4/ZAgmPiM9Xpk/s1600/twitter.png" alt="Twitter" /></a>
        <!-- Google+ -->
        <a href="https://plus.google.com/share?url=https://asaoluelijah.github.io/sayit" target="_blank"><img src="https://2.bp.blogspot.com/-9ijXNtKTaSk/UwNI3ANT4MI/AAAAAAAAGSY/Tu4kE8x9SnI/s1600/google.png" alt="Google" /></a>
        <!-- Digg -->
        <a href="https://www.digg.com/submit?url=https://asaoluelijah.github.io/sayit" target="_blank"><img src="https://4.bp.blogspot.com/-AUdsqB7cajQ/UwNI2iqT_AI/AAAAAAAAGR8/0FV_ZcsiylU/s1600/diggit.png" alt="Digg" /></a>
        <!-- Reddit -->
        <a href="http://reddit.com/submit?url=https://asaoluelijah.github.io/sayit&title=${text}" target="_blank"><img src="https://4.bp.blogspot.com/-1-mZEa1eiyc/UwNI4JytiFI/AAAAAAAAGSs/AoKmBkkJR-s/s1600/reddit.png" alt="Reddit" /></a>
        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://asaoluelijah.github.io/sayit" target="_blank"><img src="https://2.bp.blogspot.com/-3_cATk7Wlho/UwNI3eoTTLI/AAAAAAAAGSQ/Y8cpq6S-SeQ/s1600/linkedin.png" alt="LinkedIn" /></a>
        <!-- Pinterest -->
        <a href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','https://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());"><img src="https://2.bp.blogspot.com/-3CfsOmDx-Dg/UwNI3kMVjgI/AAAAAAAAGSU/OSixn3lcjX4/s1600/pinterest.png" alt="Pinterest" /></a>
        <!-- StumbleUpon-->
        <a href="http://www.stumbleupon.com/submit?url=https://asaoluelijah.github.io/sayit&title=${text}" target="_blank"><img src="https://2.bp.blogspot.com/-si3v8X2IVGI/UwNI4bncQrI/AAAAAAAAGSo/iZepRnIJFZU/s1600/stumbleupon.png" alt="StumbleUpon" /></a>
        <!-- Email -->
        <a href="mailto:?Subject=FrinMash&Body=${emailTemp} /n generated%20by%20https://asaoluelijah.github.io/sayit"><img src="https://4.bp.blogspot.com/-njgKtNLrPqI/UwNI2o-9WfI/AAAAAAAAGR4/f8da1gBgyLs/s1600/email.png" alt="Email" /></a>`

    // render share buttons 
    document.getElementById("share-buttons").innerHTML += template;
    // show share buttons after 2 sec
    setTimeout(() => {
        document.getElementById("share-buttons").style.display = "inline-block";
    }, 2000);
}

// ... current year for footer
var c = document.getElementById('copy_year');
var cd = new Date().getFullYear();
c.innerHTML = cd;

console.log("%cMADE WITH ❤ BY ASAOLU ELIJAH", "font-weight: bold; font-size: 50px; color: #ff4f51; text-shadow: 1px 1px 0px black, 1px -1px 0px black, -1px 1px 0px black, -1px -1px 0px black;");
