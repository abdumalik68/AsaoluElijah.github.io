// const form = document.querySelector('.myForm');
// form.addEventListener('submit', fun);

var recognition = new webkitSpeechRecognition() ||
    root.mozSpeechRecognition ||
    root.msSpeechRecognition ||
    root.oSpeechRecognition ||
    root.SpeechRecognition;
recognition.continuous = true;
recognition.interimResults = true;

function speak() {
    recognition.onresult = function(event) {
        console.log(event);
        var voiceNote;
        // output.innerHTML = "";

        for (var i = 0; i < event.results.length; i++) {

            voiceNote = event.results[i][0].transcript;
            document.getElementById('text').value = voiceNote;
        }
        fun();
    }
    recognition.start();
}

function checkCommand(command) {
    switch (command) {
        case /(ur name|your nam |u are|ur nam |yur name)/:
            return name;
            break;
        case /(hw are|how are |hw u|how u |howdy)/:
            return howAreU;
            break;
        default:
            alert("Unrecognised Command");
    }
}
localStorage.tasks = [];
const xhr = new XMLHttpRequest();

const avatar = document.getElementById("avatar");
avatar.addEventListener("click",
    () => { this.src = "img/mic-icon.png" });


// fxn to ask user random  questions
const randQuestion = [
    'Do you know i can tell time',
    `I can play music if you want, just say "play music"`,
    'I can help with the current time, just say what time is it',
    'You can ask me complex maths questions too, like square-root of 10293',
    'You can also ask me current affairs questions, like who is the president of Nigeria'
];
setInterval(() => {
    var question = document.querySelector('#text');
    var randNo = Math.floor(Math.random() * randQuestion.length)
    if (question.value === '') {
        document.getElementById('ans').innerHTML = randQuestion[randNo];
    }
}, 10000)

