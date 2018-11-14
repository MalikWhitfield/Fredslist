// 3. We know each auto is gonna have this, so make an auto class
export default class Auto {
  constructor(data) {
    // 26. change this from make,model... to date so that we don't need all of that and we can leave it up to our users
    if (!data.make || !data.model || !data.year || !data.miles || !data.price || !data.description || !data.img) {
      throw new Error("Invalid Auto Creation")
    } // WE need this because if someone does not enter the required information, you can't let them create a new auto object
    this.make = data.make
    this.model = data.model
    this.year = data.year
    this.miles = data.miles
    this.price = data.price
    this.description = data.description
    this.img = data.img
  }
}