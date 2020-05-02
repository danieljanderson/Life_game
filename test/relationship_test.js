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
  0,
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
  ['self', 0],
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
    expect(danielJanna.activityHistory).to.deep.equal([]);
  });
  it('it will get activity history', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.activityHistory = ['Movies', 'Golf'];
    let testGet = danielJanna.activityHistory;
    expect(danielJanna.activityHistory).to.deep.equal(testGet);
  });

  // testing the getter and setters for the connection property
  it('it will set the connection value', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.connection).to.equal(0);
  });
  it('it will get the connection', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.connection = 6;
    let tempConnection = danielJanna.connection;
    expect(danielJanna.connection).to.equal(tempConnection);
  });

  // testing the getters and setters for dating property
  it('it will get the dating property', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.dating).to.equal(false);
  });
  it('it will set the dating property', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.dating = true;
    expect(danielJanna.dating).to.equal(true);
  });

  // testing the getters and setters for start dating date
  it('it will get start dating date', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.startDatingDate).to.deep.equal(new Date());
  });
  it('it will set the start date when they started to date', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.startDatingDate = '2020-07-08T17:17:46.123Z';
    expect(danielJanna.startDatingDate).to.deep.equal(
      '2020-07-08T17:17:46.123Z'
    );
  });

  // this will change dating status automatically
  it('it will not be possible because both persons are males', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    janna.gender = 'Male';
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.checkRelationshipStatus();
    expect(danielJanna.relationshipStatus).to.deep.equal('NOT POSSIBLE');
  });
  it('dating status will say started to date', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.connection = 100;
    danielJanna.checkRelationshipStatus();
    expect(danielJanna.relationshipStatus).to.deep.equal(
      `congratulations You Daniel and Janna just started dating`
    );
    expect(danielJanna.dating).to.equal(true);
  });
  it('dating relationship status will say close to breakup', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.connection = 100;
    danielJanna.checkRelationshipStatus();
    danielJanna.connection = 65;
    danielJanna.checkRelationshipStatus();
    expect(danielJanna.relationshipStatus).to.deep.equal(
      `You Daniel and Janna are close to breaking up`
    );
    expect(danielJanna.dating).to.equal(true);
  });
  it('dating relationship status will say you broke up', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    let endDate;
    danielJanna.connection = 100;
    danielJanna.checkRelationshipStatus();
    danielJanna.connection = 0;
    danielJanna.checkRelationshipStatus();
    endDate = danielJanna.endDatingDate;
    expect(danielJanna.relationshipStatus).to.deep.equal(
      `You Daniel and Janna break up`
    );
    expect(danielJanna.dating).to.equal(false);
    expect(danielJanna.endDatingDate).to.deep.equal(endDate);
  });
  it('it will get the persons names', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    let memberNames = danielJanna.getMemberNames();
    expect(memberNames).to.deep.equal(['Daniel', 'Janna']);
  });
  it('it will add a activity', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.addActivity('Golf');
    expect(danielJanna.activityHistory).to.deep.equal(['Golf']);
  });
  it('it will add multiple activity', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.addActivity('golf', 'boardgames', 'swing dancing');
    expect(danielJanna.activityHistory).to.deep.equal([
      'golf',
      'boardgames',
      'swing dancing',
    ]);
  });
  it('it will remove an activity', () => {
    let daniel = new Person(...person1Details);
    let janna = new Person(...person2Details);
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.addActivity('golf', 'boardgames', 'swing dancing');
    danielJanna.removeHobby('boardgames');
    expect(danielJanna.activityHistory).to.deep.equal([
      'golf',
      'swing dancing',
    ]);
  });
});
