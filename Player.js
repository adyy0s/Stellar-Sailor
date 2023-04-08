import Sprite from 'JS/Classes/Sprite.js'

class Player extends Sprite {
    constructor(imageSrc) {
        super({imageSrc})
        this.position = {
            x:20,
            y:20,
        }
        
        this.velocity = {
            x:0,
            y:0,
        }
        this.width = 
        this.height = 50
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        this.image = document.getElementById('player');
    }

    update() {
        d.fillStyle = 'blue'
        d.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.sides.bottom = this.position.y + this.height

        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity
        } else (this.velocity.y = 0)
        
    }
}