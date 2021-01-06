import AllController from "./Controllers/AllController.js";


class App {
  allController = new AllController()
}

window["app"] = new App();
