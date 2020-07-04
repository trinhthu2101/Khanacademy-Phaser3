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
    this.load.audio('music', "public/assets/Audio/bensound-cute.mp3")
}
create(){
 this.input.setDefaultCursor('url(public/assets/Game/blue.cur), pointer');

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
   this.music = this.sound.add('music');

     this.play =this.add.image(550,300,"ST");
     this.play.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', () => {
          this.scene.start("Scene1");

   });

}

}