const Relationship = require('../src/Relationship');

class Marriage extends Relationship {
  constructor(relationshipDetails) {
    super(relationshipDetails.members[0], relationshipDetails.members[1]);
    console.log(relationshipDetails.members[0].money);
    console.log(relationshipDetails.members[1].money);
    this._money =
      relationshipDetails.members[0].money +
      relationshipDetails.members[1].money;
    this._weddingDay = new Date();
    this._relationshipStatus = 'newlyWeds';
    this._connection = 100;
    this._dating = true;
  }
  get money() {
    return this._money;
  }
  set money(newAmount) {
    this._money = newAmount;
  }
  get relationshipStatus() {
    return this._relationshipStatus;
  }
  set relationshipStatus(newStatus) {
    this._relationshipStatus = newStatus;
  }
  get connection() {
    return this._connection;
  }
  set connection(newAmount) {
    this._connection = newAmount;
  }
  checkRelationshipStatus() {
    if (this._connection < 100 && this._connection >= 80) {
      this._relationshipStatus = `You ${this.members[0].name} and ${this.members[1].name} are in a great marriage`;
    } else if (this.connection > 60 && this.connection < 80) {
      this._relationshipStatus = `You ${this.members[0].name} and ${this.members[1].name}  should get some marriage counseling`;
    } else {
      this._relationshipStatus = `You ${this.members[0].name} and ${this.members[1].name} signed up for marriage counseling `;
    }
  }
}
module.exports = Marriage;
