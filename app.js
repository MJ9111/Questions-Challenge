let quiz = {
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper
  hScoreboard: null, // HTML scoreboard
  backgroundSound: null, // background sound
  correctSound: null, // correct sound effect
  wrongSound: null, // wrong sound effect

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: () => {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) SCOREBOARD SECTION
    quiz.hScoreboard = document.createElement("div");
    quiz.hScoreboard.id = "quizScoreboard";
    quiz.hWrap.appendChild(quiz.hScoreboard);

    // (B3) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B4) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B5) RESTART BUTTON
    let restartBtn = document.createElement("button");
    restartBtn.id = "restartBtn";
    restartBtn.innerHTML = "RESTART";
    quiz.hWrap.appendChild(restartBtn);
    restartBtn.addEventListener("click", quiz.reset);

    // (B6) GO!
    quiz.updateScoreboard();
    quiz.draw();

    // (B7) BACKGROUND SOUND
    quiz.backgroundSound = new Audio("background.mp3");
    quiz.backgroundSound.loop = true;
    quiz.backgroundSound.play();

    // (B8) SOUND EFFECTS
    quiz.correctSound = new Audio("correct.mp3");
    quiz.wrongSound = new Audio("wrong.mp3");
  },

  // (C) DRAW QUESTION
  draw: () => {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", () => quiz.select(label));
      quiz.hAns.appendChild(label);
    }
    quiz.updateScoreboard();
  },

 // (D) OPTION SELECTED
select: (option) => {
  // (D1) DETACH ALL ONCLICK
  let all = quiz.hAns.getElementsByTagName("label");
  for (let label of all) {
    label.removeEventListener("click", quiz.select);
  }

  // (D2) CHECK IF CORRECT
  let correct = option.dataset.idx == quiz.data[quiz.now].a;
  if (correct) {
    quiz.score++;
    option.classList.add("correct");
    quiz.correctSound.play();
    // visual effect: flash green and show smile face
    option.style.backgroundColor = "green";
    let smileFace = document.createElement('span')
    smileFace.innerHTML = "😊";
    option.appendChild(smileFace);
    setTimeout(() => {
      option.style.backgroundColor = "";
      smileFace.remove();
    }, 500);
  } else {
    option.classList.add("wrong");
    quiz.wrongSound.play();
    // visual effect: flash red show angry face
    option.style.backgroundColor = "red";
    let angryFace = document.createElement('span');
    angryFace.innerHTML = "😠";
    option.appendChild(angryFace);
    setTimeout(() => {
      option.style.backgroundColor = "";
      angryFace.remove();
    }, 500);
  }

  // (D3) NEXT QUESTION OR END GAME
  quiz.now++;
  setTimeout(() => {
    if (quiz.now < quiz.data.length) {
      quiz.draw();
    } else {
      if (quiz.score >= 5) {
        // big funny visual effect
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly! 🎉`;
        let confetti = document.createElement('div');
        confetti.innerHTML = "🎉🎊";
        confetti.style.fontSize = "400px";
        confetti.style.color = "green";
        quiz.hQn.appendChild(confetti);
      } else {
        // big sad visual effect
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly... 😔`;
        let sadFace = document.createElement('span');
        sadFace.innerHTML = "😔";
        sadFace.style.fontSize = "600px";
        sadFace.style.color = "red";
        quiz.hQn.appendChild(sadFace);
      }
      quiz.hAns.innerHTML = "";
      quiz.updateScoreboard();
    }
  }, 1000);
},

  // (E) RESTART QUIZ
  reset: () => {
    quiz.now = 0;
    quiz.score = 0;
    quiz.updateScoreboard();
    quiz.draw();
    // stop background sound
    quiz.backgroundSound.pause();
    quiz.backgroundSound.currentTime = 0;
    quiz.backgroundSound.play();
  },

  // (F) UPDATE SCOREBOARD
  updateScoreboard: () => {
    quiz.hScoreboard.innerHTML = `Question: ${quiz.now + 1} | Score: ${quiz.score} | Total: ${quiz.data.length}`;
  },

 
  data: [
    {
      q : "Used to store collection of data Object Create an array having values 4, 3, 5, 6?",
      o : [
        "let arr =[4,3,5,6];",
        "let arr =$[4,3,5,6];",
        "let arr =$$[4,3,5,6];",
        "let arr =(4,3,5,6);"
      ],
      a : 0 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "It represents a non-existent or a invalid value?",
      o : [
        "invalid value",
        "object",
        "error",
        "null"
      ],
      a : 3
    },
    {
      q : "the length of the array?",
      o : [
        "(  )",
        "array",
        "===",
        "length"
      ],
      a : 3
    },
    {
      q : "when a variable is declared but not assigned it has the value of undefined?",
      o : [
        "error",
        "null",
        "undefined",
        "non of the answers"
      ],
      a : 2
    },
    {
      q : "let courses = [\"HTML\", \"CSS\", \"Javascript\", \"React\"];(console.log)?",
      o : [
        "node",
        "console.log",
        "open with a browser",
        "non of the answer"
      ],
      a : 1
    },
    {
      q : "let str1 = \"Hello\";let str2 = \"world\";let str3 =str1+str2;(console.log)?",
      o : [
        "str1+str2",
        "eroor",
        "str3$",
        "str1$$+str2$$"
      ],
      a : 0 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "return sum the function{function myfunc(a,b)};?",
      o : [
        "return$(a,b)}",
       "return (a+b)",
        "return a+b",
        "return a,b"
      ],
      a : 1 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "Create a for loop that prints number 1 to 10?",
      o : [
        "for(let i= 1; i<=10; i++)",
        "for(const i= 1; i<=10; i++)",
        "for(let i= 1; i<=10;)",
        "for(let i= 1; i<10; i++)"
      ],
      a : 0 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "The toReversed() method of Array instances is the?",
      o : [
        "copying",
        " instances tests",
        " removes the first element",
        " shallow copy"
      ],
      a : 0 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "add 4 in the array let arr= [\"you\", \"are\", \"coder\"]?",
      o : [
        "arr.unshift(4)",
        "arr.push(4)",
        "arr.splice(0, 0, 4)",
        "arr.pop(4)"
      ],
      a : 0 // arrays start with 0, so answer is 70 meters
    },
  
  
  
  
  ],
};

window.addEventListener("load", quiz.init);
