export default class SearchView{
    constructor(searchCallback){
        this.DOMSearchForm = document.querySelector('.form-search');
        this.DOMSearchInput = document.querySelector('.input-search');
        this.DOMSearchForm.addEventListener('submit', searchCallback);
    }
}