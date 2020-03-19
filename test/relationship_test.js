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
  // testing getting and setting functions
  it('it will retrieve the members', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJana = new Relationship(daniel, janna);
    expect(danielJana.members[0].name).to.deep.equal('Daniel');
    expect(danielJana.members[1].name).to.deep.equal('Janna');
  });
  it('it will change the names using the set', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let tonyLeah = new Relationship(daniel, janna);
    console.log('first person before the change ' + tonyLeah.members[0].name);
    console.log('second person beofe the change' + tonyLeah.members[1].name);
    daniel.name = 'Tony';
    janna.name = 'Leah';
    newName = [daniel, janna];
    tonyLeah.members = [newName];
    expect(tonyLeah.members[0].name).to.deep.equal('Tony');
    expect(tonyLeah.members[1].name).to.deep.equal('Leah');
  });
  // testing the setters and getters for activity property.

  //I have to test the setter for the the activity history because its not an argument in the constructor
  it('it will set activity history', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.activityHistory = ['Movies', 'Golf'];
    expect(danielJanna.activityHistory).to.deep.equal(['Movies', 'Golf']);
  });
  it('it will get activity history', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.activityHistory = ['Movies', 'Golf'];
    let testGet = danielJanna.activityHistory;
    expect(danielJanna.activityHistory).to.deep.equal(testGet);
  });
  it('it will override activity history', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.activityHistory = ['Movies', 'Golf'];
    danielJanna.activityHistory = ['Board Games', 'Hiking'];
    expect(danielJanna.activityHistory).to.deep.equal([
      'Board Games',
      'Hiking'
    ]);
  });
});
