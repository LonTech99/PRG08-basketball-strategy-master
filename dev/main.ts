class Main {

    private balls : Ball[] = []
    private basketBall : Ball

    constructor() {
        
        this.balls.push(new EarthBall(0, window.innerWidth/2, new Bouncing()))
        this.balls.push(new MoonBall(window.innerWidth/2, window.innerWidth, new Space()))

        this.basketBall = new BasketBall(0, window.innerWidth, new Bouncing())
        this.basketBall = new BasketBall(0, window.innerWidth, new Space())
        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }

        this.basketBall.update()

        if(this.basketBall.x > window.innerWidth / 2) {
            this.basketBall.setBehavior(new Bouncing())
        }
        else {
           this.basketBall.setBehavior(new Space())
           
        }
        

            
        

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())