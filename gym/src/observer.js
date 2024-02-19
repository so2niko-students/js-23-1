export default class Observer{
    #listeners = {};
    events = {
        'DATA_LOAD' : 'Завантаження даних про карточки',
        'RENDER' : 'Рендер карточок на екрані',
    };

    subscribe(event, callback){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event].push(callback);
    }
    
    unsubscribe(event, callback){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event] = this.#listeners[event].filter(cb => cb !== callback);
    }
    
    notify(event, data){
        if(!this.#listeners[event]){
            this.#listeners[event] = [];
        }
        this.#listeners[event].forEach(callback => callback(data));
    }
}