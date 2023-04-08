import Sprite from 'JS/Classes/Sprite.js'
import Player from 'JS/Classes/Player.js'

const canvas = document.querySelector('canvas')
const d = canvas.getContext('2d')


canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

const backgroundLevel1 = new Sprite({
	position: {
		x: 0,
		y: 0
	},
	imageSrc:'backgroundLevel1.png',
})

//variables being defined

const player = new Player({
	imageSrc: 'cuterobot.png'
})
const keys = {
	ArrowLeft: {
		pressed: false,
	},
	ArrowRight: {
		pressed: false,
	},
}

//animation for canvas

function animate() {
	window.requestAnimationFrame(animate)

	backgroundLevel1.draw()
	
	player.draw()
	player.update()


	player.velocity.x = 0
	if (keys.ArrowRight.pressed) player.velocity.x = 5
	else if (keys.ArrowLeft.pressed) player.velocity.x = -5
	}

animate()

//player movement