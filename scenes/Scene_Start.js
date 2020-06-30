class Scene_Start extends Phaser.Scene{
constructor()
{
    super({key:'Scene_Start'});

}
preload(){
    this.load.path="public/assets/Game/";

    this.load.image('start2','start2.png');
    this.load.image('start3','start3.png');
    this.load.image('start4','start4.png');
    this.load.image('start5','start5.png');
    
}
create(){
    this.anims.create({
        key: 'snooze',
        frames: [
            { key: 'start2'},
            { key: 'start3' },
            { key: 'start4' },
            { key: 'start5',duration: 50 }
        ],
        frameRate: 8,
        repeat: -1
    });

    this.add.image(550, 300, 'start2').setInteractive();//.play('snooze');
    //this.start.on('pointerdown',()=>{ this.scene.start("Scene1")}) 
    this.scene.start("Scene1");
}

}