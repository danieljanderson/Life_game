const Relationship = require('../src/Relationship');

class Marriage extends Relationship {
  constructor(relationshipDetails) {
    super(relationshipDetails.members[0], relationshipDetails.members[1]);
    this.message = 'this is only a test';
  }
}
module.exports = Marriage;
