const Employment = require('../src/Employment');
const chai = require('chai');
const expect = chai.expect;
const employmentDetails = [
  'State Farm',
  'Strongsville',
  'Programmer',
  'John Smith',
  'I write code for a living.  I make apis using C#',
  40,
  20,
];
describe('Employment.js', () => {
  it('get the company name', () => {
    let job = new Employment(...employmentDetails);
    expect(job.companyName).to.deep.equal('State Farm');
  });
  it('will set the company name', () => {
    let job = new Employment(...employmentDetails);
    job.companyName = 'test';
    expect(job.companyName).to.deep.equal('test');
  });
  it('get the location', () => {
    let job = new Employment(...employmentDetails);
    expect(job.location).to.deep.equal('Strongsville');
  });
  it('it will set the location', () => {
    let job = new Employment(...employmentDetails);
    job.location = 'Cleveland';
    expect(job.location).to.deep.equal('Cleveland');
  });
  it('it will get the job title', () => {
    let job = new Employment(...employmentDetails);
    expect(job.jobTitle).to.deep.equal('Programmer');
  });
  it('it will set the the job title', () => {
    let job = new Employment(...employmentDetails);
    job.jobTitle = 'web developer';
    expect(job.jobTitle).to.deep.equal('web developer');
  });
  it('it will get supervisor', () => {
    let job = new Employment(...employmentDetails);
    expect(job.supervisor).to.deep.equal('John Smith');
  });
  it('it will set the supervisor', () => {
    let job = new Employment(...employmentDetails);
    job.supervisor = 'Bob Taylor';
    expect(job.supervisor).to.deep.equal('Bob Taylor');
  });
  it('it will get job details', () => {
    let job = new Employment(...employmentDetails);
    expect(job.jobDuties).to.deep.equal(
      'I write code for a living.  I make apis using C#'
    );
  });
  it('it will set the job details', () => {
    let job = new Employment(...employmentDetails);
    job.jobDuties = 'I write code';
    console.log(job.jobDuties);
    expect(job.jobDuties).to.deep.equal('I write code');
  });
  it('it will get the number of hours per week', () => {
    let job = new Employment(...employmentDetails);
    expect(job.numberOfHours).to.equal(40);
  });
  it('it will set the hours', () => {
    let job = new Employment(...employmentDetails);
    job.numberOfHours = 30;
    expect(job.numberOfHours).to.equal(30);
  });
  it('it will get the pay rate', () => {
    let job = new Employment(...employmentDetails);
    job.payRate = 80;
    expect(job.payRate).to.equal(80);
  });
  it('it will calculate the paycheck', () => {
    let job = new Employment(...employmentDetails);
    money = job.payCheck();
    expect(money).to.equal(800);
  });
  it('it will give you a promotion', () => {});
});