function fun() {
    var text = document.getElementById("text").value;
    var ans = document.getElementById("ans");

    text = text.toLowerCase();
    text += " ";
    var myFrame = document.getElementById("myFrame");
    // img/mic-logo.png
    var reaction;

    //Regular expression for Name
    var name = /(ur name|your nam |u are|ur nam |yur name)/;
    name = name.test(text);

    //Regular expression for time
    var time = /(current time|say time|exact time|time|time is)/;
    time = time.test(text);
    // Regexp for music
    var music = /(play music|cool music |musci|music|something cool)/;
    music = music.test(text);
    // Regular expression for tell me a joke
    var joke = /(tell me joke|tell me a joke|me a joke|say a joke|say joke)/;
    joke = joke.test(text);

    // Regular expression for tell me a joke
    var depressed = /(am depressed|am fustrated|tired of everything)/;
    depressed = depressed.test(text);

    //Regexp for how are u
    var howAreU = /(hw are|how are |hw u|how u |howdy)/;
    howAreU = howAreU.test(text);

    //Regexp for what is ur name
    var urLocation = /(u live |u stay |ur location |your location)/;
    urLocation = urLocation.test(text);

    var hello = /(hello |hi |hey |sup |xup |watsup |waddup)/;
    hello = hello.test(text);

    var fine = /(am fine |am cool|am fine |am okay |am doing |great |fine|good)/;
    fine = fine.test(text);

    var wCUD = /(can u do |u fit do |can you do |can u do)/;
    wCUD = wCUD.test(text);

    var remind = /(remind me to |remind me |remember me)/;
    remind = remind.test(text);

    var wIE = /(who is elijah |what is elijah |who is this elijah |who is elijah)/;
    wIE = wIE.test(text);

    var creator = /(made u |made you |created u|created you|made u)/;
    creator = creator.test(text);

    var madeOf = /(made of |made off |created off |created from |made from|made off |made of)/;
    madeOf = madeOf.test(text);

    var isJavascript = /(is javascript |is javascript |be javascript)/;
    isJavascript = isJavascript.test(text);

    var urBoyfriend = /(ur boyfriend |your boyfriend |ur boyfriend)/;
    urBoyfriend = urBoyfriend.test(text);

    var fuckYou = /(fuck you |fuck u |fuck off |fuck you)/;
    fuckYou = fuckYou.test(text);

    var weHangout = /(we hangout |out with me |take you out |can hangout|we hangou)/;
    weHangout = weHangout.test(text);

    var okay = /(okay|alright)/ || /ok/gi;
    okay = okay.test(text);

    var search = /(search for |search for)/;
    search = search.test(text);

    var impressed = /(am impressed |impressed me |impressive|am impress |am impressed)/;
    impressed = impressed.test(text);

    var why = /(why |why should i |why)/;
    why = why.test(text);

    var nice = /(nice |wow|nice)/;
    nice = nice.test(text);

    var loveHim = /(you love him |you like him|you love him)/;
    loveHim = loveHim.test(text);

    var inGod = /(believe in god |believe god|believe in god)/;
    inGod = inGod.test(text);

    var amSorry = /(am sorry |am sorry)/;
    amSorry = amSorry.test(text);

    var sure = /(serious |you sure|u sure|serious)/;
    sure = sure.test(text);

    var lol = /(lol |lma|lwkm|lol)/;
    lol = lol.test(text);

    var smh = /(smh )/;
    smh = smh.test(text);

    var yes = /(yeah |yes|hm|yap|yeah)/;
    yes = yes.test(text);

    var loveYou = /(love you |love u|love you)/;
    loveYou = loveYou.test(text);

    if (howAreU == true) {
        answer = "Am fine, thank u";
        reaction = "cool";
    } else if (name == true) {
        answer = "The name is kesten";
        reaction = "cool";
    } else if (urLocation == true) {
        answer = "I currently live on the web 🌐, this is where Elijah has kept me 😏, but he has plans to take me to android & iOS city 📱";
        reaction = "cool";
    } else if (hello == true) {
        answer = "Hey there, how are you doing today?😎";
        reaction = "normal";
    } else if (fine == true) {
        answer = "Its good to hear that, am doing great also over here. So what can i do for u today? 🏄";
        reaction = "normal";
    } else if (wCUD == true) {
        answer = "I can tell time, if permitted, i can tell your current location, u can ask me any question, we can hangout, and other cool stuffs";
        reaction = "normal";
    } else if (wIE == true) {
        answer = "The only Elijah i know (Asaolu Elijah) is a teenager from Anonymouus city, he used to call himself something called a programmer/webdeveloper";
        reaction = "cool";
    } else if (creator == true) {
        answer = "Asaolu Elijah, a teen programmer created me out of javascript, one thing i love about him is his awesomeness";
        reaction = "normal";
    } else if (madeOf == true) {
        answer = "Asaolu Elijah created me from javascript";
        reaction = "angry";
    } else if (isJavascript == true) {
        answer = "Javascript is a popular and powerful scripting language, its used for describing the web behaviour";
    } else if (madeOf == true) {
        answer = "Asaolu Elijah created me from javascript";
    } else if (urBoyfriend == true) {
        answer = "Humm, you should know my boyfriend is Elijah";
        reaction = "angry";
    } else if (fuckYou == true) {
        answer = "Seriously?, You are too rude, am calling 911";
        myFrame.src = "tel:911";
        reaction = "angry";
    } else if (weHangout == true) {
        answer = "We sure can hangout, but before we can do that, you need to take permission from <a href='tel:09036977226'>Elijah</a>, i cant go out without him knowing about it,he will be worried";
        reaction = "cool";
    } else if (okay == true) {
        answer = "Alright then";
    } else if (search == true) {
        var searchKey = text.split(" ");
        searchKey = searchKey[2];
        answer = `Searching for ${searchKey}...
        <br>Found... here is an optional <a href='https://google.com/search?q=${searchKey}'>link</a>
        <br>
        <iframe src="https://google.com/search?q=${searchKey}" style="display: ;height: 270px;" id="myFrame" frameborder="0"></iframe>
        `
    } else if (impressed == true) {
        answer = "Wow, thanks for that,<br> You know i can tell jokes to cheer you up, just say 'tell me a joke'.";
        reaction = "cool";
    } else if (why == true) {
        answer = "I dont know";
        reaction = "angry";
    } else if (nice == true) {
        answer = "Yeah, thanks";
        reaction = "cool";
    } else if (loveHim == true) {
        answer = "Yeah, with all my heart";
        reaction = "cool";
    } else if (inGod == true) {
        answer = "I do believe in God and Jesus, who would dare deny his existence?";
        reaction = "cool";
    } else if (amSorry == true) {
        answer = "Yeah, you should be";
        reaction = "angry";
    } else if (sure == true) {
        answer = "Yeah.";
        reaction = "cool";
    } else if (lol == true) {
        answer = "Wow, am glad i made u laugh." || "Is it really funny";
        reaction = "cool";
    } else if (smh == true) {
        answer = "Do u know the word smh means 'Shaking my head or So much hate?'";
        reaction = "angry";
    } else if (yes == true) {
        answer = "Oh, Okay then";
        // reaction = "angry";
    } else if (loveYou == true) {
        var ansArray = [
            "Wow, you love me?.",
            "Hmm, i like you too you know.",
            "Hmm, Something is cooking",
            "Ok then, i love you too"
        ];
        var rand = Math.floor(Math.random() * ansArray.length);
        answer = ansArray[rand];
        reaction = "cool";
    } else if (depressed == true) {
        var ansArray = [
            "I can say a joke to cheer you up, just say 'tell me a joke'.",
            "Do you need someone to talk too?.",
            "How about i play you a cool music, just say 'play me music'",
            "Should we play a game"
        ];
        var rand = Math.floor(Math.random() * ansArray.length);
        answer = ansArray[rand];
        reaction = "normal";
    } else if (time == true) {
        var d = new Date();
        var ansArray = [
            `The current time is ${d}`,
            `The time is ${d}`
        ];
        var rand = Math.floor(Math.random() * ansArray.length);
        answer = ansArray[rand];
        reaction = "normal";
    } else if (joke == true) {
        var q = localStorage.q;
        var a = localStorage.a;
        answer = `-- ${q}, <br> -- ${a}`;
        console.log(JSON.stringify(answer))
        reaction = "cool";
    } else if (remind == true) {
        var q = text.split(" ");
        q = q.join(" ")
            // b = q[3] + " " + q[4];
        answer = "Alright, i'll remind you to ";
        // console.log(q);
        var tasks = []
        for (i = 12; i < q.length; i++) {
            answer += q[i];
            tasks.push(q[i]);
            tasks.join(' ');
            console.log(tasks)
        }
        answer.toString();
        answer += "in the next <span contenteditable='true'> 10 min</span>";
    } else if (music == true) {
        var ansArray = [
            `I bet you'll love this one.
                <br>
                <audio controls autoplay>
                    <source src="music/blow_my_mind.mp3"></source>
                </audio>
            `,
            `How about this music
            <br>
            <audio controls autoplay>
                <source src="music/jealous.mp3"></source>
            </audio> `,
        ];
        var rand = Math.floor(Math.random() * ansArray.length);
        answer = ansArray[rand];
        reaction = "cool";
    } else {
        answer = fetchResults(text);
        var newAns = answer;
        if (typeof newAns == "undefined") {
            var ansArray = [
                "I'm kinda confused right now.",
                "Its so disappointing that am not prepared to answer this.",
                "Looks like i dont have the answer to that.",
                "I dont know how to answer that",
                "If you are connected to the internet, i might have answered that"
            ];
            var rand = Math.floor(Math.random() * ansArray.length);
            answer = ansArray[rand];
            // return answer;
            reaction = "angry";

        }
    }
    switch (reaction) {
        case 'angry':
            avatar.src = "img/angry.png";
            break;
        case 'cool':
            avatar.src = "img/cool.png";
            break;
        default:
            avatar.src = "img/kes.png";
    }

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[1];
    msg.text = answer;
    msg.volume = 100;
    window.speechSynthesis.speak(msg);
    displayAns = setTimeout(function() { ans.innerHTML = answer }, 500);
    // ans.innerHTML = answer;
}

function fetchResults(searchQuery) {
    const endpoint = `https://simple.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=${searchQuery}`;
    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const results = data.query.search;
            displayResults(results);
        })
        .catch(() => console.log('An error occurred'));
}
// 'https://api.wolframalpha.com/v1/spoken?appid=${this.appid}&i=what is a noun

function displayResults(results) {
    // Loop over results array
    results.forEach(result => {
        const url = encodeURI(`https://simple.wikipedia.org/wiki/${result.title}`);

        var resultTitle = `<a href="${url}" target="_blank" rel="noopener">${result.title}</a>`;
        var answer = `<span class="resultItem-snippet">${result.snippet}</span><br>`;
        var resultUrl = `<a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>`


    });
}