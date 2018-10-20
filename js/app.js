
//players array
let diffplayers = ['images/char-boy.png', 'images/char-cat-girl.png', 'images/char-horn-girl.png', 'images/char-pink-girl.png', 'images/char-princess-girl.png'];




let out = 0;
function time(secs) //to pad 0 in secs
{
    return secs > 9 ? secs : "0" + secs;
}
let sec = 0;
let second, minute = 0;
let time1 = setInterval(function () //function for time
{
    sec++;
    second = document.getElementById("seconds").innerHTML = time(sec % 60);
    minute = document.getElementById("minutes").innerHTML = time(parseInt(sec / 60)) + ":";
}, 1000);



var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here
    this.x = x;
    this.y = y;

    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};


// Parameter: dt, a time delta between ticks
//updating functionality for the enemies
Enemy.prototype.update = function (dt) {
    this.x += 1;
    this.speed;
    //point1=this.x;
    this.x += this.speed * dt;
    var level = 0;
    level++;
    if (level === 1) {
        if (this.x > 500) {
            this.x = -100;
            this.speed = 150 + Math.floor(Math.random() * 550);

        }
    } else if (level === 2) {
        if (this.x > 500) {
            this.x = -100;
            this.speed = 50 + Math.floor(Math.random() * 400);

        }
    } else if (level === 3) {
        if (this.x > 500) {
            this.x = -100;
            this.speed = 50 + Math.floor(Math.random() * 450);

        }

    }


    let temp = player.x - this.x;
    //clash between enemies and players
    if ((player.x < this.x + 60) && (player.x + 38 > this.x) && (player.y === (this.y))) {
        if (out === 1 || out === 2) {
            window.alert("its okay , give it a try again!.")
        }
        out += 1;
        console.log(out);
        if (out === 3) {
            window.alert("sorry man ,You lost 3 times, U gotta reload")
            window.location.reload(true);
        }

        player.x = 200;
        player.y = 380;
    }






};


Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//shuffling of player charectors
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    //console.log(array);
    return array;
}



let shufflediff = shuffle(diffplayers);
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    point2 = this.y;
    this.playerimage = shufflediff[0];

}
Player.prototype.update = function (keypress) {

    if (this.x > 400) {
        this.x = 400;
    } else if (this.x < 0) {
        this.x = 0;
    } else if (this.y > 380) {
        this.y = 380;

    } else if (this.y < 0) {
        this.x = 200;
        this.y = 380; console.log(this.y);
        console.log("reached the end");
        incr++;

        var myincr = document.getElementById("levels");
        myincr.innerHTML = `${incr + 1}`;
        console.log(incr);
        if (incr === 1) {
            window.alert("congrats for clearing the first round");

            this.playerimage = shufflediff[1];
        } else if (incr === 2) {
            window.alert("congrats for clearing the second round");

            this.playerimage = shufflediff[2];
        } else if (incr === 3) {
            window.alert("congrats for clearing the third round");

            this.playerimage = shufflediff[3];
        } else if (incr === 4) {
            window.alert("End of the game,Thanks for playing .");

            this.playerimage = shufflediff[4];
            reset();
            clearInterval(time1);
        }

    }



}

function reset() {
    clearInterval(time1);
    myincr = document.getElementById("levels");
    myincr.textCotent = "everything completed";

}

Player.prototype.handleInput = function (keypress) {
    if (keypress === "left") {
        this.x = this.x - 100;

    } else if (keypress === "right") {
        this.x = this.x + 100;

    } else if (keypress === "up") {
        this.y = this.y - 80;

    } else if (keypress === "down") {
        this.y = this.y + 80;

    } else {
        window.alert("invalid key pressed!. Use the arrow Keys");
    }


}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.playerimage), this.x, this.y);
};



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
var allEnemies = [];
var player = new Player(200, 380);
var enemyspeed = [200, 280, 360];
var enemy;
var point1;
var point2;
let incr = 0;

enemyspeed.forEach(function (e) {

    enemy = new Enemy(0, 420 - e, 100);

    allEnemies.push(enemy);
})
