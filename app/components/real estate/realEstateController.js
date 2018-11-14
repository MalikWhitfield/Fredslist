import EstateService from "./realEstateService.js"


let _estateService = new EstateService()

export default class EstatesController {
  constructor() {
    console.log('Did it work? Hello from real Estate Controller')
  }
  showEstates() {
    console.log('this should be where real estate starts showing up')
    let estates = _estateService.getEstates()
    let template = ""
    estates.forEach(estate => {
      template += `
      <div class="col card">
      <img src="${estate.img}">
      <p>Price: ${estate.price}</p> 
      <p>Sqft: ${estate.sqft}</p>
      <p>Rooms: ${estate.rooms}></p>
      <p>Garage Size: ${estate.garage}></p>
      </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addEstate(event) {
    event.preventDefault();
    let form = event.target
    let formData = {
      'price': form.price.value,
      'sqft': form.sqft.value,
      'rooms': form.rooms.value,
      'garageSize': form.garage.value,
      'img': form.img.value
    }
    _estateService.addRealEstate(formData);
    this.showEstates()
    form.reset()
  }
}