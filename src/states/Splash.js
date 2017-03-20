import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.State {
	init () {}

	preload () {
		let loading = this.game.add.text(
			0, 0,
			'loading',
			Object.assign(config.text.lg, { boundsAlignH: 'center', boundsAlignV: 'middle' }))
		loading.setTextBounds(0, 100, this.game.width, 100)

		this.load.image('player', './assets/images/player.png')
		this.load.image('playerDuck', './assets/images/player_duck.png')
		this.load.image('playerDead', './assets/images/player_dead.png')

		this.load.image('liipLogo', './assets/images/liip_logo.png')
		this.load.image('startLogo', './assets/images/start_logo.png')
		this.load.image('liipLogoSmall', './assets/images/liip_logo_small.png')

		this.load.image('beer', './assets/images/beer.png')
		this.load.image('award', './assets/images/award.png')
		this.load.image('coffee', './assets/images/coffee.png')

		this.load.tilemap('liip', 'assets/tilemaps/liip.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.image('gameTiles', 'assets/images/tiles_spritesheet.png')

		this.load.image('replay', 'assets/images/replay.png')
		this.load.image('start', 'assets/images/start.png')

		this.load.audio('coin', 'assets/audio/coin.wav')
		this.load.audio('ouch', 'assets/audio/ouch.wav')
		this.load.audio('jump', 'assets/audio/jump.ogg')

	}

	create () {
		this.state.start('Intro')
	}

}
