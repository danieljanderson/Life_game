class Person {
  constructor(
    name,
    birthdate,
    gender,
    money,
    charisma,
    determination,
    intelligence,
    hobbies,
    location,
    employmentHistory,
    numberOfApplications
  ) {
    this._name = name;
    this._birthdate = birthdate;
    this._gender = gender;
    this._money = money;
    this._charisma = charisma;
    this._determination = determination;
    this._intelligence = intelligence;
    this._hobbies = hobbies;
    this._location = location;
    this._employmentHistory = employmentHistory;
    this._numberOfApplications = numberOfApplications;
  }
  set money(newAmount) {
    this._money = newAmount + this._money;
  }
  set charisma(newCharm) {
    this._charisma = newCharm + this._charisma;
  }
  set determination(newDetermination) {
    this._determination = newDetermination + this._determination;
  }
  set hobbies(newHobby) {
    this._hobbies.push(newHobby);
  }
  set location(newLocation) {
    this._location = newLocation;
  }
  set employmentHistory(newJob) {
    this._employmentHistory.push(newJob);
  }
  applyForJobs() {
    this._numberOfApplications++;
  }
}
