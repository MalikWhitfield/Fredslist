import AutosService from "./autosService.js";

let _autosService = new AutosService() // 5. Now we create that new AutosService in the autosService.js folder // 9. We need to move the this above the controller because we want this to be private. Initially, this was in the class AutosController
// 10. Create this so that we can access this variable within AutosControler



// 4. We create something that interacts with the user and index
export default class AutosController {
  constructor() {
    console.log("DID IT WORK? Hello from Autos Controller") //This is just to see if the contoller is working in our console
  }

  showAutos() { // 8. Now we make that function from 7
    console.log('autobots asssemble')
    let autos = _autosService.getAutos() // 13. Need to create an autos here because it only exists in service
    console.log(autos)
    let template = "" // 14. Need to start this template so that it will show up on the HTML
    autos.forEach(auto => {//15. Now we want this so that it loops thrrough the autos array. This is the same as the other for loop syntax, but a bit easier
      template += ` 
      <div class="col card"> 
      <img src="${auto.img}">
      <h5> ${auto.make} - ${auto.model} ${auto.year}></h5>
      <p>Miles: ${auto.miles}</p>
      <p>Price: ${auto.price}</p> 
      </div>`
    })
    console.log(template)
    // document.getElementById('main-content').innerHTML = template
    document.getElementById('main-content').innerHTML = template   // 18. now we make the document.write.innerHTML

  }

  addAuto(event) { //21. Put the addAuto(event) function here so that the page stops the reloud
    event.preventDefault(); //this prevents the page from reloading
    let form = event.target
    //this is the element that triggers the event
    let formData = { //22. insert the data is that is need for the form// don't forget the value, because the .value is what the user put into the form
      'make': form.make.value,
      'model': form.model.value,
      'year': form.year.value,
      'miles': form.miles.value,
      'price': form.price.value,
      'description': form.description.value,
      'img': form.img.value
    }
    _autosService.addAuto(formData) // 23.
    this.showAutos() // 24. Now we need to push the formData to the autos
    form.reset()
  }

}

