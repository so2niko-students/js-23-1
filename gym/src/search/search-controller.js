import SearchView from "./search-view.js";

export default class SearchController{
    constructor(){
        this.view = new SearchView(this.onSearch);

    }

    onSearch = (ev) => {
        ev.preventDefault();
        console.log(this.view.DOMSearchInput.value);
        
    }
}