

// Create an array

var triviaQuestions = [
    {
        question: "In Aladdin, what is the name of Jasmine’s pet tiger?",
        answers: {
            optionOne: {
                answer: 'Rajah',
                isCorrect: true
            },
            optionTwo: {
                answer: 'Jafar',
                isCorrect: false
            },
            optionThree: {
                answer: "Abu",
                isCorrect: false
            }
        }
    },
    {
        question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",
        answers: {
            optionOne: {
                answer: 'His right',
                isCorrect: false
            },
            optionTwo: {
                answer: 'His left',
                isCorrect: false
            },
            optionThree: {
                answer: 'Both hands',
                isCorrect: false
            }
        }
    },
    {
        question: "In the Lion King, where does Mufasa and his family live?",
        answers: {
            optionOne: {
                answer: "Antarctica",
                isCorrect: false
            },
            optionTwo: {
                answer: "Elephant Graveyard",
                isCorrect: false
            },
            optionThree: {
                answer: "Pride Rock",
                isCorrect: false
            }
        }
    }
];



// $('#start').on('click', startGame)



$(document).ready(function () {


    // question-1 click handler

    var questionOne = $('.question-1');

    questionOne.click(function () {
        console.log('click on the first question');
        $('.question h2').html(triviaQuestions[0].question);
        $('.question-1').addClass('is-active');

        // display answers

        $('.option-1').html(triviaQuestions[0].answers.optionOne.answer)
        $('.option-2').html(triviaQuestions[0].answers.optionTwo.answer)
        $('.option-3').html(triviaQuestions[0].answers.optionThree.answer)

        // check if option-1 is correct

        $('.option-1').click(function () {
            if (triviaQuestions[0].answers.optionOne.isCorrect) {
                console.log("Correct!");
                $(this).addClass('correct');
            } else {
                console.log("Wrong!")
                $(this).addClass('wrong');
                $(this).removeClass('correct');

            }
        })

        // check if option-2 is correct

        $('.option-2').click(function () {
            if (triviaQuestions[0].answers.optionTwo.isCorrect) {
                console.log("Correct!");
                $(this).addClass('correct');
            } else {
                console.log("Wrong!")
                $(this).addClass('wrong');
                $(this).removeClass('correct');
            }
        })

        // check if option-3 is correct

        $('.option-3').click(function () {
            if (triviaQuestions[0].answers.optionThree.isCorrect) {
                console.log("Correct!");
                $(this).addClass('correct');
            } else {
                console.log("Wrong!")
                $(this).addClass('wrong');
                $(this).removeClass('correct');
            }
        })

        $('.question-2').addClass('not-active');
        $('.question-2').removeClass('is-active');
        $('.question-3').addClass('not-active');
        $('.question-3').removeClass('is-active');
    })

    // question-2 click handler

    var questionTwo = $('.question-2');

    questionTwo.click(function () {
        console.log('click on the second question');
        $('.question h2').html(triviaQuestions[1].question);
        $('.question-2').addClass('is-active');

        $('.option-1').html(triviaQuestions[1].answers.optionOne.answer)
        $('.option-2').html(triviaQuestions[1].answers.optionTwo.answer)
        $('.option-3').html(triviaQuestions[1].answers.optionThree.answer)

        $('.question-1').addClass('not-active');
        $('.question-1').removeClass('is-active');
        $('.question-3').addClass('not-active');
        $('.question-3').removeClass('is-active');
    })


    // question-3 click handler

    var questionThree = $('.question-3');

    questionThree.click(function () {
        console.log('click on the third question');
        $('.question h2').html(triviaQuestions[2].question);
        $('.question-3').addClass('is-active');

        $('.option-1').html(triviaQuestions[2].answers.optionOne.answer)
        $('.option-2').html(triviaQuestions[2].answers.optionTwo.answer)
        $('.option-3').html(triviaQuestions[2].answers.optionThree.answer)

        $('.question-2').addClass('not-active');
        $('.question-2').removeClass('is-active');
        $('.question-1').addClass('not-active');
        $('.question-1').removeClass('is-active');
    })















})

// triviaQuestions[0].question === "What year were you born?"
// triviaQuestions[0].answers.optionOne === "What year were you born?"


// triviaQuestions[1].question === "Who is the president?"
// triviaQuestions[2].question === "Do aliens exists?"