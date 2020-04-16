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
  0,
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
  ['self', 0],
];

describe('testing Marriage class', () => {
  it('it will create a marriage', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.members[0].name).to.deep.equal('Daniel');
    expect(danielLeah.members[1].name).to.deep.equal('Leah');
  });
  it('it will add the money from the two married people together', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.money).to.equal(40);
  });
  it('it will set the connection value', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.connection).to.equal(100);
  });
  it('it will get the connection', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    danielLeah.connection = 6;
    let tempConnection = danielLeah.connection;
    expect(danielLeah.connection).to.equal(tempConnection);
  });
  it('it will keep the activity history', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    danielLeah.addActivity('golf', 'boardgames', 'swing dancing');
    danielLeah.removeHobby('boardgames');
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.activityHistory).to.deep.equal(['golf', 'swing dancing']);
  });
  it('it will add to the activity history', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    danielLeah.addActivity('golf', 'boardgames', 'swing dancing');
    danielLeah.removeHobby('boardgames');
    danielLeah = new Marriage(danielLeah);
    danielLeah.addActivity('video chat', 'hiking');
    expect(danielLeah.activityHistory).to.deep.equal([
      'video chat',
      'hiking',
      'golf',
      'swing dancing',
    ]);
  });
  it('it will test to see if the start dating date and the wedding dates are different', () => {
    let daniel = new Person(...person1Details);
    let leah = new Person(...person2Details);
    let danielLeah = new Relationship(daniel, leah);
    let danielLeahMarriage = new Marriage(danielLeah);
    expect(danielLeah.startDatingDate).to.not.deep.equal(
      danielLeahMarriage.weddingDay
    );
  });
});
