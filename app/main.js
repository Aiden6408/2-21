import { QuestionsController } from "./Controllers/QuestionsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {

  questionsContoller = new QuestionsController
}

window["app"] = new App();
