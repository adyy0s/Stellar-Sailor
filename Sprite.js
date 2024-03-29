class Sprite {
    constructor({position, imageSrc }) {
        this.position = position
        this.image = new Image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.src = ImageSrc
        this.loaded = false
    }
    draw() {
        if (!this.loaded) return
        d.drawImage(this.image, this.position.x, this.position.y)
    }
}
