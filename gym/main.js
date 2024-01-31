const DB = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSsJyAKj0ZaOwWKh_n1JU-XXimDRzFx43dGsfS6XArGVye8MdJZ9VXPBddp6cfs37K9rc-HDxBX3Lpb/pub?gid=652144172&single=true&output=tsv';

function parser(t){
    const rawData = t.split('\r\n').map(line => line.split('\t'));
    const headers = rawData.shift();
    const data = rawData.map(arr => arr.reduce((acc, el, i) => ({
        ...acc,
        [headers[i]]: el
    }), {}));
    return data;
}

function getHTML(arr){
    return arr.map(el => (`<div class="card mx-2 mb-4" style="width: 18rem;">
    <img src="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706572800&semt=ais" class="card-img-top" alt="image mock">
    <div class="card-body">
      <h5 class="card-title">${el.what}</h5>
      <p class="card-text">${el.reps}, ${ el.weight }</p>
    </div>
  </div>`)).join('');
}

fetch(DB)
    .then(r => r.text())
    .then(d => {
        console.log(d);
        const data = parser(d);
        console.log(data);
        const htmlData = getHTML(data);
        console.log(htmlData);
        document.querySelector('.my_routines').innerHTML = htmlData;
    });

