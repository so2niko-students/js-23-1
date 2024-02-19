import CardController from "./card/card-controller.js";
import Observer from "./observer.js";
import SearchController from "./search/search-controller.js";

const observer = new Observer();
const cardsController = new CardController(observer);
const searchController = new SearchController(observer);
cardsController.start();