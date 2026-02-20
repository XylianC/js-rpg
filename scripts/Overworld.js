class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }


    init() {
        // Code for drawing background / maybe tilemap later
        const backgroundSprite = new Image();
        backgroundSprite.onload = () => {
            this.ctx.drawImage(backgroundSprite, 0, 0)
        };
        backgroundSprite.src = "../images/maps/DemoLower.png";

        // Place some game objects
        const hero = new GameObject({
            x: 5,
            y: 6,

        })

        const npc1 = new GameObject({
            x: 7,
            y: 8,
            src: "/images/characters/people/npc1.png"
            
        })



        // Draw the game objects on the canvas.
        setTimeout(() => { // will be done in loop eventually
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 50)
        
    }
}