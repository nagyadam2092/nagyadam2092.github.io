var Game = (function Game(){
	var game = new Phaser.Game(640, 509, Phaser.CANVAS, 'game');

	var PhaserGame = function (game) {
		this.adam = null;
	    this.background = null;
	    this.bug = null;
	    this.bulletTry = null;
	    this.bulletCatch = null;

	    this.player = null;
	    this.bullets = null;

		this.cursors= null;
		this.fireButton= null;

		this.bulletTime = 0;
		this.bullet= null;

		this.score = 0;
		this.scoreText = null;

		this.counter = 0;

		this.enemies = null;
		this.enemy = null;
	};
	PhaserGame.prototype = {
	    init: function () {
	        this.game.renderer.renderSession.roundPixels = false;
	        this.game.world.setBounds(0, 0, 640, 509);
	        this.physics.startSystem(Phaser.Physics.ARCADE);
	        this.physics.arcade.gravity.y = 200;
	    },
	    preload: function () {
	        this.load.baseURL = 'game/assets/';
	        this.load.crossOrigin = 'anonymous';
	        this.load.image('adam', 'img/Adam_Nagy_CV_transparent.png');
	        this.load.image('bug', 'img/bug.png');
	        this.load.image('background', 'img/monitor.png');
	        this.load.image('bulletTry', 'img/try.png');
	        //this.getImage("bulletTry").width = 74;
	        this.load.image('bulletCatch', 'img/catch.png');
	    },
	    create: function () {
	        this.background = this.add.sprite(0, 0, 'background');
	        
		    this.bullets = game.add.physicsGroup();
		    for(var i=0; i<10; i++){
		    	this.bullets.createMultiple(1, 'bulletTry', false);
		    	this.bullets.createMultiple(1, 'bulletCatch', false);
		    }

	    	this.enemies = game.add.physicsGroup();
	    	this.enemies.createMultiple(20, 'bug', false);

		    this.bullets.setAll('checkWorldBounds', true);
		    this.bullets.setAll('outOfBoundsKill', true);

		    this.enemies.setAll('checkWorldBounds', true);
		    //this.enemies.events.onOutOfBounds.add(this.enemyOutOfBound, this);
		    this.enemies.setAll('outOfBoundsKill', true);

		    this.player = game.add.sprite(400, 150, 'adam');
		    this.game.physics.arcade.enable(this.player);
		    this.player.body.collideWorldBounds = true;

		    this.cursors = game.input.keyboard.createCursorKeys();
		    this.fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		    this.scoreText = this.add.text(23, 24, 'Score: 0', { font: "18px Arial"});
	    },
	    fireBullet: function () {
	        if (game.time.time > this.bulletTime)
		    {
		        this.bullet = this.bullets.getFirstExists(false);

		        if (this.bullet){
		            this.bullet.reset(this.player.x + 35, this.player.y - 12);
		            this.bullet.body.velocity.y = -600;
		            this.bulletTime = game.time.time + 100;
		        }
		    }
	    },
	    createEnemy: function(){
	    	this.enemy = this.enemies.getFirstExists(false);
	    	if(this.enemy){
	    		this.enemy.reset(getRandomInt(23,600), -52);
	    		this.enemy.body.velocity.y = 10;
	    	}
	    },
	    collisionHandler: function(enemy, bullet){
	    	bullet.kill();
	    	enemy.kill();
	    	this.score += 20;
	    	this.scoreText.text = "Score: " + this.score;
	    },
	    enemyHitsPlayer: function(player, enemy){
    		enemy.alreadyHit = true;
	    	this.score = this.score - 50 > 0 ? this.score - 50 :  0;
	    	this.scoreText.text = "Score: " + this.score;
	    	enemy.kill();
	    },
	    enemyOutOfBound: function(enemy){
	    	console.log(enemy);
	    },
	    update: function () {
	    	this.counter++;
		    this.player.body.velocity.x = 0;

		    if(this.counter % 50 === 0){
		    	this.createEnemy();
		    }

		    if (this.cursors.left.isDown)
		    {
		        this.player.body.velocity.x = -600;
		    }
		    else if (this.cursors.right.isDown)
		    {
		        this.player.body.velocity.x = 600;
		    }

		    if (this.fireButton.isDown)
		    {
		        this.fireBullet();
		    }

		    //  Run collision
	        game.physics.arcade.overlap(this.enemies, this.bullets, this.collisionHandler, null, this);
	        game.physics.arcade.overlap(this.enemies, this.player, this.enemyHitsPlayer, null, this);
	    }
	};

	game.state.add('Game', PhaserGame, true);

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
})();