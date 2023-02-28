let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");



let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guess = 0;
let guessed_num = [];
//let my_points = no_of_guess * 10; 


function play(){
    let user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Opps! Number is out of range!");
    }
    else{
        guessed_num.push(user_guess);
        no_of_guess+=1;

        if(user_guess < answer){
            msg1.textContent = "Sorry! Your guess is smaller than the actual!";
            msg2.textContent = "No. of guess: " + no_of_guess;
            msg3.textContent = "Guessed numbers are: "+ guessed_num;
             
        }
        else if(user_guess > answer){
            msg1.textContent = "Sorry! Your guess is larger than the actual!";
            msg2.textContent = "No. of guess: " + no_of_guess;
            msg3.textContent = "Guessed numbers are: "+ guessed_num;
             
        }
        else if(user_guess == answer){
            msg1.textContent = "Congratulations!";
            msg2.textContent = "No. of guess: " + no_of_guess;
            msg3.textContent = "The number was : "+ answer;
            

        }
    }
    
}

 
    