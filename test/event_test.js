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
  it('study will increase intelligence', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.study(daniel);
    expect(daniel.intelligence).to.be.greaterThan(100);
  });
  it('I will not be asked to come for an interview', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.apply(daniel, 6);
    expect(daniel.numberOfApp).to.equal(1);
    expect(daniel.jobMessage).to.deep.equal(
      `Due to the high volume of applicants we regrate to inform you we went with another candidate`
    );
  });
  it('I will  be asked to come for an interview because I networked', () => {
    let daniel = new Person(...danielDetails);
    daniel.networking = true;
    daniel = Event.apply(daniel, 7);
    expect(daniel.numberOfApp).to.equal(1);
    expect(daniel.jobMessage).to.deep.equal(
      `congratulations you moved on to the second round`
    );
  });
  it('I will  be asked to come for an interview because the number is 0', () => {
    let daniel = new Person(...danielDetails);
    daniel = Event.apply(daniel, 0);
    expect(daniel.numberOfApp).to.equal(1);
    expect(daniel.jobMessage).to.deep.equal(
      `congratulations you moved on to the second round`
    );
  });
});
