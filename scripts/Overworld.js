class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }


    startGameLoop() {
        const frame = () => {

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas)

            // Draw lower layer
            this.map.drawTiles(this.ctx);

            // Draw game obejcts
            Object.values(this.map.gameObjects).forEach(object => {
                object.x += .03
                object.sprite.draw(this.ctx);
            })

            // Draw upper layer
            this.map.drawEnvironment(this.ctx);

                requestAnimationFrame(() => {
                    console.log("Stepping");
                    frame();
                })
        }
        frame();
    }

    //Update


    //Draw


    init() {
        // Here the rooms are stored, and could be changed as well.
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom);

        this.startGameLoop();

    }
}