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
    // methods
    checkRelationshipStatus(){
        if((this.members[0].gender === 'male' && this.members[1]==='female') || (this.members[0].gender === 'female' && this.members[1] == 'male')){
            if(this.connection === 100 && this._dating===false){
                console.log(`congratulations You ${this.members[0].name} and ${this.members[1].name} just started dating`)
                this._dating= true
            }
            else if ((this._dating === true) && (this.connection> 60 && this.connection<80)){ 
                console.log(`You ${this.members[0].name} and ${this.members[1].name} are close to breaking up`)
            }
            else if (this.dating === true && this.connection<60){
                console.log(`You ${this.members[0].name} and ${this.members[1].name} break up`)
                this._dating = false
            }
        }
        else{
            this._dating = 'NOT POSSIBLE'
        }


    }
}
