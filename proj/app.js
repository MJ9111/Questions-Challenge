const easyQuestions = [
    {
        question: "let courses = ["HTML", "CSS", "Javascript", "React"];(console.log))?",
        answers: ["node", "(console . log)", "open with a braowser", "non of the answer"],
        correct: 2
    },
    {
        question: "Used to store collection of data Object Create an array having values 4, 3, 5, 6?",
        answers: ["let arr =$$[4,3,5,6];", "let arr =$[4,3,5,6]:", "let arr =[4,3,5,6];", "let arr =(4,3,5,6);"],
        correct: 3
    },
    {
        question: "It represents a non-existent or a invalid value?",
        answers: ["invalid value", "object", "erorr", "null"],
        correct: 4
    },
    {
        question: "when a variable is declared but not assigned it has the value of undefined?",
        answers: ["eroor", "null", "undefined", "non of the answers"],
        correct: 3
    },
    {
        question: "the length of the array?",
        answers: ["(  )", "array", "===", "lenght"],
        correct: 4
    },

];

const difficultQuestions = [
    {
        question: "let str1 = "Hello";let str2 = "world";let str3 =str1$$+str2$$;(console.log)?",
        answers: ["str1+str2", "eroor", "str3$", "str1$$+str2$$"],
        correct: 1
    },
    {
        question: '"add `4` in the array let arr= ["you", "are", "coder"];'?",
        answers: ["pop", "add", "shift", "push"],
        correct: 1
    },
    {
        question: "By clicking on the button it should show the alert?",
        answers: ["<button>onClick="alert> Click it</button", "<button>onClick="alert> Click it<button", "<button>/onClick="alert> Click it</button", "<button>onClick="alert> Click it</"],
        correct: 1
    },
    {
        question: "Create a for loop that prints number 1 to 10?",
        answers: ["for(let  i= 1; i<=10; i++)", "for(const  i= 1; i<=10; i++)", "for(let  i= 1; i<=10;)", "for(let  i= 1; i<10; i++)"],
        correct: 1
    },
    {
        question: "return sum the function{function myfunc(a,b)};?",
        answers: ["return $a+b", "return (a+b)", "return a+b", "return a,b"],
        correct: 3
    },

];

function compare()
{
    let a=2;
    let b=2.0;
    if(a==b)
        return true;
    else
        return false;
}
