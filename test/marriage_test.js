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
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    console.log('this is danielLeah for relationship ');
    console.log(danielLeah.members[0].name);
    //console.log(danielLeah);
    danielLeah = new Marriage(danielLeah);
    console.log('this is danielLeah for marriage ');
    console.log(danielLeah.members[0].name);
    expect(danielLeah.members[0].name).to.deep.equal('Danel');
    //expect(danielLeah.members[1].name).to.deep.equal('Leah');
  });
});
