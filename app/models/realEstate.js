export default class Estates {
  constructor(data) {
    if (!data.rooms || !data.sqft || !data.price || !data.garageSize || !data.img) {
      throw new Error("Invalid Real Estate Creation")
    }
    this.price = data.price
    this.sqft = data.sqft
    this.rooms = data.rooms
    this.garageSize = data.garageSize
    this.img = data.img
  }
} 