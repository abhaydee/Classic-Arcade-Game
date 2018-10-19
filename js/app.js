// Enemies our player must avoid

var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x += 1; this.speed;
    //point1=this.x;
    this.x += this.speed * dt;
    var level = 0;
    level++;
    if (level === 1) {
        if (this.x > 400) {
            this.x = -100;
            this.speed = 50 + Math.floor(Math.random() * 350);
            // console.log("the speed is set");
        }
    }
    else if (level === 2) {
        if (this.x > 400) {
            this.x = -100;
            this.speed = 50 + Math.floor(Math.random() * 400);
            // console.log("the speed is set");
        }
    }
    else if (level === 3) {
        if (this.x > 400) {
            this.x = -100;
            this.speed = 50 + Math.floor(Math.random() * 450);
            // console.log("the speed is set");
        }

    }


    let temp = player.x - this.x;
    console.log(player.y);

    console.log(this.y);
    if ((player.x < this.x + 60) && (player.x + 38 > this.x) && (player.y === (this.y))) {
        player.x = 200;
        player.y = 380;
    }





    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var Player = function (x, y) {
    this.x = x;
    this.y = y;
    point2 = this.y;
    this.playerimage = 'images/char-boy.png';

}
Player.prototype.update = function (keypress) {

    if (this.x > 400) {
        this.x = 400;
    }
    else if (this.x < 0) {
        this.x = 0;
    }
    else if (this.y > 380) {
        this.y = 380;
    }
    else if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
    //else if(this.x )
    //
    //if(point1===point2){
    // console.log("they are matched !Good work now,reset the game");
    //   this.x=200;
    //  this.y=380;

    //}


}

Player.prototype.handleInput = function (keypress) {
    if (keypress === "left") {
        this.x = this.x - 100;
        //console.log(this.y);
    }
    else if (keypress === "right") {
        this.x = this.x + 100;
        //console.log(this.y);
    }
    else if (keypress === "up") {
        this.y = this.y - 80;
        // console.log(this.y);
    }
    else if (keypress === "down") {
        this.y = this.y + 80;
        //console.log(this.y);
    }
    else {
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

enemyspeed.forEach(function (e) {

    enemy = new Enemy(0, 420 - e, 100);

    allEnemies.push(enemy);
})