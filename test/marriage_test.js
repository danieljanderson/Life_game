const Person = require('../src/Person');
const Marriage = require('../src/Marriage');
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
  'Leah',
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

describe('testing Marriage class', () => {
  it('it will create a marriage', () => {
    let danielLeah = new Relationship(person1Details, person2Details);
    console.log('this is danielLeah for relationship ');
    console.log(danielLeah);
    danielLeah = new Marriage(danielLeah);
    console.log('this is danielLeah for marriage ');
    console.log(danielLeah);
    expect(danielLeah.members[0].name).to.deep.equal('Daniel');
    expect(danielLeah.members[1].name).to.deep.equal('Leah');
  });
});
