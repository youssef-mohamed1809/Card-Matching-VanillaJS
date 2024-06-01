init();

function init(){
    cards = document.querySelectorAll("div.card");
    front_cards = document.querySelectorAll("div.front");
    back_cards = document.querySelectorAll("div.back");
    first_selected = null;
    
    addNums(front_cards);

    for(let i = 0; i < cards.length; i++){

        cards[i].addEventListener("click", () => {
            card_selected(cards[i]);
        })
    }
}


function addNums(front_cards){

    var usedCount = [];

    for(var i = 0; i < front_cards.length; i++){
        usedCount[i] = 0;
    }

    for(var i = 0; i < front_cards.length; i++){
        var num = Math.floor(Math.random() * 8) + 1;
        while(usedCount[num - 1] == 2){
            num = Math.floor(Math.random() * 8) + 1;
        }
        usedCount[num - 1]++;
        myimg = document.createElement("img");
        myimg.setAttribute("src", `cards/${num}.png`);
        myimg.setAttribute("alt", `${num}`);
        front_cards[i].setAttribute("style", "display: none;")
        front_cards[i].appendChild(myimg);
    }

}


function card_selected(card){
    var my_num = card.children;
    for(var i = 0; i < my_num.length; i++){
        if(my_num.className == "back"){
           card.classList.toggle('flip');
        }
    }
    // if(first_selected == null){
    //     //This is the first one selected
    //     first_selected = num;
    // }else{
    //     //There is one already selected
    //     if(first_selected == num){
    //         console.log("Suii");
    //         for(var i = 0; i < cards.length; i++){
    //             if(cards[i].innerHTML == num){
    //                 cards[i].remove();
    //             }
    //         }

    //     }else{
    //         console.log("Wrong");
    //     }
    //     first_selected = null;
    // }
}