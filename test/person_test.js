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
  //the name property
  it('will retrieve the name', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.name).to.deep.equal('Daniel');
  });
  it('will set the name', () => {
    let daniel = new Person(...personDetails);
    daniel.name = 'Todd';
    expect(daniel.name).to.deep.equal('Todd');
  });

  // the birthdate property
  it('retrieve the birthdate', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.birthdate).to.deep.equal('June,4');
  });
  it('will set the birthdate', () => {
    let daniel = new Person(...personDetails);
    daniel.birthdate = 'May 3';
    expect(daniel.birthdate).to.deep.equal('May 3');
  });

  // the gender property
  it('will retrieve the gender', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.gender).to.deep.equal('Male');
  });
  it('it will set the gender', () => {
    let daniel = new Person(...personDetails);
    daniel.gender = 'M';
    expect(daniel.gender).to.deep.equal('M');
  });
});
