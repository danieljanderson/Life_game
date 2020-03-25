class Relationship {
  constructor(person1, person2) {
    this._members = [person1, person2];
    this._activityHistory = [];
    this._connection = 0;
    this._dating = false;
    this._startDatingDate = new Date();
    this._datingStatus = '';
    this._endDatingDate;
  }
  // SETTERS AND GETTERS

  // members
  get members() {
    return this._members;
  }
  set members([newMembers]) {
    this._members = newMembers;
  }

  // activity History
  get activityHistory() {
    return this._activityHistory;
  }
  set activityHistory(newHistory) {
    this._activityHistory = newHistory;
  }

  // connection
  get connection() {
    return this._connection;
  }
  set connection(newConnecton) {
    this._connection = newConnecton;
  }

  // dating
  get dating() {
    return this._dating;
  }
  set dating(dating) {
    this._dating = dating;
  }

  // start dating
  get startDatingDate() {
    return this._startDatingDate;
  }
  set startDatingDate(date) {
    this._startDatingDate = date;
  }

  // end dating
  get endDatingDate() {
    return this._endDatingDate;
  }
  set endDatingDate(endDate) {
    this._endDatingDate = endDate;
  }

  // relationship status
  get datingStatus() {
    return this._datingStatus;
  }
  set datingStatus(newStatus) {
    this._datingStatus = newStatus;
  }
  // methods
  checkRelationshipStatus() {
    if (
      (this.members[0].gender === 'Male' &&
        this.members[1].gender === 'Female') ||
      (this.members[0].gender === 'Female' && this.members[1].gender == 'Male')
    ) {
      if (this.connection === 100 && this._dating === false) {
        this._datingStatus = `congratulations You ${this.members[0].name} and ${this.members[1].name} just started dating`;
        this._dating = true;
      } else if (
        this._dating === true &&
        this.connection > 60 &&
        this.connection < 80
      ) {
        this._datingStatus = `You ${this.members[0].name} and ${this.members[1].name} are close to breaking up`;
      } else if (this.dating === true && this.connection < 60) {
        this._datingStatus = `You ${this.members[0].name} and ${this.members[1].name} break up`;
        this._dating = false;
        this._endDatingDate = new Date();
      }
    } else {
      this._datingStatus = 'NOT POSSIBLE';
    }
  }
  getMemberNames() {
    return [this.members[0].name, this.members[1].name];
  }
  addActivity(newActivity) {
    this._activityHistory = [newActivity, ...this._activityHistory];
  }
  removeHobby(Activity) {
    //finds the activity in the activityHistory array and removes it
    this._activityHistory.splice(this._activityHistory.indexOf(Activity), 1);
    // reasigns the this._activityHistory to the new array
    this._activityHistory = this._activityHistory;
  }
}
module.exports = Relationship;
