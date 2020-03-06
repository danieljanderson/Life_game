const Person = require('../src/Person');
const chai = require('chai');
const expect = chai.expect;
const personDetails = [
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
  true
];

describe('person.js', () => {
  // testing the getters and setters

  //the name property
  it('will retrieve the name', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.name).to.deep.equal('Daniel');
  });
  it('will set the name', () => {
    let daniel = new Person(...personDetails);
    daniel.name = 'Todd';
    expect(daniel.name).to.deep.equal('Todd');
  });

  // the birthdate property
  it('retrieve the birthdate', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.birthdate).to.deep.equal('June,4');
  });
  it('will set the birthdate', () => {
    let daniel = new Person(...personDetails);
    daniel.birthdate = 'May 3';
    expect(daniel.birthdate).to.deep.equal('May 3');
  });

  // the gender property
  it('will retrieve the gender', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.gender).to.deep.equal('Male');
  });
  it('it will set the gender', () => {
    let daniel = new Person(...personDetails);
    daniel.gender = 'M';
    expect(daniel.gender).to.deep.equal('M');
  });

  // the money property
  it('retrieve the money', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.money).to.equal(10);
  });
  it('it will set the money', () => {
    let daniel = new Person(...personDetails);
    daniel.money = 60;
    expect(daniel.money).to.equal(60);
  });

  // the charisma property
  it('it will retrieve the charisma', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.charisma).to.equal(50);
  });
  it('it will set the charisma', () => {
    let daniel = new Person(...personDetails);
    daniel.charisma = 789;
    expect(daniel.charisma).to.equal(789);
  });

  // feeling property
  it('it will retrieve the feelings', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.feeling).to.equal(45);
  });
  it('it will set the feeling property', () => {
    let daniel = new Person(...personDetails);
    daniel.feeling = 80;
    expect(daniel.feeling).to.equal(80);
  });

  // intelligence property
  it('it will retrieve the intelligence', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.intelligence).to.equal(100);
  });
  it('it will set the intelligence', () => {
    let daniel = new Person(...personDetails);
    daniel.intelligence = 900;
    expect(daniel.intelligence).to.equal(900);
  });

  //hobbies property
  it('it will retrieve the hobbies array', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.hobbies).to.deep.equal(['golf', 'board_games']);
  });
  it('it will set the hobbies', () => {
    let daniel = new Person(...personDetails);
    daniel.hobbies = ['coding', 'baseball'];
    expect(daniel.hobbies).to.deep.equal(['coding', 'baseball']);
  });

  // location property
  it('it will retrieve the location', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.location).to.deep.equal('Strongsville');
  });
  it('it will set the location', () => {
    let daniel = new Person(...personDetails);
    daniel.location = 'Akron';
    expect(daniel.location).to.deep.equal('Akron');
  });

  // current employer property
  it('it will retrieve the employer', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.currentJob).to.deep.equal('state farm');
  });
  it('it will set the current employer', () => {
    let daniel = new Person(...personDetails);
    daniel.currentJob = 'Nationwide';
    expect(daniel.currentJob).to.deep.equal('Nationwide');
  });

  //employment history
  it('it will retrieve the employment history', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.employmentHistory).to.deep.equal(['self']);
  });
  it('it will set the employment history', () => {
    let daniel = new Person(...personDetails);
    daniel.employmentHistory = ['auto zone'];
    expect(daniel.employmentHistory).to.deep.equal(['auto zone']);
  });

  // has car
  it('it will retrieve the value if he has a car or not', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.hasCar).to.equal(true);
  });
  it('it will change the has car from true to false', () => {
    let daniel = new Person(...personDetails);
    daniel.hasCar = false;
    expect(daniel.hasCar).to.equal(false);
  });

  //number of apps
  it('it will retrieve the number of times someone applied for a job', () => {
    let daniel = new Person(...personDetails);
    expect(daniel.numberOfApp).to.equal(0);
  });
  it('it will set the number of apps', () => {
    let daniel = new Person(...personDetails);
    daniel.numberOfApp = 8;
    expect(daniel.numberOfApp).to.equal(8);
  });

  //METHODS

  // job related methods
  it('it will add a app to the number of apps', () => {
    let daniel = new Person(...personDetails);
    daniel.applyForJob();
    daniel.applyForJob();
    expect(daniel.numberOfApp).to.equal(2);
  });
  it('running the new job method will add the new job to the current job and shift the old job to employment history', () => {
    const daniel = new Person(...personDetails);
    daniel.getNewJob('Dairy Queen');
    expect(daniel.currentJob).to.deep.equal('Dairy Queen');
    expect(daniel.employmentHistory).to.deep.equal(['state farm', 'self']);
  });
  it('it will add two jobs to the job history', () => {
    const sam = new Person(...personDetails);
    sam.getNewJob('Autozone');
    sam.getNewJob('Miller');
    expect(sam.currentJob).to.deep.equal('Miller');
    expect(sam.employmentHistory).to.deep.equal([
      'Autozone',
      'state farm',
      'self'
    ]);
  });
  it('it will remove the current job and add unemployed', () => {
    const daniel = new Person(...personDetails);
    daniel.getFired();
    expect(daniel.currentJob).to.deep.equal('unemployed');
    expect(daniel.employmentHistory).to.deep.equal(['state farm', 'self']);
  });
  it('person will get fired from one and then get hired at another job', () => {
    const daniel = new Person(...personDetails);
    daniel.getFired();
    daniel.getNewJob('OEC');
    daniel.getNewJob('Hyland');
    expect(daniel.currentJob).to.deep.equal('Hyland');
    expect(daniel.employmentHistory).to.deep.equal([
      'OEC',
      'state farm',
      'self'
    ]);
  });
  it('it will subtract the feeling', () => {
    const daniel = new Person(...personDetails);
    daniel.depression(5);
    expect(daniel.feeling).to.equal(40);
  });
  it('it will add the feeling', () => {
    const daniel = new Person(...personDetails);
    daniel.excited(5);
    expect(daniel.feeling).to.equal(50);
  });
  it('it will add money', () => {
    const daniel = new Person(...personDetails);
    daniel.deposit(10);
    expect(daniel.money).to.equal(20);
  });
  it('it will subtract money', () => {
    const daniel = new Person(...personDetails);
    daniel.withdrawal(5);
    expect(daniel.money).to.equal(5);
  });
  it('it will add a hobbie', () => {
    const daniel = new Person(...personDetails);
    daniel.addHobby('coding');
    expect(daniel.hobbies).to.deep.equal(['coding', 'golf', 'board_games']);
  });
  it('it will remove a hobby', () => {
    const daniel = new Person(...personDetails);
    daniel.addHobby('basketball');
    daniel.addHobby('tennis');
    daniel.removeHobby('golf');
    console.log(daniel.hobbies);
    expect(daniel.hobbies).to.deep.equal([
      'tennis',
      'basketball',
      'board_games'
    ]);
  });
});
