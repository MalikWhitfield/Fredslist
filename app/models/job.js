export default class Job {
  constructor(data) {
    if (!data.pay || !data.hours || !data.location || !data.benefits) {
      throw new Error("Invalid ")
    }

    this.pay = data.pay
    this.hours = data.hours
    this.location = data.location
    this.benefits = data.benefits
  }
}