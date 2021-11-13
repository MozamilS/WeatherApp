var gameChoices = [];
var userChoices = [];

function colorNumber (number) { 
    switch (number) {
        case 1: 
            return "blue";
        case 2: 
            return "green";
        case 3: 
            return "red";
        case 4: 
            return "yellow";
        default:
            console.log("invalid input");

    }

}

function divClick( div ){
    switch (div) {
        case "blue": 
            var audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "green":
            var audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        default:
            console.log("invalid input");
    }
    $("#" + div).addClass("pressed");
    setTimeout(function () {
        $("#" + div).removeClass("pressed");
    }, 200);
    setTimeout(function () {}, 250);
}

$(document).keypress(function () { 
    if (gameChoices.length == 0 ){
        gameChoices = [colorNumber(Math.floor(Math.random() * 4 + 1))];
        divClick(gameChoices[0]);
        $("#level-title").text("Level " + gameChoices.length);
        $('.container .btn').click(function () { 
            
    
            divClick(this.id);
            if (gameChoices.length != userChoices.length){
                userChoices.push(this.id);
                if (userChoices.length == gameChoices.length){
                    if (userChoices[userChoices.length -1] != gameChoices[userChoices.length - 1]){
                        $('body').addClass("game-over");
                        $('#level-title').text("Game Over!");
                        var audio = new Audio("sounds/wrong.mp3");
                        audio.play();
                        userChoices = [];
                        gameChoices = [];
                        $('.container .btn').off();
        
                        setTimeout(function(){
                            $('#level-title').text("Press A Key to Start");
    
                            $('body').removeClass("game-over");
                        }, 1000);
        
                    } else {
                        gameChoices.push(colorNumber(Math.floor(Math.random() * 4 + 1)));
                        $("#level-title").text("Level " + gameChoices.length);
                        userChoices = [];
    
                        var offset = 750;
    
            
                        for (let i =0; i < gameChoices.length; i++){
                            setTimeout(function(){
                                divClick(gameChoices[i]);
                            }, offset);
                        
                            offset += 750;
                            
                        }
                    }   
                }
                else if (userChoices[userChoices.length -1] != gameChoices[userChoices.length - 1]){
                    $('body').addClass("game-over");
                    $('#level-title').text("Game Over!")
                    var audio = new Audio("sounds/wrong.mp3");
                    userChoices = [];
                    gameChoices = [];
                    $('.container .btn').off();
    
                    audio.play();
                    setTimeout(function(){
                        $('#level-title').text("Press A Key to Start");
    
                        $('body').removeClass("game-over");
                    }, 1000);
                }
            }
        });        
    }
    else {
        var offset = 750;
        for (let i =0; i < gameChoices.length; i++){
            setTimeout(function(){
                divClick(gameChoices[i]);
            }, offset);
        
            offset += 750;
            
        }    
    }

})



