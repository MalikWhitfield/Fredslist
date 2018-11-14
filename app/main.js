import AutosController from "./components/autos/AutosController.js"; //We need this imported because this is the only thing that communicates with the index. The service is abstracted away
import EstatesController from "./components/real estate/realEstateController.js";


class App {
  constructor() {
    this.controllers = { //This communicates with the service and calls data to the screen
      autosController: new AutosController, // Now we create this, that we left as a comment before
      estatesController: new EstatesController,
      // JobsController
    }
  }
}

// @ts-ignore
window.app = new App()  //This brings the app controller to the screen and allows the user to access the controller