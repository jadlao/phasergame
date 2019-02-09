export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}
	preload() {
    this.load.image('star', '/assets/sprites/star.png')
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		})
		}

	create() {
    this.dude = this.add.sprite(100, 200, 'dude').setInteractive({draggable: true}).setDepth(2)
    this.star = this.add.sprite(500, 200, 'star').setScale(3, 3).setInteractive({dropZone: true}).setDepth(1)

    // KEYBOARD
    // this.input.enabled = true;
    // this.dKey = this.input.keyboard.addKey('D')
    // this.aKey = this.input.keyboard.addKey('A')
    // this.wKey = this.input.keyboard.addKey('W')
    // this.sKey = this.input.keyboard.addKey('S')

    // this.spacebarkey = this.input.keyboard.addKey('SPACE')
    // this.cursorKeys = this.input.keyboard.createCursorKeys()

    // console.log(this.input) // see methods in input object

    // MOUSE
    this.input.on('dragenter', (pointer, gameObject, dropZone) => {
      this.star.setTint(0x00ff00)
    })
    this.input.on('dragleave', (pointer, gameObject, dropZone) => {
      this.star.clearTint()
    })
    this.input.on('drop', (pointer, gameObject, dropZone) => {

    })
    this.input.mouse.disableContextMenu() // disables right click menu pop up

    // this.input.on('pointerdown', pointer => {
    //   if (pointer.rightButtonDown()) {
    //     this.dude.setX(pointer.y)
    //     this.dude.setY(pointer.x)
    //   } else {
    //     this.dude.setX(pointer.x)
    //     this.dude.setY(pointer.y)
    //   }
      
      //console.log(pointer)
      //console.log(pointer.x)
    //})

    // this.dude.on('pointerdown', pointer => {
    //   //this.dude.setX(this.dude.x + 50)
    //   this.dude.setScale(this.dude.scaleX - 1, this.dude.scaleY - 1)
    // })

    // this.dude.on('pointerover', pointer => {
    //   //this.dude.setX(this.dude.x + 50)
    // })

    // this.dude.on('pointerout', pointer => {
    //   this.dude.setScale(this.dude.scaleX + 1, this.dude.scaleY + 1)
    // })

    this.dude.on('dragstart', (pointer, dragX, dragY) => {
      console.log('Drag start')
    })

    this.dude.on('drag', (pointer, dragX, dragY) => {
      console.log(`I'm dragging the dude`)
      this.dude.setX(dragX)
      this.dude.setY(dragY)
    })

    this.dude.on('dragend', (pointer, dragX, dragY) => {
      console.log('Drag end')
      this.dude.setScale(this.dude.scaleX + 1, this.dude.scaleY + 1)
    })
    
}

	update(time, delta) {
    // KEYBOARD
    // if(this.dKey.isDown || this.cursorKeys.right.isDown) {
    //   this.dude.setX(this.dude.x + 5)
    // }
    // if(this.aKey.isDown || this.cursorKeys.left.isDown) {
    //   this.dude.setX(this.dude.x - 5)
    // }
    // if(this.wKey.isDown || this.cursorKeys.up.isDown) {
    //   this.dude.setY(this.dude.y - 5)
    // }
    // if(this.sKey.isDown || this.cursorKeys.down.isDown) {
    //   this.dude.setY(this.dude.y + 5)
    // }
    // if(Phaser.Input.Keyboard.JustDown(this.spacebarkey)) {
    //   this.dude.setY(this.dude.y - 50)
    //   //console.log(this.dude.y)
    // }
  }
}
