export default class Level2 extends Phaser.Scene {
	constructor() {
		super({
			key: 'Level2'
		});
	}
	preload() {
    this.load.image('got', '/assets/sprites/got.jpg')
		this.load.spritesheet('dude', '/assets/sprites/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		})
		}

	create() {
    // camera
    this.map = this.add.sprite(0, 0, 'got').setDepth(2).setOrigin(0,0).setDepth(0)
    this.physics.world.setBounds(0, 0, this.map.width, this.map.height)
    this.mainCamera = this.cameras.main
    this.mainCamera.setViewport(0,0, this.game.config.width, this.game.config.height)
    this.mainCamera.setZoom(1)
    this.mainCamera.setBounds(0,0,this.map.width, this.map.height) // camera stops at world bound
    //this.mainCamera.setScroll(200, 500)
    //this.mainCamera.centerToBounds()
      //.setInteractive({draggable: true}).setDepth(2)
    // this.physics.add.existing(this.dude, 0)
    // this.dude.body.setMass(25)

    // use this way
    this.player1 = this.physics.add.sprite(100, 300, 'dude').setScale(3,3).setOrigin(0,0).setOffset(0, 8)
    this.player1.setSize(this.player1.body.width, this.player1.body.height - 8, false) // very important
    console.log(this.player1)
    this.player2 = this.physics.add.sprite(200, 150, 'dude') 
    this.player2.setMass(25)

    // world bound
    this.physics.world.setBoundsCollision()
    this.player1.setCollideWorldBounds(true)
    this.player2.setCollideWorldBounds(true)
    //this.physics.world.setBounds(200, 0, 400, 300)

    // colliders - pass in game objects and callback
    // this.physics.add.collider(this.player1, this.player2, () => {
    //   console.log('collided')
    // })
    this.player1.setImmovable()
    console.log(this.player1.body.blocked) // where body is being blocked
    console.log(this.player1.body.touching)
    this.location = 0

    // overlap - e.g. mario collectin coins
    this.physics.add.overlap(this.player1, this.player2, () => {
      console.log('overlapped')
    })

      
    this.star = this.add.sprite(500, 200, 'star').setScale(3, 3).setDepth(1)
      //.setInteractive({dropZone: true}).setDepth(1)

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
    // this.input.on('dragenter', (pointer, gameObject, dropZone) => {
    //   this.star.setTint(0x00ff00)
    // })
    // this.input.on('dragleave', (pointer, gameObject, dropZone) => {
    //   this.star.clearTint()
    // })
    // this.input.on('drop', (pointer, gameObject, dropZone) => {
    //   gameObject.x = dropZone.x
    //   gameObject.y = dropZone.y
    //   dropZone.clearTint()
    // })
    // this.input.mouse.disableContextMenu() // disables right click menu pop up

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

    // this.dude.on('dragstart', (pointer, dragX, dragY) => {
    //   console.log('Drag start')
    // })

    // this.dude.on('drag', (pointer, dragX, dragY) => {
    //   console.log(`I'm dragging the dude`)
    //   this.dude.setX(dragX)
    //   this.dude.setY(dragY)
    // })

    // this.dude.on('dragend', (pointer, dragX, dragY) => {
    //   console.log('Drag end')
    //   this.dude.setScale(this.dude.scaleX + 1, this.dude.scaleY + 1)
    // })
    
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

    // player collision
    // if (this.player1.body.blocked.down) {
    //   console.log('DIED')
    // }
    // if (this.player1.body.touching.up) {
    //   console.log('touched above')
    // }

    // camera
    this.location += 10
    this.mainCamera.scrollY = this.location
  }
}
