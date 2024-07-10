i do 


1.Your choice of game. //
user //
Pseudocode //
serching for question //

2. Create a GitHub repo//


3. Build the project
game story:
game have question in java script and the user have a choise between to choises in level one and when the user go forwed the choises will change to 4 choises 

function of the game :
the question will apeer after choesing the question will change and another question will apeer

4. Deploy the work you have so far


5. Present your project


code explane


Quiz Structure
HTML Elements:

hWrap: The main container for the quiz.
hQn: The container for displaying questions.
hAns: The container for displaying answer options.
hScoreboard: The container for displaying the score and question number.
backgroundSound, correctSound, wrongSound: Audio elements for background music and sound effects.
Game Flags:

now: The current question index.
score: The current score.
Initialization (init method)
Wrapper Setup:

Gets the main quiz container by its ID (quizWrap).
Scoreboard Setup:

Creates a new div element for the scoreboard and appends it to the main container.
Questions Setup:

Creates a new div element for questions and appends it to the main container.
Answers Setup:

Creates a new div element for answers and appends it to the main container.
Restart Button:

Creates a restart button, sets its ID and text, appends it to the main container, and adds an event listener to reset the quiz when clicked.
Start the Quiz:

Calls updateScoreboard to initialize the scoreboard.
Calls draw to display the first question.
Audio Setup:

Initializes and plays background music.
Loads sound effects for correct and wrong answers.
Drawing Questions (draw method)
Display Question:

Sets the inner HTML of the question container to the current question.
Display Options:

Clears the previous options.
Creates radio buttons and labels for each answer option, setting their IDs, text, and data attributes.
Adds event listeners to each label to handle answer selection.
Update Scoreboard:

Calls updateScoreboard to update the score and question number.
Selecting an Option (select method)
Detach OnClick Events:

Removes click event listeners from all labels to prevent multiple selections.
Check Answer:

Checks if the selected answer is correct by comparing the data index of the selected option to the correct answer index.
If correct, increments the score, plays the correct sound, and applies visual effects (green background and smiley face).
If wrong, plays the wrong sound and applies visual effects (red background and angry face).
Next Question or End Game:

Increments the question index.
If there are more questions, calls draw to display the next question.
If there are no more questions, displays the final score with appropriate visual effects (confetti for high scores, sad face for low scores).
Restarting the Quiz (reset method)
Reset Game Flags:

Resets the current question index and score.
Update Scoreboard:

Calls updateScoreboard to reset the scoreboard.
Draw First Question:

Calls draw to display the first question.
Stop Background Music:

Pauses and resets the background music.
Updating the Scoreboard (updateScoreboard method)
Update Score and Question Number:
Sets the inner HTML of the scoreboard to display the current question number, score, and total number of questions.
Quiz Data (data array)
Contains an array of question objects.
Each object has:
q: The question text.
o: An array of answer options.
a: The index of the correct answer.
Event Listener
Adds an event listener to the window object to initialize the quiz when the page loads