class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        // To be drawn on the canvas

        // These will be the tilemap / background layer
        this.tiles = new Image();
        this.tiles.src = config.tilesSrc; //will contain tiles
        



        this.environ = new Image();
        this.environ.src = config.environSrc; //roofs, trees, etc.
    
    }

    drawTiles(ctx) {
        // To-do: Find way to draw by tiles, not per image!
        ctx.drawImage(this.tiles, 0, 0);
    }

    drawEnvironment(ctx) {
        // Note: More complex code may follow here.
        ctx.drawImage(this.environ, 0, 0);
    }
}


window.OverworldMaps = {
    DemoRoom : {
        tilesSrc: "/images/maps/DemoLower.png",
        environSrc: "/images/maps/DemoUpper.png",
        
        gameObjects: {
            hero: new GameObject({
            x: 5,
            y: 6,

            }),

            npc1: new GameObject({
                x: 7,
                y: 8,
                src: "/images/characters/people/npc1.png"
                
            })
        }
    },

    Kitchen : {
        tilesSrc: "/images/maps/KitchenLower.png",
        environSrc: "/images/maps/KitchenUpper.png",
        
        gameObjects: {
            hero: new GameObject({
            x: 3,
            y: 5,

            }),

            npc1: new GameObject({
                x: 7,
                y: 8,
                src: "/images/characters/people/npc1.png"
                
            }),

            npc2: new GameObject({
                x: 10,
                y: 6,
                src: "/images/characters/people/npc1.png"
                
            })
        }
    }

}