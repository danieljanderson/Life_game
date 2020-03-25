class Person {
  constructor(
    name,
    birthdate,
    gender,
    money,
    charisma,
    feeling,
    intelligence,
    hobbies,
    location,
    currentJob,
    employmentHistory,
    numberOfApp,
    car
  ) {
    this._name = name;
    this._birthdate = birthdate;
    this._gender = gender;
    this._money = money;
    this._charisma = charisma;
    this._feeling = feeling;
    this._intelligence = intelligence;
    this._hobbies = hobbies;
    this._location = location;
    this._currentJob = currentJob;
    this._employmentHistory = employmentHistory;
    this._numberOfApp = numberOfApp;
    this._hasCar = car;
  }
  // getters and setters
  // get and set for names
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
  // get and set birthdate
  get birthdate() {
    return this._birthdate;
  }
  set birthdate(newBirthdate) {
    this._birthdate = newBirthdate;
  }
  // get and set gender
  get gender() {
    return this._gender;
  }
  set gender(newGender) {
    this._gender = newGender;
  }
  //get and set for money
  get money() {
    return this._money;
  }
  set money(newAmount) {
    this._money = newAmount;
  }
  // get and set for charisma
  get charisma() {
    return this._charisma;
  }
  set charisma(newCharm) {
    this._charisma = newCharm;
  }
  // get and set for feeling
  get feeling() {
    return this._feeling;
  }
  set feeling(newFeeling) {
    this._feeling = newFeeling;
  }
  // get and set intelligence
  get intelligence() {
    return this._intelligence;
  }
  set intelligence(newIntelligence) {
    this._intelligence = newIntelligence;
  }
  // get and set hobbies
  get hobbies() {
    return this._hobbies;
  }
  set hobbies(newHobby) {
    this._hobbies = newHobby;
  }
  // get and set location
  get location() {
    return this._location;
  }
  set location(newLocation) {
    this._location = newLocation;
  }
  //get and set currentEmployer
  get currentJob() {
    return this._currentJob;
  }
  set currentJob(newEmployer) {
    this._currentJob = newEmployer;
  }
  // get and set employmentHistory
  get employmentHistory() {
    return this._employmentHistory;
  }
  set employmentHistory(newJob) {
    this._employmentHistory = newJob;
  }
  // get and set numberApps
  get numberOfApp() {
    return this._numberOfApp;
  }
  set numberOfApp(newAmount) {
    this._numberOfApp = newAmount;
  }
  // get and set for car property
  get hasCar() {
    return this._hasCar;
  }
  set hasCar(car) {
    this._hasCar = car;
  }

  //methods
  //todo add methods for adding a hobbie and then one for losing a hobby

  // hobbie methods
  addHobby(newHobby, ...otherHobbies) {
    //this makes a deep copy of hobbies
    this.hobbies = [newHobby, ...otherHobbies, ...this.hobbies];
  }
  removeHobby(Hobby) {
    // this finds the hobby to remove from the Hobby array and removes it
    this._hobbies.splice(this._hobbies.indexOf(Hobby), 1);
    //this reasigns the hard copy to the new hobbies array
    this._hobbies = this._hobbies;
  }
  //job methods
  applyForJob() {
    this._numberOfApp++;
  }
  getNewJob(newJob) {
    if (this._currentJob !== 'unemployed') {
      this._employmentHistory = [this._currentJob, ...this._employmentHistory];
      this._currentJob = newJob;
    } else {
      this._currentJob = newJob;
    }
  }
  getFired() {
    this._employmentHistory = [this._currentJob, ...this.employmentHistory];
    this._currentJob = 'unemployed';
  }

  //feeling methods
  depression(newFeeling) {
    this._feeling = this._feeling - newFeeling;
  }
  excited(newFeeling) {
    this._feeling = this._feeling + newFeeling;
  }

  // money methods
  deposit(amount) {
    this._money = this._money + amount;
  }
  withdrawal(amount) {
    this._money = this._money - amount;
  }
}

module.exports = Person;
