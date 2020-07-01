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


  this.ImgMusic=this.add.image(1000,10, 'loa33').setOrigin(0).setDisplaySize(150, 150);
  this.music = this.sound.add('music');
  this.ImgMusic.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', () => {
  this.ImgMusic.destroy();
  this.add.image(1000,10,'loa3').setOrigin(0).setDisplaySize(150, 150);
  this.music.stop();
      });
  this.music.play();

  this.loa=this.add.image(250, 130, 'loa').setOrigin(0).setDisplaySize(50, 50);
  this.audio = this.sound.add('thu7');
  this.loa.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', () => {
  this.audio.play()
    });
  this.img1= this.add.rexCircleMaskImage(500, 270, '1', {
                       maskType: 'roundRectangle',
                       radius: 100
                   });

 this.A=this.add.text(490,370,"A", { color: '#000000', font: '32px Arial' }) ;
 this.A.setInteractive({curson:'url(public/assets/Game/curson1.png),pointer'}).on('pointerdown', this.clickButtonA, this);
  this.img1.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', this.clickButtonA, this);

 this.img5= this.add.rexCircleMaskImage(800, 270, '1', {
                                          maskType: 'roundRectangle',
                                          radius: 100
                                      });
 this.B=this.add.text(790,370,"B", { color: '#000000', font: '32px Arial' }) ;
 this.B.setInteractive().on('pointerdown', this.clickButtonB, this);
 this.img5.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', this.clickButtonB, this);

  this.img2=this.add.rexCircleMaskImage(360, 500, '2', {
                                  maskType: 'roundRectangle',
                                  radius: 100
                              });
  this.C=this.add.text(350,600,"C", { color: '#000000', font: '32px Arial' }) ;
  this.C.setInteractive().on('pointerdown', this.clickButtonC, this);
  this.img2.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', this.clickButtonC, this);

  this.img3=this.add.rexCircleMaskImage(660, 500, '3', {
            maskType: 'roundRectangle',
            radius: 100
        });
  this.D=this.add.text(650,600,"D", { color: '#000000', font: '32px Arial' }) ;
  this.D.setInteractive().on('pointerdown', this.clickButtonD, this);
  this.img3.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', this.clickButtonD, this);


  this.img4=this.add.rexCircleMaskImage(960, 500, '4', {
                       maskType: 'roundRectangle',
                       radius: 100
                   });
  this.E=this.add.text(950,600,"E", { color: '#000000', font: '32px Arial' }) ;
  this.E.setInteractive().on('pointerdown', this.clickButtonE, this);
  this.img4.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).on('pointerdown', this.clickButtonE, this);

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
    clickButtonA(){
    this.A.destroy();
    this.AA=this.add.text(490,370,"A", { color: '#FF0000', font: '32px Arial' }) ;
    this.Animations();
    }
    clickButtonB(){
    this.B.destroy();
    this.BB=this.add.text(790,370,"B", { color: '#FF0000', font: '32px Arial' }) ;
    }
    clickButtonC(){
    this.C.destroy();
    this.CC=this.add.text(350,600,"C", { color: '#00FF00', font: '32px Arial' }) ;

    }
    clickButtonD(){
    this.D.destroy();
     this.DD=this.add.text(650,600,"D", { color: '#FF0000', font: '32px Arial' }) ;
    }
    clickButtonE(){
    this.E.destroy();
    this.EE=this.add.text(950,600,"E", { color: '#00FF00', font: '32px Arial' }) ;
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




}
























