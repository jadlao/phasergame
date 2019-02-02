export default class Level1 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level1'
		});
	}
	preload() {
		this.load.image('star', '/assets/img/star.png')
		this.load.spritesheet('dude', '/assets/img/dude.png', {
			frameWidth: 32,
			frameHeight: 48
    })
    this.load.atlas({
      key: 'char_sprites',
      textureURL: '/assets/img/atlas_sprites/sprites.png',
      atlasURL: '/assets/img/atlas_sprites/sprites.json'
    })
	}
	create() {
		// image section
		// this - means this class you get access to all methods in it
		this.star = this.add.image(250,250, 'star')
		this.star.setScale(2,2)
		this.star.setAlpha(0.5,0.5,0.5,0.5)

		// sprite section
		// frame changes the image in the sprite
		this.dude = this.add.sprite(200,150, 'dude', 4).setScale(2,2)
		this.anims.create({
			key: 'left',
			frames:
			this.anims.generateFrameNumbers(
				'dude', 
				{
					start: 0,
					end: 3
        }),
        frameRate: 10,
        repeat: -1
    })
    
    this.dude.anims.play('left', true)

    // sprite atlas
    this.fatboy = this.add.sprite(100,250, 'char_sprites', 'jacen1.png')

		//console.log(this.star.originY)
	}
	update(time, delta) {}
}
