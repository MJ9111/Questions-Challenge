# Quiz Application

**Date:** 10/7/2024

**By:** [mahmood essa althawadi]

[Website](#) | [GitHub](#) | [LinkedIn](#) | [Vettery](#)

## Description

This project is a JavaScript-based quiz application designed to test users' knowledge on various topics. The quiz features multiple-choice questions, sound effects, and visual feedback for correct and incorrect answers. It was created as a fun and interactive way to learn and test your knowledge.

The HTML file sets up the basic structure of the quiz page.



The main structure of the quiz application is an object named quiz. This object contains various properties and methods to manage the quiz.

Properties
HTML Elements:

hWrap: The main container for the quiz.

hQn: The container for the current question.

hAns: The container for the answer options.

hScoreboard: The container for the scoreboard.

backgroundSound, correctSound, wrongSound: Audio elements for background music and sound effects.


Initialization (init):

This method sets up the HTML structure of the quiz and starts the background music.
It creates and appends HTML elements for the quiz container, scoreboard, questions, answers, and restart button.
It initializes the background sound and sound effects for correct and wrong answers.
It updates the scoreboard and displays the first question.

Draw Question (draw):
This method displays the current question and its answer options.


Select Option (select):
This method handles the user's selection of an answer.

Reset Quiz (reset):
This method resets the quiz to the initial state and restarts the background music.


Update Scoreboard (updateScoreboard):
This method updates the scoreboard with the current question number, score, and total number of questions.


Data (data):
This property contains an array of question objects. Each object has a question (q), an array of options (o), and the index of the correct answer (a).


Event Listener
Finally, the window.addEventListener("load", quiz.init); statement ensures that the quiz.init method is called when the page is fully loaded, initializing the quiz.

## Technologies Used

- **HTML**: Structure of the quiz application.
- **CSS**: Styling the quiz interface.
  - Flexbox for layout
  - Grid for answer options
- **JavaScript**: Core functionality of the quiz.
  - Event listeners for user interactions
  - Audio for sound effects

## Getting Started

To start using the quiz application, simply open the `index.html` file in a web browser. The quiz will automatically start, playing background music and presenting questions for the user to answer. After completing the quiz, users can restart it by clicking the "RESTART" button.

A Trello board was used to keep track of development progress and can be viewed [here](#).

The project itself was deployed and can be viewed [here](#).

## Screenshots

**Quiz Interface**

![Quiz Interface](./pic/لقطة%20شاشة%202024-07-10%20144255.png)

**Correct Answer**

![Correct Answer](./pic/لقطة%20شاشة%202024-07-10%20142529.png)

**Incorrect Answer**

![Incorrect Answer](./pic/لقطة%20شاشة%202024-07-10%20142504.png)

## Future Updates

- **Add More Questions:** Enhance the quiz with additional questions to cover more topics.
- **Timer:** Implement a timer for each question to increase difficulty.
- **Leaderboard:** Add a leaderboard to track high scores.
- **Initial Deployment:** Deploy the quiz application online.

## Credits

- **Sound Effects:** [FreeSound](https://freesound.org)
- **Images:** [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com)
- **Markdown Guide:** [ia.net](https://ia.net)
- **Markdown Cheatsheet:** [GitHub](https://github.com)
