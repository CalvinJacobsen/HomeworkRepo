var startEl = document.querySelector("#startButton");
var button1El = document.querySelector("#button1");
var button2El = document.querySelector("#button2");
var button3El = document.querySelector("#button3");
var button4El = document.querySelector("#button4");
var timerEl = document.querySelector("#timer");
var introCard = document.querySelector("#introCard");
var questionText = document.querySelector("#questionNumber");


//starts countdowntimer on start button click
startEl.addEventListener("click", function () {

    //make questions appear
    button1El.style.display = "block";
    button2El.style.display = "block";
    button3El.style.display = "block";
    button4El.style.display = "block";
    startEl.style.display = "none";
    introCard.style.display = "none";

    //start timer
    timeLeft = 74;
    var downloadTimer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "TIME UP!";
        }
        else {
            document.getElementById("timer").innerHTML = timeLeft + " s";
        }
        timeLeft -= 1;
    }, 1000);
});


//array of question obejcts below
var questions = [
    {
        question: "The Nintendo company that was founded in 1889 originally made what?",
        option1: "playing cards", //correct
        option2: "dice",
        option3: "toys for kids",
        option4: "clothes",
        correct: "playing cards",
    },
    {
        question: "What was the sequel to Super Mario World called?",
        option1: "Super Mario World 2: All-Stars",
        option2: "Super Mario World 2: Six Golden Coins",
        option3: "Super Mario World 2: Yoshi's Island", //correct
        option4: "Super Mario World 2: Koopa's Castle",
        correct: "Super Mario World 2: Yoshi's Island",
    },
    {
        question: "Not including remakes, how many Legend of Zelda games are there?",
        option1: "28",
        option2: "19", //correct
        option3: "11",
        option4: "42",
        correct: "19",
    },
    {
        question: "There's an urban myth that suggests that Donkey Kong was supposed to be called something else. What was the title?",
        option1: "King of Kong",
        option2: "Monkey Kong", //correct
        option3: "Kangee Kong",
        option4: "Konky Kong",
        correct: "Monkey Kong", //correct
    },
    {
        question: "Which famous game designer is the creator of Kirby?",
        option1: "Satoru Iwata",
        option2: "Shigeru Miyamoto",
        option3: "Takashi Tezuka",
        option4: "Masahiro Sakurai", //correct
        correct: "Masahiro Sakurai", //correct
    },
    {
        question: "What Nintendo console came out in 2001?",
        option1: "Gamecube", //correct
        option2: "Nintendo DS",
        option3: "Wii",
        option4: "Gameboy SP",
        correct: "Gamecube", //correct

    },
    {
        question: "In which district of Japan is the Nintendo headquarters located?",
        option1: "Tokyo",
        option2: "Kyoto", //correct
        option3: "Osaka",
        option4: "Akihabara",
        correct: "Kyoto", //correct
    },
    {
        question: "Nintendo's first success in the video game industry was due to which handheld?",
        option1: "Gameboy",
        option2: "Game and Watch", //correct
        option3: "Nintendo Gamegear",
        option4: "Game and Go",
        correct: "Game and Watch", //correct
    },
    {
        question: "Which Nintendo Console has sold the most units?",
        option1: "Gameboy",
        option2: "Wii",
        option3: "N64",
        option4: "Nintendo DS", //correct
        correct: "Nintendo DS", //correct

    },
    {
        question: "What year was Nintendo founded? (if you were paying attention to question 1 you may already know the answer!)",
        option1: "1933",
        option2: "1899",
        option3: "1889", //correct
        option4: "1938",
        correct: "1889", //correct

    },
    {
        question: "The GameCube's code name during development was _____.",
        option1: "Citra",
        option2: "Revolution",//wii
        option3: "Dolphin", //correct
        option4: "Atlantis",
        correct: "Dolphin", //correct

    },
    {
        question: "The Expansion Pak for the N64 was a product that _____",
        option1: "increased the RAM of the N64.", //correct
        option2: "increased the Save Data storage space of the N64.", //
        option3: "increased the picture quality on the N64.", //that was the s-video cable
        option4: "gave a rumble feature to the N64 Controller.", //rumble pak
        correct: "increased the RAM of the N64.", //correct

    },
    {
        question: "What is the name of the companion that Link recues in the 'Majora's Mask' Game?",
        option1: "Midna", //Twilight princess
        option2: "Tatl", //marjora's mask fairy correct
        option3: "Navi", //Ocarina of time
        option4: "Ciela", //phantom hour glass
        correct: "Tatl", 
    },
    {
        question: "In which Metroid game does Dark Samus first make their appearance?",
        option1: "Metroid Zero Mission",
        option2: "Metroid Fusion",
        option3: "Metroid Prime", //correct, but only briefly
        option4: "Metroid Prime 2",
        correct: "Metroid Prime", //correct, but only briefly
    },
    {
        question: "How many Pokemon are there in the orginal series?",
        option1: "124",
        option2: "182",
        option3: "138",
        option4: "151", //correct
        correct: "151", //correct
    },
    {
        question: "Before it got changed, Kirby's original name was actually _____.",
        option1: "Twinkle Popo", //correct
        option2: "Beeble",
        option3: "Keeby",
        option4: "Rick",
        correct: "Twinkle Popo", //correct
    },
];
//end array of question objects

startEl.addEventListener("click", function () {

    for (var i = 0; i < 15; i++) {
        document.getElementById("questionNumber").innerHTML = questions[i].question;

        button1El.addEventListener("click", function () {
            if 
        });
        button2El.addEventListener("click", function () {

        });
        button3El.addEventListener("click", function () {

        });
        button4El.addEventListener("click", function () {

        });
    }

});


