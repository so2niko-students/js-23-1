export default class CardModel{
    DB = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSsJyAKj0ZaOwWKh_n1JU-XXimDRzFx43dGsfS6XArGVye8MdJZ9VXPBddp6cfs37K9rc-HDxBX3Lpb/pub?gid=652144172&single=true&output=tsv';
    data = [];

    parser = (t) => {
        const rawData = t.split('\r\n').map(line => line.split('\t'));
        const headers = rawData.shift();
        const data = rawData.map(arr => arr.reduce((acc, el, i) => ({
            ...acc,
            [headers[i]]: el
        }), {}));
        console.log(this);
        this.data = data;
        return data;
    }

    load(){
        return fetch(this.DB)
            .then(r => r.text())
            .then(this.parser);
    }
}