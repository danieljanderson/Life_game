class Employment {
  constructor(
   
  ) {
    this._companyName = '';
    this._location = '';
    this._jobTitle = '';
    this._supervisor = '';
    this._startDate = new Date();
    this._jobDuties = '';
    this._numberOfHoursWorked = 0;
    this._payRate = 0;
    this._endDate = new Date();
  }
  // set and getters
  get companyName() {
    return this._companyName;
  }
  set companyName(name) {
    this._companyName = name;
  }
  get location() {
    return this._location;
  }
  set location(newLocation) {
    this._location = newLocation;
  }
  get jobTitle() {
    return this._jobTitle;
  }
  set jobTitle(newJobTitle) {
    this._jobTitle = newJobTitle;
  }
  get supervisor() {
    return this._supervisor;
  }
  set supervisor(boss) {
    this._supervisor = boss;
  }
  get startDate() {
    return this._startDate;
  }
  set startDate(firstDay) {
    this._startDate = firstDay;
  }
  get jobDuties() {
    return this._jobDuties;
  }
  set jobDuties(taskes) {
    this._jobDuties = taskes;
  }
  get numberOfHoursWorked() {
    return this._numberOfHoursWorked;
  }
  set numberOfHoursWorked(hours) {
    this._numberOfHoursWorked = hours;
  }
  get payRate() {
    return this._payRate;
  }
  set payRate(newRate) {
    this._payRate = newRate;
  }
  get endDate() {
    return this._endDate;
  }
  set endDate(date) {
    this._endDate = date;
  }
  // methods
  payCheck() {
    return this._numberOfHoursWorked * this._payRate;
  }
  raise(newRate) {
    this._payRate = this._payRate + newRate;
  }
  // methods
  promotion(newPayrate, newTitle, newJobDudies) {
    if (newTitle === undefined || newTitle === this.jobTitle) {
      //           // if you got a raise but kept the same job title than this should keep the same job title
      this._jobTitle = this._jobTitle;
    } else {
      this._jobTitle = newTitle;
    }
    if (newJobDudies === undefined) {
      this._jobDuties = this._jobDuties;
    } else {
      this._jobDuties = newJobDudies;
    }
    this.raise(newPayrate);
  }
  fired() {
    this._endDate = new Date();
  }
}
//module.exports = Employment;
export default Employment
