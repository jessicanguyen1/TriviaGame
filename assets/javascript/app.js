// 30 seconds per question
// click correct - show image, delay 2 seconds and change to next question and reset timer
// var correct ++

// click incorrect, RED BORDER ON THE GUESS -- make other guesses unclickable, delay 2 seconds and change to next question -- reset timer
// var incorrect--

// unanswered
// make all guesses unclickable, delay 2 seconds, change to next question -- reset timer
// var unanswered--


// Create an array that stores the questions, the guesses, and if each guess is correct or not

var triviaQuestions = [
    {
        question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
        imageSrc: 'assets/images/rajah.png',
        guesses: {
            guessOne: {
                answer: 'Rajah',
                isCorrect: true
            },
            guessTwo: {
                answer: 'Jafar',
                isCorrect: false
            },
            guessThree: {
                answer: "Abu",
                isCorrect: false
            }
        }
    },
    {
        question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",
        imageSrc: 'assets/images/hook.gif',
        guesses: {
            guessOne: {
                answer: 'His right',
                isCorrect: false
            },
            guessTwo: {
                answer: 'His left',
                isCorrect: true
            },
            guessThree: {
                answer: 'Both hands',
                isCorrect: false
            }
        }
    },
    {
        question: "In the Lion King, where does Mufasa and his family live?",
        imageSrc: 'assets/images/simba.png',
        guesses: {
            guessOne: {
                answer: "Antarctica",
                isCorrect: false
            },
            guessTwo: {
                answer: "Elephant Graveyard",
                isCorrect: false
            },
            guessThree: {
                answer: "Pride Rock",
                isCorrect: true
            }
        }
    },
    {
        question: "In Beauty and the Beast, how many eggs does Gaston eat for breakfast?",
        imageSrc: 'assets/images/gaston.png',
        guesses: {
            guessOne: {
                answer: "5 dozen",
                isCorrect: true
            },
            guessTwo: {
                answer: "One",
                isCorrect: false
            },
            guessThree: {
                answer: "One dozen",
                isCorrect: false
            }

        }
    },
    {
        question: "Which Disney princess attempts to disguise herself as a man?",
        imageSrc: 'assets/images/mulan.gif',
        guesses: {
            guessOne: {
                answer: "Snow White",
                isCorrect: false
            },
            guessTwo: {
                answer: "Mulan",
                isCorrect: true
            },
            guessThree: {
                answer: "Jasmin",
                isCorrect: false
            }

        }
    },
    {
        question: "In Toy Story, what game does Slinky play?",
        imageSrc: 'assets/images/slinky.png',
        guesses: {
            guessOne: {
                answer: "Connect Four",
                isCorrect: false
            },
            guessTwo: {
                answer: "Checkers",
                isCorrect: true
            },
            guessThree: {
                answer: "Chess",
                isCorrect: false
            }

        }
    }
];

// Tracking correct and incorrect guesses
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Timer Function

// 31 seconds since delay to screen
var timer = 31;
var timerDiv = $('.timer-div');

// Use setIntverval to countdown every 1000ms/1sec

setInterval(function () {
    loadQuestionOne();
    if (timer <= 0) {
        console.log('Out of time');
        $('.start-game').css('display', 'none')
        $('.scores p').css('display', 'block')
    } else {
        timer--
        // set the text for the timer div
        timerDiv.text(timer)

    }
}, 1000);











































// Check Guesses Functions

var guessOne = $('.guess-1');
var guessTwo = $('.guess-2');
var guessThree = $('.guess-3');

guessOne.click(function () {
    console.log("Guess One Clicked")

    // Correct

    $('.question img').attr('src', triviaQuestions[0].imageSrc)




});
guessTwo.click(function () {
    console.log("Guess Two Clicked")
});
guessThree.click(function () {
    console.log("Guess Three Clicked")
});

// Load Question Functions

function loadQuestionOne() {

}

function loadQuestionTwo() {
    $('.question h2').html(triviaQuestions[1].question);
    $('.question-1').addClass('is-active');

    // Attach the image src attribute for the First Question
    $('.question img').attr('src', triviaQuestions[1].imageSrc);

    // display guesses 1-3 for the Second Question

    $('.guess-1').html(triviaQuestions[1].guesses.guessOne.answer)
    $('.guess-2').html(triviaQuestions[1].guesses.guessTwo.answer)
    $('.guess-3').html(triviaQuestions[1].guesses.guessThree.answer)
}
function loadQuestionThree() {
    $('.question h2').html(triviaQuestions[2].question);
    $('.question-1').addClass('is-active');

    // Attach the image src attribute for the First Question
    $('.question img').attr('src', triviaQuestions[2].imageSrc);

    // display guesses 1-3 for the Third Question

    $('.guess-1').html(triviaQuestions[2].guesses.guessOne.answer)
    $('.guess-2').html(triviaQuestions[2].guesses.guessTwo.answer)
    $('.guess-3').html(triviaQuestions[2].guesses.guessThree.answer)
}
function loadQuestionFour() {
    $('.question h2').html(triviaQuestions[3].question);
    $('.question-1').addClass('is-active');

    // Attach the image src attribute for the First Question
    $('.question img').attr('src', triviaQuestions[3].imageSrc);

    // display guesses 1-3 for the Fourth Question

    $('.guess-1').html(triviaQuestions[3].guesses.guessOne.answer)
    $('.guess-2').html(triviaQuestions[3].guesses.guessTwo.answer)
    $('.guess-3').html(triviaQuestions[3].guesses.guessThree.answer)
}
function loadQuestionFive() {
    $('.question h2').html(triviaQuestions[4].question);
    $('.question-1').addClass('is-active');

    // Attach the image src attribute for the First Question
    $('.question img').attr('src', triviaQuestions[4].imageSrc);

    // display guesses 1-3 for the Fifth Question

    $('.guess-1').html(triviaQuestions[4].guesses.guessOne.answer)
    $('.guess-2').html(triviaQuestions[4].guesses.guessTwo.answer)
    $('.guess-3').html(triviaQuestions[4].guesses.guessThree.answer)
}
function loadQuestionSix() {
    $('.question h2').html(triviaQuestions[5].question);
    $('.question-1').addClass('is-active');

    // Attach the image src attribute for the First Question
    $('.question img').attr('src', triviaQuestions[5].imageSrc);

    // display guesses 1-3 for the Sixth Question

    $('.guess-1').html(triviaQuestions[5].guesses.guessOne.answer)
    $('.guess-2').html(triviaQuestions[5].guesses.guessTwo.answer)
    $('.guess-3').html(triviaQuestions[5].guesses.guessThree.answer)
}