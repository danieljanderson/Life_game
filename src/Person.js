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
    currentEmployer,
    employmentHistory,
    numberOfApplications
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
    this._currentEmployer = currentEmployer;
    this._employmentHistory = employmentHistory;
    this._numberOfApplications = numberOfApplications;
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
  get currentEmployer() {
    return this._currentEmployer;
  }
  set currentEmployer(newEmployer) {
    this._currentEmployer = newEmployer;
  }
  // get and set employmentHistory
  get employmentHistory() {
    return this._employmentHistory;
  }
  set employmentHistory(newJob) {
    this._employmentHistory.push(newJob);
  }
  //methods
  applyForJobs() {
    this._numberOfApplications++;
  }
  depression(newFeeling) {
    this._feeling = this._feeling - newFeeling;
  }
  excited(newFeeling) {
    this._feeling = this._feeling + newFeeling;
  }
  deposit(amount) {
    this._money = this._money + amount;
  }
  withdrawal(amount) {
    this._money = this._money - amount;
  }
}
module.exports = Person;
