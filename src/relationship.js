const Person = require('./Person');
class Relationship {
  constructor(person1, person2) {
    this._members = [person1, person2];
    this._activityHistory = [];
    this._connection = 0;
    this._dating = false;
  }
  // SETTERS AND GETTERS

// members
  get members(){
      return this._members
  }
  set members(person1,person2){
      this._members =  [person1,person2]
  }

  // activity History
  get activityHistory(){
      return this._activityHistory
  }
  set activityHistory(newHistory){
      this._activityHistory = newHistory
  }

  // connection
  get connection(){
      return this._connection
  }
  set connection(newConnecton){
      this._connection = newConnecton
  }

  // dating
  get dating{
      return this._dating
  }
  set dating(dating){
      this._dating = dating
  }
}
