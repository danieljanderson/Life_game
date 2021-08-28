import Employment from '../src/Employment';

describe('Employment.js', () => {
  it('get the company name', () => {
    let job = new Employment();
    job.companyName = 'State Farm'
    expect(job.companyName).toEqual('State Farm');
  });
  
  it('get the location', () => {
    let job = new Employment();
    job.location = 'Strongsville'
    expect(job.location).toEqual('Strongsville');
  });
  
  it('will get the job title', () => {
    let job = new Employment();
    job.jobTitle = 'Programmer'
    expect(job.jobTitle).toEqual('Programmer');
  });
 
  it('will get supervisor', () => {
    let job = new Employment();
    job.supervisor = 'John Smith'
    expect(job.supervisor).toEqual('John Smith');
  });
  
  it('will get job details', () => {
    let job = new Employment();
    job.jobDuties ='I write code for a living.  I make apis using C#'
    expect(job.jobDuties).toEqual('I write code for a living.  I make apis using C#');
  });
  it('will get the number of hours per week', () => {
    let job = new Employment();
    job.numberOfHours = 40
    expect(job.numberOfHours).toBe(40);
  });
  it('will get the pay rate', () => {
    let job = new Employment();
    job.payRate = 80;
    expect(job.payRate).toBe(80);
  });
  it('will calculate the paycheck', () => {
    let job = new Employment();
    job.numberOfHoursWorked = 40
    job.payRate =20
    let money = job.payCheck();
    expect(money).toBe(800);
  });
  it('get a promotion with pay raise, a new job title, new job duties', () => {
    let job = new Employment();
    job.payRate = 20
    job.promotion(5, 'programming manager', 'i boss people around all day');
    expect(job.payRate).toBe(25);
    expect(job.jobTitle).toEqual('programming manager');
    expect(job.jobDuties).toEqual('i boss people around all day');
  });
  it('get a payraise but keep the same job title and job duties', () => {
    let job = new Employment();
    job.payRate = 20
    job.promotion(5);
    job.jobTitle = 'Programmer'
    job.jobDuties = 'I write code for a living. I make apis using C#'
    expect(job.payRate).toBe(25);
    expect(job.jobTitle).toEqual('Programmer');
    expect(job.jobDuties).toEqual('I write code for a living. I make apis using C#');
  });
  it('get a promotion with a payraise, new job title, but same duties', () => {
    let job = new Employment();
    job.payRate =20
    job.promotion(5, 'ITO');
    job.jobDuties =  'I write code for a living.  I make apis using C#' 
    expect(job.payRate).toBe(25);
    expect(job.jobTitle).toEqual('ITO');
    expect(job.jobDuties).toEqual('I write code for a living.  I make apis using C#');
  });
  it('will run the fired method', () => {
    let job = new Employment();
    job.companyName = 'State Farm'
    job.fired();
    expect(job.endDate).toBeInstanceOf(Date);
  });
});
