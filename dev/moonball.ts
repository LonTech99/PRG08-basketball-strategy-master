class MoonBall extends Ball {

    constructor(minWidth : number, maxWidth : number, behavior : BallBehavior) {
        
        super(minWidth, maxWidth, behavior)
    }

}

window.customElements.define("moonball-component", MoonBall as any)