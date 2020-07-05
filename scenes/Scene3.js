
class Scene3 extends Phaser.Scene
{

constructor(){
    super({key:'Scene3'});
    this.isRun=true;
}

preload ()
  {
  this.load.atlas('ani2','public/ani2.png','public/ani2.json')
  this.load.plugin('rexcirclemaskimageplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcirclemaskimageplugin.min.js', true);
  this.load.audio('thu7', "public/assets/Audio/audio1.mp3")
  this.load.audio('music', "public/assets/Audio/bensound-cute.mp3")
  this.load.path = 'public/assets/Game/';
  this.load.image('QA1', "QA1.png");
  this.load.image('QA2', "QA2.png");
  this.load.image('loa', "loa.png");
  this.load.image('reload', "reload.png");
  this.load.image('loa3', "loa3.png");
  this.load.image('loa33', "loa33.png");

  this.load.image('444', "scene3.5.jpg");
  this.load.image('333', "scene3.4.jpg");

  this.load.image('222', "scene7.jpg");
  this.load.image('111', "Scene3.6.jpg");
  this.load.image('555', "scene3.2.jpg");

this.load.image('win',"win.png")
  }

create ()
  {
  this.input.setDefaultCursor('url(public/assets/Game/blue.cur), pointer');
this.countNumberWrong=0;
this.countNumberRight=0;

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

   //graphics
  this.graphics = this.add.graphics();
  this.graphics.lineStyle(thickness, color, alpha);


 //img1
 this.img1= this.add.rexCircleMaskImage(posX_A+10, posY_A-100, '111', {
                       maskType: 'roundRectangle',
                       radius: 100
                   }).setOrigin(0).setDisplaySize(250, 200);
 this.img1.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonA, this);
 this.A=this.add.text(posX_A+120,posY_A+105,"A", { color: '#000000', font: '32px Arial' }) ;
 this.A.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonA, this);
//img5
 this.img5= this.add.rexCircleMaskImage(posX_B+10, posY_B-100, '555', {
                                          maskType: 'roundRectangle',
                                          radius: 100
                                      }).setOrigin(0).setDisplaySize(250, 200);
 this.B=this.add.text(posX_B+120,posY_B+105,"B", { color: '#000000', font: '32px Arial' }) ;
 this.B.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonB, this);
 this.img5.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonB, this);
//img2
  this.img2=this.add.rexCircleMaskImage(posX_C+10, posY_C-100, '222', {
                                  maskType: 'roundRectangle',
                                  radius: 100
                              }).setOrigin(0).setDisplaySize(250, 200);
  this.C=this.add.text(posX_C+120,posY_C+105,"C", { color: '#000000', font: '32px Arial' }) ;
  this.C.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonC, this);
  this.img2.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonC, this);
//img3
  this.img3=this.add.rexCircleMaskImage(posX_D+10, posY_D-100, '333', {
            maskType: 'roundRectangle',
            radius: 100
        }).setOrigin(0).setDisplaySize(250, 200);
  this.D=this.add.text(posX_D+120,posY_D+105,"D", { color: '#000000', font: '32px Arial' }) ;
  this.D.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('pointerdown', this.clickButtonD, this);
  this.img3.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonD, this);

//img4
  this.img4=this.add.rexCircleMaskImage( posX_E+10, posY_E-100, '444', {
                       maskType: 'roundRectangle',
                       radius: 100
                   }).setOrigin(0).setDisplaySize(250, 200);
  this.E=this.add.text(posX_E+120,posY_E+105,"E", { color: '#000000', font: '32px Arial' }) ;
  this.E.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonE, this);
  this.img4.setInteractive({ cursor: 'url(public/assets/Game/star.png), pointer' }).once('clicked', this.clickButtonE, this);
  //  If a Game Object is clicked on, this event is fired.
  //  We can use it to emit the 'clicked' event on the game object itself.
    this.input.on('gameobjectup', function (pointer, gameObject)
    {
        gameObject.emit('clicked', gameObject);
    }, this);
   this.info = this.add.text(500, 10, '', { font: '48px Arial', fill: '#000000' });
  }

update(){

 if (this.countNumberRight==3&&this.countNumberWrong==0){
 this.destroyObject(this.img2,this.img3,this.A,this.B,this.C,this.D,this.E,this.AA,this.BB);

  if (this.isRun) {
      this.run();
    }
  if (this.img4.x==550){
       this.setRun(false);
  //this.destroyObject(this.img1,this.img3,this.img5);
  setTimeout(()=>{
  this.win=this.add.image(700,400,"win")
  //this.win.setInteractive().on.('pointerdown',()=>{window.location.href = 'age_Li.html'});
   this.win.setInteractive().on('pointerdown',() =>{
       window.location.href = 'Page_Li.html'
     });



  },1000);
}
}
  else if (this.countNumberWrong==2){

   this.again=this.add.image(1040,170,'reload').setOrigin(0).setDisplaySize(70, 70);
     this.again.setInteractive().on('pointerdown',() =>{
      this.scene.start();// restart current scene
     this.music.stop();
   });
 }
  //this.info.setText('Dung: ' + this.countNumberRight +'\n Sai :'+this.countNumberWrong  );
}
run(){
this.img4.x--;


}
setRun(t){
this.isRun=t;
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
       this.AA=this.graphics.strokeCircle(posX_A+130,posY_A+125, radius);
        this.countNumberRight++;
    }
    clickButtonB(){
    this.BB=this.graphics.strokeCircle(posX_B+130,posY_B+125, radius);
    this.countNumberRight++;

    }
    clickButtonC(){
    this.CC=this.graphics.strokeCircle(posX_C+130,posY_C+125, radius);
    this.countNumberWrong++;

    }
    clickButtonD(){
     this.DD=this.graphics.strokeCircle(posX_D+130,posY_D+125, radius);
      this.countNumberWrong++;
    this.Animations();

    }
    clickButtonE(){
    this.EE= this.graphics.strokeCircle(posX_E+130,posY_E+125, radius);
     this.countNumberRight++;

    }

    Animations(){
    console.log("Ready!");
    this.ani2=this.add.sprite(920,90,"ani2");
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
























