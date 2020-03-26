const Relationship = require('../src/Relationship');

class Marriage extends Relationship {
  constructor(...relationshipDetails) {
    super(...relationshipDetails);
    this.message = 'this is only a test';
  }
}
module.exports = Marriage;
