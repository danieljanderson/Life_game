const Person = require('../src/Person');
const Marriage = require('../src/Marriage');
const Relationship = require('../src/Relationship');
const Employment = require('../src/Employment');
const Event = require('../src/Event');
const chai = require('chai');
const expect = chai.expect;
const danielDetails = [
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
  'na',
  [],
  0,
];
const jobDetailsDaniel = [
  'State Farm',
  'Strongsville',
  'Programmer',
  'John Smith',
  'I write code for a living.  I make apis using C#',
  40,
  20,
];
describe('tests event class', () => {
  it('test the paycheck method', () => {
    let daniel = new Person(...danielDetails);
    const danieljob = new Employment(...jobDetailsDaniel);
    daniel.currentJob = danieljob;
    daniel = Event.payDay(daniel);
    expect(daniel.money).to.equal(810);
  });
});
