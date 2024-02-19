export default class SearchModel{
    data = [];
    search(val){
        const reSearch = new RegExp(val, 'i');
        return this.data.filter(({what}) => reSearch.test(what));
    }
}