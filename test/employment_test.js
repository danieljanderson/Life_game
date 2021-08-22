const Employment = require('../src/Employment');
const chai = require('chai');
const expect = chai.expect;

describe('Employment.js', () => {
  it('get the company name', () => {
    let job = new Employment();
    job.companyName = 'State Farm'
    expect(job.companyName).to.deep.equal('State Farm');
  });
  
  it('get the location', () => {
    let job = new Employment();
    job.location = 'Strongsville'
    expect(job.location).to.deep.equal('Strongsville');
  });
  
  it('it will get the job title', () => {
    let job = new Employment();
    job.jobTitle = 'Programmer'
    expect(job.jobTitle).to.deep.equal('Programmer');
  });
 
  it('it will get supervisor', () => {
    let job = new Employment();
    job.supervisor = 'John Smith'
    expect(job.supervisor).to.deep.equal('John Smith');
  });
  
  it('it will get job details', () => {
    let job = new Employment();
    job.jobDuties ='I write code for a living.  I make apis using C#'
    expect(job.jobDuties).to.deep.equal(
      'I write code for a living.  I make apis using C#'
    );
  });
  it('it will get the number of hours per week', () => {
    let job = new Employment();
    job.numberOfHours = 40
    expect(job.numberOfHours).to.equal(40);
  });
  it('it will get the pay rate', () => {
    let job = new Employment();
    job.payRate = 80;
    expect(job.payRate).to.equal(80);
  });
  it('it will calculate the paycheck', () => {
    let job = new Employment();
    job.numberOfHoursWorked = 40
    job.payRate =20
    let money = job.payCheck();
    expect(money).to.equal(800);
  });
  it('get a promotion with pay raise, a new job title, new job duties', () => {
    let job = new Employment();
    job.payRate = 20
    job.promotion(5, 'programming manager', 'i boss people around all day');
    expect(job.payRate).to.equal(25);
    expect(job.jobTitle).to.deep.equal('programming manager');
    expect(job.jobDuties).to.deep.equal('i boss people around all day');
  });
  it('get a payraise but keep the same job title and job duties', () => {
    let job = new Employment();
    job.payRate = 20
    job.promotion(5);
    job.jobTitle = 'Programmer'
    job.jobDuties = 'I write code for a living. I make apis using C#'
    expect(job.payRate).to.equal(25);
    expect(job.jobTitle).to.deep.equal('Programmer');
    expect(job.jobDuties).to.deep.equal(
      'I write code for a living. I make apis using C#'
    );
  });
  it('get a promotion with a payraise, new job title, but same duties', () => {
    let job = new Employment();
    job.payRate =20
    job.promotion(5, 'ITO');
    job.jobDuties =  'I write code for a living.  I make apis using C#' 
    expect(job.payRate).to.equal(25);
    expect(job.jobTitle).to.deep.equal('ITO');
    expect(job.jobDuties).to.deep.equal(
      'I write code for a living.  I make apis using C#'
    );
  });
  it('it will run the fired method', () => {
    let job = new Employment();
    job.companyName = 'State Farm'
    job.fired();
    expect(job.endDate).to.be.instanceOf(Date);
  });
});
