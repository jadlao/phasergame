export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/sprites/star.png')
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		})
		this.load.atlas({
		key: 'char_sprites',
		textureURL: '/assets/sprites/atlas_sprites/sprites.png',
		atlasURL: '/assets/sprites/atlas_sprites/sprites.json'
    })
    
    // google fonts
    this.load.script(
      'webfont',
      'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'
    )

    // tiles
    this.load.image('platform_tiles', '/assets/tiles/arcade_platformerV2-transparent.png')
    this.load.tilemapTiledJSON('map', '/assets/tiles/2dgame2.json')
		}

	create() {
    const scene = this;

    const map = this.make.tilemap({
      key: 'map',
      tileWidth: 16,
      tileHeight: 16
    })
    const tileset = map.addTilesetImage('2dtileset', 'platform_tiles')

    const backgroundLayer = map.createStaticLayer('background', tileset, 0, 0)
    const terrainLayer = map.createStaticLayer('terrain', tileset, 0, 0)
    const treesbgLayer = map.createStaticLayer('treesbg', tileset, 0, 0)
    const treesLayer = map.createStaticLayer('trees', tileset, 0, 0)
    const grassLayer = map.createStaticLayer('grass', tileset, 0, 0)
    
    // character can collide on world tiles
    terrainLayer.setCollisionByProperty({
      collides: true
    })

    // // setting origin of game object
    // this.star1 = this.add
    //   .sprite(0, 0, 'star')
    //   .setScale(2,2)
    //   .setOrigin(0,0)

    // this.star1.setX(100)

    // this.endZone = this.add.zone(200,200,50,50)
    // this.physics.world.enable(this.endZone) // see hidden zone box
    // this.endZone.body.setAllowGravity(false)

		// // image section
		// // this - means this class you get access to all methods in it
		// this.star = this.add.image(250,250, 'star')
		// this.star.setScale(2,2)
		// this.star.setAlpha(0.5,0.5,0.5,0.5)

		// // sprite section
		// // frame changes the image in the sprite
		// this.dude = this.add.sprite(200,150, 'dude', 4).setScale(2,2)
		// this.anims.create({
		// 	key: 'left',
		// 	frames:
		// 	this.anims.generateFrameNumbers(
		// 		'dude', 
		// 		{
		// 			start: 0,
		// 			end: 3
		// 		}),
		// 		frameRate: 10,
		// 		repeat: -1
		// })
		
		// this.dude.anims.play('left', true)

		// // sprite atlas
		// this.fatboy = this.add
		// 	.sprite(100,250, 'char_sprites', 'jacen1.png')
    //   .setScale(2,2)
    // const frameNames = [
    //   {key: 'char_sprites', frame: 'jacen2.png'},
    //   {key: 'char_sprites', frame: 'jacen3.png'},
    //   {key: 'char_sprites', frame: 'jacen4.png'},
    //   {key: 'char_sprites', frame: 'jacen5.png'},
    // ]
    // this.anims.create({
    //   key: 'leftfatboy',
    //   frames: frameNames,
    //   frameRate: 10,
    //   repeat: -1
    // })
    // this.fatboy.flipX = true;
    // this.fatboy.anims.play('leftfatboy', true)

    // shapes 
    // this.square = this.add.rectangle(100, 200, 150, 150, 0xff0000)
    // this.square.setStrokeStyle(1, 0xff0000, 1)

    // this.circle = this.add.circle(100, 200, 50, 0xffff00)
    // this.circle.setStrokeStyle(1, 0xffff00, 1)

    // text
    // this.gameTitle = this.add.text(150, 200, 'Hey this is my title', {
    //   fontFamily: 'Arial',
    //   fontSize: '40px',
    //   fontStyle: '',
    //   backgroundColor: 'red',
    //   color: '#fff',
    //   stroke: '#fff',
    //   strokeThickness: 0,
    //   shadow: {
    //     offsetX: 0,
    //     offsetY: 0,
    //     color: '#000',
    //     blur: 0,
    //     stroke: false,
    //     fill: false
    //   },
    //   align: 'left',
    //   maxLines: 0,
    //   fixedWidth: 0,
    //   fixedHeight: 0,
    //   rtl: false,
    //   testString: '|MEqgy',
    //   wordWrap: {
    //     width: null,
    //     callback: null,
    //     callbackScope: null,
    //     useAdvancedWrap: false
    //   }
    //   // resolution: 1
    // })

    // WebFont.load({
    //   google: {
    //     families: ['Fredericka the Great']
    //   },
    //   active: function() {
    //     scene.add
    //     .text(150, 100, `Jacen's Journey`, {
    //       fontFamily: 'Fredericka the Great',
    //       fontSize: 50,
    //       color: '#ffffff'
    //     })
    //     .setShadow(2, 2, '#333333', 2, false, true)
    //   }
    // })
    // this.gameTitle.setText('Street fighter ' + 2);
    // this.version = 0;
    // generate group of objects
    // this.stars = this.add.group({
    //   key: 'star',
    //   frame: [0, 1, 2, 3],
    //   setXY: {
    //     x: 100,
    //     y: 100,
    //     stepX: 64,
    //     stepY: 64
    //   },
    //   setScale: {
    //     x: 1,
    //     y: 1,
    //     stepX: 1,
    //     stepY: 1
    //   }
    // })
    // set containers
    // this.allStars = this.add.container(200, 200)

    // var star1 = this.add.sprite(0, 0, 'star')
    // var star2 = this.add.sprite(50, 50, 'star')
    // var star3 = this.add.sprite(150, 150, 'star')

    // this.allStars.add(star1)
    // this.allStars.add(star2)
    // this.allStars.add(star3)
    // this.allStars.setX(50)
		}

	update(time, delta) {
    // this.gameTitle.setText('Street fighter ' + this.version);
    // this.version += 1;
  }
}
