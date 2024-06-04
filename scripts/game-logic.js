current_flips = 0;
done = 0;
init();

function init(){

    difficulty = sessionStorage.getItem("difficulty");
    FLIPS = 0
    if(difficulty == 1){
        FLIPS = 9999999
    }else if(difficulty == 2){
        FLIPS = 40;
    }else if(difficulty == 3){
        FLIPS = 20;
    }else{
        FLIPS = 16;
    }

    cards = document.querySelectorAll("div.card");
    front_cards = document.querySelectorAll("div.front");
    back_cards = document.querySelectorAll("div.back");
    num_of_clicks = document.getElementById("num_of_clicks");
    first_card = null;
    
    flip_card_sound = document.querySelector("#flip_card_sound");
    right_answer_sound = document.querySelector("#right_answer");
    win_sound = document.querySelector("#win");
    wrong_answer_sound = document.querySelector("#wrong_answer");

    addNums(front_cards);

    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", () => {
            card_selected(cards[i]);
        })
    }
    game = document.querySelector(".game");
}


// Synchronous Timer Implementation
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function synchronousTimer(duration, interval) {
    const steps = duration / interval;
    for (let i = 0; i < steps; i++) {
      console.log(`Step ${i + 1}`);
      await sleep(interval);
    }
    console.log('Timer completed');
  }



function addNums(front_cards){

    usedCount = [];

    for(var i = 0; i < front_cards.length; i++){
        usedCount[i] = 0;
    }

    for(i = 0; i < front_cards.length; i++){
        num = Math.floor(Math.random() * 8) + 1;
        while(usedCount[num - 1] == 2){
            num = Math.floor(Math.random() * 8) + 1;
        }
        usedCount[num - 1]++;
        myimg = document.createElement("img");
        myimg.setAttribute("src", `assets/cards/${num}.png`);
        myimg.setAttribute("alt", `${num}`);
        front_cards[i].appendChild(myimg);

        
    }

}

function reset_game(){
    location.reload();
}

function home(){
    window.location = "./index.html";
}

function win_game(){
    win_sound.play();
    game.classList.toggle("toggle-click");
}

function game_lost(){
    window.alert("You Lost! Press Reset to try again");
    game.classList.toggle("toggle-click");
}

function card_selected(card){
    current_flips++;
    num_of_clicks.innerHTML = current_flips;
    flip_card_sound.play();
    card.classList.toggle("is-flipped");
    if(first_card == null){
        first_card = card;

        if(current_flips == FLIPS){
            game_lost();
        }

    }else if(first_card === card){
        first_card = null;
    }else{
        
        game.classList.toggle("toggle-click");
        front = first_card.querySelector(".front");
        front_img = front.querySelector("img");
        first_num = front_img.getAttribute("alt");
        
        front = card.querySelector(".front");
        front_img = front.querySelector("img");
        second_num = front_img.getAttribute("alt");

        console.log(first_num);
        console.log(second_num);
        setTimeout(()=>{
            if(first_num == second_num){
                right_answer_sound.play();
                first_card.style = "opacity: 0; pointer-events: none;";
                card.style = "opacity: 0; pointer-events: none;";
                done++
            }else{
                wrong_answer_sound.play();
                first_card.classList.toggle("is-flipped");
                card.classList.toggle("is-flipped");
                if(current_flips == FLIPS){
                    game_lost();
                }
            }
            first_card = null;
            game.classList.toggle("toggle-click");
            synchronousTimer(100, 100);
            if(done == 8){
                win_game();
            }

        }, 1000);

        
    }
    
}
