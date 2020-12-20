console.log("------------ RAHUL KUVLEKAR -------------");
// console.log(234343);
var chalk=require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var highscore={
                name  : "RAHUL KUVLEKAR ",
                score : 8 };
var userName = readlineSync.question("Your Name Please ? ");
console.log("\n\n");

console.log(chalk.red("Welcome " + chalk.red.bold.underline(userName) + ", Have Great Day Ahead \n\n"))


console.log(chalk.keyword("orange").bold("**** FOOTBALL QUIZ *****\n"));

//function to play quetsions
function play(question,answer)
{
    var userAns=readlineSync.question(chalk.cyan(chalk.blue.bold("Question :: ") + question));

    if(userAns.toUpperCase() === answer.toUpperCase())
    {
        console.log(chalk.green("ANSWER :: You are Right !!! "));
        score++;
    }
    else
    {
        console.log(chalk.redBright("ANSWER :: Sorry ! you are Wrong !!"));
    }

    console.log("SCORE till Now :: " + score );
    console.log("--------------------------------------");
}

//Question for Level 1
quetsionBankOne=[
    {
        question :"1) Which of the following country won Football world Cup maximum times?"+chalk.blueBright("\nA.Germany\nB.Italy\nC.Argentina\nD.Brazil\n"),
        answer:"D"
    },
    {
        question : "2) When was the first FIFA World Cup inaugurated?" + chalk.blueBright("\nA. 1930\nB. 1931\nC. 1932\nD. 1933\n"),
        answer : "A"
    },
    {
        question : "3) Which of the following country hosted the first Football World Cup?" + chalk.blueBright("\nA. America\nB. Argentina\nC. Brazil\nD. Uruguay\n"),
        answer : "D"
    },
    {
        question : "4) World of 2014 was won by which National Team?" + chalk.blueBright("\nA. Germany\nB. France\nC. Argentina\nD. Spain\n"),
        answer : "A"
    },
    {
        question : "Who won the BallonD’or of 2014?" + chalk.blueBright("\nA. Kun Aguero\nB. Lionel Messi\nC. Cristiano Ronaldo\nD. Angel Di Maria\n"),
        answer : "C"
    }
]

//question for level 2
quetsionBankTwo=[
    {
        question : "1) how many players start on the football pitch?" + chalk.blueBright("\nA. 10\nB. 11\nC. 22\nD. 15\n"),
        answer : "C"
    },
    {
        question : "2) Which of following team do not play in stripes?" + chalk.blueBright("\nA. Newcastle\nB. Southampton\nC. Tottenham Hotspur\nD. Lincoln City\n"),
        answer : "D"
    },
    {
        question : "3) When was first official international football match was played?" + chalk.blueBright("\nA. 1929\nB. 1872\nC. 1902\nD. 1870\n"),
        answer : "B"
    
    }]

// final question for level 3
quetsionBankThree={
    question : "Which Is Favourite player Of RAHUL?" + chalk.blueBright("\nA. Lionel Messi\nB. Zinedine Zidane\nC. Neymar Jr.\nD. Cristiano Ronaldo\n"),
    answer : "D"
    }

//for loop-for level 1 Quiz 
console.log(chalk.inverse("-------------------------- LEVEL 1 --------------------------\n"));
for(var i=0;i<quetsionBankOne.length;i++)
{
    play(quetsionBankOne[i].question,quetsionBankOne[i].answer);
}

console.log("As Current Level SCORE is :: " + score);
//if qualified for level 2
if(score >= 3 )
{
    var currentScore=score;
    console.log(chalk.green.bold("\nYour Are Qualified For LEVEL 2 \n\n"));
    console.log(chalk.inverse("-------------------------- LEVEL 2 --------------------------\n"));
    //for loop-for level 2 quiz 
    for(var i=0;i<quetsionBankTwo.length;i++)
    {
        play(quetsionBankTwo[i].question,quetsionBankTwo[i].answer);
    }
    
    console.log("As Current level SCORE is :: " + (score-currentScore));

    // if qualified for level 3
    if((score-currentScore) >= 2 )
    {   
        var currentScore=score;
        console.log(chalk.green.bold("\nYour Are Qualified For LEVEL 3 \n\n"));
    console.log(chalk.inverse("-------------------------- LEVEL 3 --------------------------\n"));

        play(quetsionBankThree.question,quetsionBankThree.answer);

        // Win the Quiz or Not
        if((score-currentScore)==1)
        {
            console.log(chalk.yellow.bold("CONGRALATIONS ...... " + userName + ", You Won the Quiz ...." ));
            console.log("--------------------------------------");
        }
        else
        {
        console.log(chalk.redBright("Better Luck Next Time !!!! "));
        }
    }
    else
    {
        console.log(chalk.redBright("Better Luck Next Time !!!! "));
    }
}
else
{
    console.log(chalk.redBright("Better Luck Next Time !!!! "));
}

console.log("FINAL SCORE :: " + score);

if(score > highscore.score)
{
    console.log(chalk.yellowBright.bold("\n\n=>> Congratzz " + userName +".... You Have Beaten the previous Highscorer ....." + chalk.yellow.underline("\nPlease send the ScreenShot ")));
}
else
{
    console.log("\n\n=>> Current Highscorer :: " + highscore.name + "\nScore :: " + highscore.score );
}


console.log("\n\n\n------****** THANK YOU ******------");