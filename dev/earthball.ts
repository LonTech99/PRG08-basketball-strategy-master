class EarthBall extends Ball{
    
    constructor(minWidth : number, maxWidth : number, behavior : BallBehavior) {
        
        super(minWidth, maxWidth, behavior)
    }

}

window.customElements.define("earthball-component", EarthBall as any)