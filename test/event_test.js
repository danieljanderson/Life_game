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
  it('it will remove the current job and add unemployed', () => {
    let daniel = new Person(...danielDetails);
    const danieljob = new Employment(...jobDetailsDaniel);
    daniel.currentJob = danieljob;
    daniel = Event.fired(daniel);
    expect(daniel.currentJob).to.deep.equal('unemployed');
    expect(daniel.feeling).to.be.below(45);
  });
  it('it will add state farm to the employment history', () => {
    let daniel = new Person(...danielDetails);
    const danielJob = new Employment(...jobDetailsDaniel);
    const job2 = [
      'Kemper',
      'Akron Ohio',
      'Programmer',
      'John Talyor',
      'I write node code',
      40,
      30,
    ];
    const newJob = new Employment(...job2);
    daniel.currentJob = danielJob;
    daniel = Event.hired(daniel, newJob);
    expect(daniel.employmentHistory).to.deep.equal([danielJob]);
    expect(daniel.currentJob).to.deep.equal(newJob);
  });
});
