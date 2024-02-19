import CardModel from "./card-model.js";
import CardView from "./card-view.js";

export default class CardController{
    constructor(observer){
        this.observer = observer;
        this.observer.subscribe(this.observer.events.RENDER, this.onRender);
        this.model = new CardModel();
        this.view = new CardView();
    }

    async start(){
        const data = await this.model.load();
        //Генерую подію "ЗАВАНТАЖЕННЯ ДАНИХ" та розсилаю дані
        this.observer.notify(this.observer.events.DATA_LOAD, data);
        this.onRender(data);
    }

    onRender = data => {
        this.view.render(data);
    }
}