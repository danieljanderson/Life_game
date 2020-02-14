const Person = require('../src/Person');
const chai = require('chai');
const expect = chai.expect;
const personDetails = [
  'Daniel',
  'June,4',
  'Male',
  10,
  50,
  45,
  100,
  ['golf', 'board_games'],
  'Strongsville',
  'self',
  null
];

describe('person.js', () => {
  it('will retrieve the name', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.name).to.deep.equal('Daniel');
  });
  it('will set the name', () => {
    let daniel = new Person(...personDetails);
    daniel.name = 'Todd';
    expect(daniel.name).to.deep.equal('Todd');
  });
});
