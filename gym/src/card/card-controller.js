import CardModel from "./card-model.js";
import CardView from "./card-view.js";

export default class CardController{
    constructor(){
        this.model = new CardModel();
        this.view = new CardView();
    }

    async start(){
        const data = await this.model.load();
        this.view.render(data);
    }
}