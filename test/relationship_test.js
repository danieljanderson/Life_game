const Person = require('../src/Person');
const Relationship = require('../src/Relationship');
const chai = require('chai');
const expect = chai.expect;
const person1Details = [
  'Daniel',
  'June,4',
  'Male',
  10,
  50,
  //feelings
  45,
  //intelligence
  100,
  ['golf', 'board_games'],
  'Strongsville',
  'state farm',
  ['self'],
  0
];
const person2Details = [
  'Janna',
  'May, 4',
  'Female',
  30,
  40,
  70,
  200,
  ['golf', 'movies'],
  'Parma',
  'Great Lake Cheese',
  ['self', 0]
];

describe('Testing Relationship.js', () => {
  it('it will retrieve the members', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJana = new Relationship(daniel, janna);
    expect(danielJana.members[0].name).to.deep.equal('Daniel');
    expect(danielJana.members[1].name).to.deep.equal('Janna');
  });
});
