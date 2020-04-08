class Employment {
  constructor(
    companyName,
    location,
    jobTitle,
    supervisor,
    jobDuties,
    numberOfHours,
    payRate
  ) {
    this._companyName = companyName;
    this._location = location;
    this._jobTitle = jobTitle;
    this._supervisor = supervisor;
    this._startDate = new Date();
    this._jobDuties = jobDuties;
    this._numberOfHours = numberOfHours;
    this._payRate = payRate;
    this._endDate;
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
    this._companyName = newLocation;
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
  get numberOfHours() {
    return this._numberOfHours;
  }
  set numberOfHours(hours) {
    this._numberOfHours = hours;
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
}
