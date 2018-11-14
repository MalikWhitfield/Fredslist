import Estates from "../../models/realEstate.js"

let _estates = []

export default class EstateService {
  addRealEstate(formData) {
    let newEstate = new Estates(formData)
    _estates.push(newEstate)
  }


  getEstates() {
    return _estates
  }
}