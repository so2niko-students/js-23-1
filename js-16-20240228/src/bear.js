import Beast from "./beast.js";

const SETTINGS = {
    className : 'bear',
    tickTime : 3000,
    speed : 10,
    demotivation : 10,
}

export default class Bear extends Beast{
    health = Math.floor(Math.random() * 50 + 50); 
    constructor(x, y, zoo){
        super(x, y, zoo, SETTINGS);
        this.start(this.myTick);
    }

    myTick = () => {
        this.health -= 5;
        this.renderInfo(this.health);
        if(this.health <= 0){
            this.death();
        }
    }
}