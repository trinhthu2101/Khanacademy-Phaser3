
var config ={
    type: Phaser.AUTO,
    parent: 'mygame',
    backgroundColor: "#FFFFFF",
    width: 1120,
    height: 670,
    scene: [Scene_Start,Scene1]
};

var game = new Phaser.Game(config);

