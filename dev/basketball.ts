class BasketBall extends Ball{

    constructor(minWidth : number, maxWidth : number, behavior : BallBehavior) {
        
        super(minWidth, maxWidth, behavior)

    }   
}

window.customElements.define("basketball-component", BasketBall as any)