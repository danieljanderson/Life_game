//This file is strickly to help look up where data is stored in the object.

const Person = require('../src/Person');
const Marriage = require('../src/Marriage');
const Relationship = require('../src/Relationship');
const Employment = require('../src/Employment');

describe('it combines all the classes', () => {
  // it('it will store the job object in the person object', () => {
  //   const daniel = new Person(...danielDetails);
  //   const emily = new Person(...emilyDetails);
  //   const danielJob = new Employment(...jobDetailsDaniel);
  //   const emilyJob = new Employment(...jobDetailsEmily);
  //   daniel.currentJob = danielJob;
  //   emily.currentJob = emilyJob;
  //   expect(daniel.currentJob).to.deep.equal(danielJob);
  //   expect(emily.currentJob).to.deep.equal(emilyJob);
  // });
  // it('it will add the old job to history', () => {
  //   const daniel = new Person(...danielDetails);
  //   const danielJob = new Employment(...jobDetailsDaniel);
  //   daniel.currentJob = danielJob;
  //   daniel.getNewJob(new Employment(...jobDetailsEmily));
  //   const testJob = new Employment(...jobDetailsEmily);
  //   expect(daniel.currentJob).to.deep.equal(testJob);
  //   expect(daniel.employmentHistory).to.deep.equal([danielJob]);
  // });
  // it('it will test the get fired method', () => {
  //   const daniel = new Person(...danielDetails);
  //   const danielJob = new Employment(...jobDetailsDaniel);
  //   daniel.currentJob = danielJob;
  //   daniel.getFired();
  //   expect(daniel.currentJob).to.deep.equal('unemployed');
  //   expect(daniel.employmentHistory).to.deep.equal([danielJob]);
  // });
  it('will display the payrate and number of hours', () => {
    const daniel = new Person();
    const danielJob = new Employment();
    danielJob.numberOfHours = 40
    danielJob.payRate = 20
    daniel.currentJob = danielJob;
    expect(daniel.currentJob.payRate).toBe(20);
    expect(daniel.currentJob.numberOfHours).toBe(40);
  });
});
