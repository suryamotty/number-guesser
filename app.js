/* 
    Game Functions:
    1. players must guess a number between a min and a max
    2.player gets a certain amount of guesses
    3.notify the remaining guesses for player
    4.notify the correct answer to the player if loose
    5.let player choose to play again  */

    //game values

    let min=1,
        max=10,
        guessesLeft=3,
        winNum=getRandomNum(min,max);

    //UI elements

    const game= document.querySelector('#game'),
          minNum= document.querySelector('.min-num'),
          maxNum= document.querySelector('.max-num'),
          inputNum= document.querySelector('#guess-input'),
          submitBtn= document.querySelector('#guess-btn'),
          message= document.querySelector('.message');

    //assign UI min and max

    minNum.textContent= min;
    maxNum.textContent= max;

    //play-again event listener
    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again'){
            window.location.reload();
        }
    });



    //add event listener for the submit button

    submitBtn.addEventListener('click', function(){
       let guess=parseInt(inputNum.value);


       //validate our input

       if(isNaN(guess) || guess < min || guess > max ) {
        setMessage(`Please enter a number between ${min} and ${max}`,'red');

       }
       //check if won
       if(guess === winNum){
        //then disable input field
        //game-over-won
           // inputNum.disabled = true;
            //change the border color
            //inputNum.style.borderColor ='green';
            //set message
            //setMessage(`${winNum} is CORRECT! YOU WIN`,'green');
        gameOver(true,`${winNum} is CORRECT! YOU WIN` )

       }else{
            //wrong number
            guessesLeft -=1;
            if(guessesLeft === 0){
                //game over-lost
                //inputNum.disabled = true;
            //change the border color
            //inputNum.style.borderColor ='red';
            //set message
            //setMessage(`Game Over! Correct number is ${winNum}`,'red');
            gameOver(false, `Game Over! Correct number was ${winNum}` )

            }
            else{
                //game continues -answer wrong
                 //change the border color
            inputNum.style.borderColor ='red';
                // tell user its the wrong number and howmany guesses left
            setMessage(`${guess} is not correct! ${guessesLeft} guesses left`,'red');
            //clear the input field
            inputNum.value = '';

            }
       }
    });

    function gameOver(won, msg){
        let color;
        won === true ? color ='green' : color ='red';
        //disable input field
        inputNum.disabled = true;
        //change the border color
        inputNum.style.borderColor =color;
        //set text color
        message.style.color = color;
        //set message
        setMessage(msg);
        //play again
        submitBtn.value ='Play Again';
        submitBtn.className += 'play-again';

    }

        //get winning number
        function getRandomNum(min,max){
           return Math.floor(Math.random()*(max-min+1)+min); 
        }

        //set message
    function setMessage(msg,color){
        message.style.color = color;
        message.textContent = msg;
    }
