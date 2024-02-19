import SearchModel from "./search-model.js";
import SearchView from "./search-view.js";

export default class SearchController{
    constructor(observer){
        this.observer = observer;
        this.observer.subscribe(this.observer.events.DATA_LOAD, this.onDataLoad);
        this.model = new SearchModel();
        this.view = new SearchView(this.onSearch);
    }

    onSearch = (ev) => {
        ev.preventDefault();
        const searchVal = this.view.DOMSearchInput.value;
        const searchData = this.model.search(searchVal);
        this.observer.notify(this.observer.events.RENDER, searchData);
    }

    onDataLoad = (data) => {
        this.model.data = data;
    }
}