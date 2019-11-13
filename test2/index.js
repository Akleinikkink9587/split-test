
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Midterm Survey",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "Q1",
                title: "How do you show a message box that displays 'HelloWorld' in a browser?",
                choicesOrder: "random",
                choices: [
                    "var variable = true", "bool variable = true", "bool variable = !true", "var variable = !true"
                ],
                correctAnswer: "alert('HelloWorld')"
            }, 
            {
                type: "radiogroup",
                name: "Q2",
                title: "How do you declare a variable that is type Boolean with a value of false and name of variable?",
                choicesOrder: "random",
                choices: [
                    "var variable = true", "bool variable = true", "bool variable = !true", "var variable = !true"
                ],
                correctAnswer: "var variable = !true"
            }, 
            {
                type: "radiogroup",
                name: "Q3",
                title: "How do you log the message 'HelloWorld' to the console?",
                choicesOrder: "random",
                choices: [
                    "console.log(HelloWorld)", "Console.log('HelloWorld')", "Console.log(HelloWorld)", "console.log('HelloWorld')"
                ],
                correctAnswer: "console.log('HelloWorld')"
            }, 
            {
                type: "radiogroup",
                name: "Q4",
                title: "Which option is not a JavaScript data type? ",
                choicesOrder: "random",
                choices: [
                    "Number", "String", "Object", "Integer"
                ],
                correctAnswer: "Integer"
            }, 
            {
                type: "radiogroup",
                name: "Q5",
                title: "What would be the result of (9 + 1 + '1')?",
                choicesOrder: "random",
                choices: [
                    "10", "11", "10 1", "101"
                ],
                correctAnswer: "101"
            }, 
            {
                type: "radiogroup",
                name: "Q6",
                title: "Which option is not a Pop up box type?",
                choicesOrder: "random",                    
                choices: [
                    "alert", "confirm", "prompt", "message"
                ],
                correctAnswer: "message"
            }, 
            {
                type: "radiogroup",
                name: "Q7",
                title: "How do you access the 5th element in array arrayOfElements?",
                choicesOrder: "random",
                choices: [
                    "arrayOfElements[5]", "arrayOfElements(5)", "arrayOfElements(4)", "arrayOfElements[4]"
                ],
                correctAnswer: "arrayOfElements[4]"
            }, 
            {
                type: "radiogroup",
                name: "Q8",
                title: "Which option is not an HTML input type?",
                choicesOrder: "random",
                choices: [
                    "button", "number", "text", "string"
                ],
                correctAnswer: "string"
            }, 
            {
                type: "radiogroup",
                name: "Q9",
                title: "In CSS how would you select the class 'class1'?",
                choicesOrder: "random",
                choices: [
                    ".class class1", "#calss class1", "#class1", ".class1"
                ],
                correctAnswer: ".class1"
            }, 
            {
                type: "radiogroup",
                name: "Q10",
                title: "In HTML how would you include a link to https://www.google.ca/ that has the text Google.ca?",
                choicesOrder: "random",
                choices: [
                    "<a>Google.ca</a>", "<link>Google.ca</link>", "<link href='https://www.google.ca/'>Google.ca</link>", "<a href='https://www.google.ca/'>Google.ca</a>"
                ],
                correctAnswer: "<a href='https://www.google.ca/'>Google.ca</a>"
            }, 
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "/test2/thanks.html";
    });

$("#surveyElement").Survey({ model: survey });