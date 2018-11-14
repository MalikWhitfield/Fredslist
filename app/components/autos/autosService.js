//9. now we import Auto from ....
import Auto from "../../models/auto.js";

let _autos = [] // 11. Now we create some dummy data just for the moment. We want to ge this array to the controller, via a method (method because it's atached fo a class) 16. Now we put an image in here for the loop template to return

export default class AutosService {// 6. We know we need an AutosService due to what me made in the Controller
  addAuto(formData) {
    let newAuto = new Auto(formData) // 27.
    _autos.push(newAuto)
    console.log(_autos)
    //28.
  }
  getAutos() {
    console.log('getting autos')
    return _autos // 12. We create the method that accesses the array. We can use the keyword 'get' with a lowercase "autos" to do some crazy shit, but don't worry about that right now. Now link this to the function in AutosController
  }

}