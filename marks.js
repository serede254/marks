const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {
    rl.question("Please enter the score: ", function(score) {
        score = parseFloat(score);

        // Check if the input is a number
        if (isNaN(score) || score < 0 || score > 100) {
            // If not valid, prompt again
            console.log("Invalid input. Please enter a number between 0 and 100.");
            getInput(); 
        } else {
            // Determine the grade based on the score
            let grade;
            if (score > 79 && score <= 100) {
                grade = 'A';
            } else if (score >= 60 && score < 79) {
                grade = 'B';
            } else if (score >= 49 && score < 60) {
                grade = 'C';
            } else if (score >= 40 && score < 49) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            console.log("Grade:", grade);
            rl.close(); // Close readline interface when done
        }
    });
}
getInput();