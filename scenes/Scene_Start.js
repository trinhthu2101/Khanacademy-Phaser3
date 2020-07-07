var MusicCofig = {
    mute: false,
    volume: 1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0
}

class Scene_Start extends Phaser.Scene{
constructor()
{
    super({key:'Scene_Start'});

}
preload(){
    this.load.atlas('start','public/assets/Game/start.png','public/assets/Game/start.json')
    this.load.image('ST','public/assets/Game/start5.png')
    this.load.image('block','public/assets/Game/50x50-black.png')
    this.load.audio('music', "public/assets/Audio/bensound-cute.mp3")
    this.load.pack("packScene","public/assets/sceneImg.json")
    this.load.pack("packSceneAu","public/assets/audio.json")

}
create(){
  this.input.setDefaultCursor('url(public/assets/Game/blue.cur), pointer');
  this.music = this.sound.add('music');
  this.music.play();
  this.play =this.add.image(550,300,"ST");
  this.play.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', () => {
       this.scene.start("Scene1");
       this. music.stop();
     });


     //animation block
  var blocks = this.add.group({ key: 'block', repeat: 350 });

     Phaser.Actions.GridAlign(blocks.getChildren(), {
         width: 23,
         cellWidth: 50,
         cellHeight: 50,
         x: 25,
         y: 25
     });

     var _this = this;

     var i = 0;

     blocks.children.iterate(function (child) {

         _this.tweens.add({
             targets: child,
             scaleX: 0,
             scaleY: 0,
             alpha: 0,
             y: '+=100',
             angle: 180,
             ease: 'Power3',
             duration: 1000,
             delay: 1000 + (i * 100)
         });

         i++;

         //  Change the value 32 for different results
         if (i % 16 === 0)
         {
             i = 0;
         }

     });


   /* this.start=this.add.sprite(550,300,"start");
    var frameNames=this.textures.get('start').getFrameNames();
    console.log(frameNames);
    this.anims.create({
    key:'attack',
    frames:[
        {
                key:'start',
                frame:"start2.png"
        },

        {
                key:'start',
                frame:"start3.png"
        },
        {
                key:'start',
                frame:"start4.png"
        },
        {
                 key:'start',
                 frame:"start5.png"
        },

    ],
    fameRate:8,
    repeat:-1
    });
     this.start.play("attack");*/


}

}