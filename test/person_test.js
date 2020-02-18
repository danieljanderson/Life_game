const Person = require('../src/Person');
const chai = require('chai');
const expect = chai.expect;
const personDetails = [
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
  'self',
  null
];

describe('person.js', () => {
  // testing the getters and setters

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

  // the money property
  it('retrieve the money', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.money).to.equal(10);
  });
  it('it will set the money', () => {
    let daniel = new Person(...personDetails);
    daniel.money = 60;
    expect(daniel.money).to.equal(60);
  });

  // the charisma property
  it('it will retrieve the charisma', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.charisma).to.equal(50);
  });
  it('it will set the charisma', () => {
    let daniel = new Person(...personDetails);
    daniel.charisma = 789;
    expect(daniel.charisma).to.equal(789);
  });

  // feeling property
  it('it will retrieve the feelings', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.feeling).to.equal(45);
  });
  it('it will set the feeling property', () => {
    let daniel = new Person(...personDetails);
    daniel.feeling = 80;
    expect(daniel.feeling).to.equal(80);
  });

  // intelligence property
  it('it will retrieve the intelligence', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.intelligence).to.equal(100);
  });
  it('it will set the intelligence', () => {
    let daniel = new Person(...personDetails);
    daniel.intelligence = 900;
    expect(daniel.intelligence).to.equal(900);
  });

  //hobbies property
  it('it will retrieve the hobbies array', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.hobbies).to.deep.equal(['golf', 'board_games']);
  });
  it('it will set the hobbies', () => {
    let daniel = new Person(...personDetails);
    daniel.hobbies = ['coding', 'baseball'];
    expect(daniel.hobbies).to.deep.equal(['coding', 'baseball']);
  });

  // location
  it('it will retrieve the location', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.location).to.deep.equal('Strongsville');
  });
  it('it will set the location', () => {
    let daniel = new Person(...personDetails);
    daniel.location = 'Akron';
    expect(daniel.location).to.deep.equal('Akron');
  });
});
