export default class CardView{
    constructor(){
        this.DOMRoutines = document.querySelector('.my_routines');
    }

    getHTML(arr){
        return arr.map(el => (`<div class="card mx-2 mb-4" style="width: 18rem;">
        <img src="https://img.freepik.com/free-photo/dumbbells-floor-gym-ai-generative_123827-23744.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706572800&semt=ais" class="card-img-top" alt="image mock">
        <div class="card-body">
          <h5 class="card-title">${el.what}</h5>
          <p class="card-text">${el.reps}, ${ el.weight }</p>
        </div>
      </div>`)).join('');
    }

    render(arr){
        const cardsHTML = this.getHTML(arr);
        this.DOMRoutines.innerHTML = cardsHTML;
    }
}