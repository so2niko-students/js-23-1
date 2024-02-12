import CardController from "./card/card-controller.js";
import SearchController from "./search/search-controller.js";

const cardsController = new CardController();
const searchController = new SearchController();
cardsController.start();