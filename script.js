init();

function init(){
    cards = document.querySelectorAll("div.card");
    front_cards = document.querySelectorAll("div.front");
    back_cards = document.querySelectorAll("div.back");
    first_card = null;
    
    addNums(front_cards);

    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", () => {
            card_selected(cards[i]);
        })
    }
    game = document.querySelector(".game");
}


// Synchronous Timer Implementation
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   async function synchronousTimer(duration, interval) {
//     const steps = duration / interval;
//     for (let i = 0; i < steps; i++) {
//       console.log(`Step ${i + 1}`);
//       await sleep(interval);
//     }
//     console.log('Timer completed');
//   }



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


function card_selected(card){
    card.classList.toggle("is-flipped");
    if(first_card == null){
        first_card = card;
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
                first_card.remove();
                card.remove();
            }else{
                first_card.classList.toggle("is-flipped");
                card.classList.toggle("is-flipped");
            }
            first_card = null;
            game.classList.toggle("toggle-click");
        }, 1000);

        
    }
    
}
