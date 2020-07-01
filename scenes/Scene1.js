
let posX;
let posY;
let textX;
var posX_A=490;
var posY_A=370;
var posX_B=790;
var posY_B=370;
var posX_C=350;
var posY_C=600;
var posX_D=650;
var posY_D=600;
var posX_E=950;
var posY_E=600;
var countNumberRight=0;

var countNumberWrong=0;
 class Scene1 extends Phaser.Scene{

constructor(){
    super({key:'Scene1'});


}

preload ()
  {
  this.load.atlas('ani2','public/ani2.png','public/ani2.json')
  this.load.plugin('rexcirclemaskimageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcirclemaskimageplugin.min.js', true);
  this.load.audio('thu7', "public/assets/Audio/audio11.mp3")
  this.load.audio('music', "public/assets/Audio/bensound-cute.mp3")
  this.load.path = 'public/assets/Game/';
  this.load.image('QA1', "QA1.png");
  this.load.image('QA2', "QA2.png");
  this.load.image('loa', "loa.png");
  this.load.image('loa3', "loa3.png");
  this.load.image('loa33', "loa33.png");
  this.load.image('4', "4t.jpeg");
  this.load.image('3', "3.jpg");

  this.load.image('2', "2.jpg");
  this.load.image('1', "1.jpg");

  }

create ()
  {

  this.input.setDefaultCursor('url(public/assets/Game/blue.cur), pointer');

  this.add.image(230,350,'QA1');
  this.QA2=this.add.image(230,97,'QA2');

  //Music
  this.ImgMusic=this.add.image(1000,10, 'loa33').setOrigin(0).setDisplaySize(150, 150);
  this.music = this.sound.add('music');
  this.ImgMusic.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown',this.chooseMusic,this);
  this.music.play(MusicCofig);


  //Audio
  this.loa=this.add.image(255, 135,'loa').setOrigin(0).setDisplaySize(35, 35);
  this.audio = this.sound.add('thu7');
  this.loa.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', () => {
  this.audio.play();
    });
  this.img1= this.add.rexCircleMaskImage(posX_A+10, posY_A-100, '1', {
                       maskType: 'roundRectangle',
                       radius: 100
                   });

 this.A=this.add.text(posX_A,posY_A,"A", { color: '#000000', font: '32px Arial' }) ;
 this.A.setInteractive({curson:'url(public/assets/Game/curson1.png),pointer'}).on('clicked', this.clickButtonA, this);
  this.img1.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', this.clickButtonA, this);

 this.img5= this.add.rexCircleMaskImage(posX_B+10, posY_B-100, '3', {
                                          maskType: 'roundRectangle',
                                          radius: 100
                                      });
 this.B=this.add.text(posX_B,posY_B,"B", { color: '#000000', font: '32px Arial' }) ;
 this.B.setInteractive().on('pointerdown', this.clickButtonB, this);
 this.img5.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('clicked', this.clickButtonB, this);

  this.img2=this.add.rexCircleMaskImage(posX_C+10, posY_C-100, '2', {
                                  maskType: 'roundRectangle',
                                  radius: 100
                              });
  this.C=this.add.text(posX_C,posY_C,"C", { color: '#000000', font: '32px Arial' }) ;
  this.C.setInteractive().on('clicked', this.clickButtonC, this);
  this.img2.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('clicked', this.clickButtonC, this);

  this.img3=this.add.rexCircleMaskImage(posX_D+10, posY_D-100, '1', {
            maskType: 'roundRectangle',
            radius: 100
        });
  this.D=this.add.text(posX_D,posY_D,"D", { color: '#000000', font: '32px Arial' }) ;
  this.D.setInteractive().on('pointerdown', this.clickButtonD, this);
  this.img3.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('clicked', this.clickButtonD, this);


  this.img4=this.add.rexCircleMaskImage( posX_E+10, posY_E-100, '4', {
                       maskType: 'roundRectangle',
                       radius: 100
                   });
  this.E=this.add.text(posX_E,posY_E,"E", { color: '#000000', font: '32px Arial' }) ;
  this.E.setInteractive().on('clicked', this.clickButtonE, this);
  this.img4.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('clicked', this.clickButtonE, this);
  //  If a Game Object is clicked on, this event is fired.
  //  We can use it to emit the 'clicked' event on the game object itself.
    this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);
 this.info = this.add.text(500, 10, '', { font: '48px Arial', fill: '#000000' });

  }

update(){
 this.info.setText('Dung: ' + countNumberRight +'\n Sai'+countNumberWrong  );
}








   destroyObject() {
      for (let index = 0; index < arguments.length; index++) {
        arguments[index].setActive(false).setVisible(false);
      }
    }
    setObjectVisible(isVisible) {
      for (let index = 1; index < arguments.length; index++) {
        arguments[index].setVisible(isVisible);
      }
    }

    clickButtonFalse(posX,posY,textX){

        this.textX.destroy();
        this.add.text(posX,posY,"textX", { color: '#FF0000', font: '32px Arial' }) ;
        this.Animations();
    }
    clickButtonA(){
    this.A.destroy();
    this.AA=this.add.text(posX_A,posY_A,"A", { color: '#FF0000', font: '32px Arial' }) ;
    this.Animations();
    countNumberWrong++;

    }
    clickButtonB(){
    this.B.destroy();
    this.BB=this.add.text(posX_B,posY_B,"B", { color: '#00FF00', font: '32px Arial' }) ;
    countNumberRight++;
    }
    clickButtonC(){
    this.C.destroy();
    this.CC=this.add.text(posX_C,posY_C,"C", { color: '#00FF00', font: '32px Arial' }) ;

    countNumberRight++;

    }
    clickButtonD(){
    this.D.destroy();
     this.DD=this.add.text(posX_D,posY_D,"D", { color: '#FF0000', font: '32px Arial' }) ;
      countNumberWrong++;
    }
    clickButtonE(){
    this.E.destroy();
    this.EE=this.add.text(posX_E,posY_E,"E", { color: '#00FF00', font: '32px Arial' }) ;
     countNumberRight++;
    }

    Animations(){
    console.log("Ready!");
    this.ani2=this.add.sprite(970,100,"ani2");
    var frameNames=this.textures.get('ani2').getFrameNames();
    console.log(frameNames);
    this.anims.create({
    key:'attack',
    frames:[
        {
                key:'ani2',
                frame:"01.png"
        },

        {
                key:'ani2',
                frame:"02.png"
        },
        {
                key:'ani2',
                frame:"03.png"
        },
        {
                 key:'ani2',
                 frame:"04.png"
        },
        {
                 key:'ani2',
                 frame:"05.png"
        },
        {
                 key:'ani2',
                 frame:"06.png"
        },
        {
                  key:'ani2',
                  frame:"07.png"
        },
        {
                  key:'ani2',
                  frame:"08.png"
        },
        {
                  key:'ani2',
                  frame:"09.png"
        },
        {
                  key:'ani2',
                  frame:"10.png"
        }
    ],
    fameRate:8,
    repeat:-1
    });
    this.ani2.play("attack")
    }
   chooseMusic(){

       this.ImgMusic.destroy();
       this.add.image(1000,10,'loa3').setOrigin(0).setDisplaySize(150, 150);
       this.music.pause();


   }



}
























