init();

function init(){
    first_selected = null;
    cards = document.querySelectorAll("div.card");
    addNums(cards);

    for(let i = 0; i < cards.length; i++){
        cards[i].addEventListener("click", () => {
            card_selected(cards[i].innerHTML);
        })
    }
}


function addNums(cards){

    var usedCount = [];

    for(var i = 0; i < cards.length; i++){
        usedCount[i] = 0;
    }

    for(var i = 0; i < cards.length; i++){
        var num = Math.floor(Math.random() * 8) + 1;

        while(usedCount[num - 1] == 2){
            num = Math.floor(Math.random() * 8) + 1;
        }
        usedCount[num - 1]++;
        // cards[i].innerHTML = num;
        if(num == 1){
            myimg = document.createElement("img");
            myimg.setAttribute("src", "1.png");
            myimg.setAttribute("style", "height:140px;width:100px;")
            cards[i].appendChild(myimg);
        }
    }

}


function card_selected(num){
    if(first_selected == null){
        //This is the first one selected
        first_selected = num;
    }else{
        //There is one already selected
        if(first_selected == num){
            console.log("Suii");
            for(var i = 0; i < cards.length; i++){
                if(cards[i].innerHTML == num){
                    cards[i].remove();
                }
            }

        }else{
            console.log("Wrong");
        }
        first_selected = null;
    }
}