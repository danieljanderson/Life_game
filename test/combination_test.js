const Person = require('../src/Person');
const Marriage = require('../src/Marriage');
const Relationship = require('../src/Relationship');
const Employment = require('../src/Employment');
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
const emilyDetails = [
  'Emily',
  'May 4',
  'Female',
  10,
  50,
  45,
  100,
  ['swing dance', 'interview people', 'write'],
  'Detroit',
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
const jobDetailsEmily = [
  'Self',
  'Detriot',
  'Storyteller',
  'no one is her supervisor',
  'tell stories',
  40,
  15,
];
describe('it combines all the classes', () => {
  it('it will store the job object in the person object', () => {
    const daniel = new Person(...danielDetails);
    const emily = new Person(...emilyDetails);
    const danielJob = new Employment(...jobDetailsDaniel);
    const emilyJob = new Employment(...jobDetailsEmily);
    daniel.currentJob = danielJob;
    emily.currentJob = emilyJob;
    expect(daniel.currentJob).to.deep.equal(danielJob);
    expect(emily.currentJob).to.deep.equal(emilyJob);
  });
  it('it will add the old job to history', () => {
    const daniel = new Person(...danielDetails);
    const danielJob = new Employment(...jobDetailsDaniel);
    daniel.currentJob = danielJob;
    daniel.getNewJob(new Employment(...jobDetailsEmily));
    const testJob = new Employment(...jobDetailsEmily);
    expect(daniel.currentJob).to.deep.equal(testJob);
    expect(daniel.employmentHistory).to.deep.equal([danielJob]);
  });
  it('it will test the get fired method', () => {
    const daniel = new Person(...danielDetails);
    const danielJob = new Employment(...jobDetailsDaniel);
    daniel.currentJob = danielJob;
    daniel.getFired();
    expect(daniel.currentJob).to.deep.equal('unemployed');
    expect(daniel.employmentHistory).to.deep.equal([danielJob]);
  });
});
