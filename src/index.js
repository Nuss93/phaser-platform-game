import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import sky from "./assets/sky.png";
import platform from "./assets/platform.png";
import star from "./assets/star.png";
import bomb from "./assets/bomb.png";
import dude from "./assets/dude.png";



class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
        console.log('constructor');
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        this.load.image('sky', sky);
        this.load.image('ground', platform);
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.spritesheet('dude', 
            dude,
            { frameWidth: 32, frameHeight: 48 }
        );
    }
      
    create ()
    {
        const logo = this.add.image(400, 150, 'logo');
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: MyGame
};

const game = new Phaser.Game(config);
