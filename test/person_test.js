const Person = require('../src/Person');
const chai = require('chai');
const expect = chai.expect;


describe('testing person.js class', () => {
  // testing the getters and setters

  //the name property
  it('will retrieve the name', () => {
    let daniel = new Person();
    daniel.name = 'Daniel'
    expect(daniel.name).to.deep.equal('Daniel');
  });
  // the birthdate property
  it('retrieve the birthdate', () => {
    let daniel = new Person();
    daniel.birthdate='June,4'
    expect(daniel.birthdate).to.deep.equal('June,4');
  });
  // the gender property
  it('will retrieve the gender', () => {
    let daniel = new Person();
    daniel.gender ='Male'
    expect(daniel.gender).to.deep.equal('Male');
  });

  // the money property
  it('retrieve the money', () => {
    let daniel = new Person();
    daniel.money = 10
    expect(daniel.money).to.equal(10);
  });

  // the charisma property
  it('it will retrieve the charisma', () => {
    let daniel = new Person();
    daniel.charisma = 50
    expect(daniel.charisma).to.equal(50);
  });
  // feeling property
  it('it will retrieve the feelings', () => {
    let daniel = new Person()
    daniel.feeling=45;
    expect(daniel.feeling).to.equal(45);
  });
  // intelligence property
  it('it will retrieve the intelligence', () => {
    let daniel = new Person();
    daniel.intelligence = 100
    expect(daniel.intelligence).to.equal(100);
  });
  
  //hobbies property
  it('it will retrieve the hobbies array', () => {
    let daniel = new Person();
    daniel.hobbies = ['golf','board_games']
    expect(daniel.hobbies).to.deep.equal(['golf', 'board_games']);
  });

  // location property
  it('it will retrieve the location', () => {
    let daniel = new Person();
    daniel.location ='Strongsville'
    expect(daniel.location).to.deep.equal('Strongsville');
  });
  // current employer property
  it('it will retrieve the employer', () => {
    let daniel = new Person();
    daniel.currentJob ='state farm'
    expect(daniel.currentJob).to.deep.equal('state farm');
  });
  //employment history
  it('it will retrieve the employment history', () => {
    let daniel = new Person();
    daniel.employmentHistory = ['self']
    expect(daniel.employmentHistory).to.deep.equal(['self']);
  });

  // has car
  it('it will retrieve the value if he has a car or not', () => {
    let daniel = new Person();
    daniel.numberCar =1
    expect(daniel.numberCar).to.equal(1);
  });
  //number of apps
  it('it will retrieve the number of times someone applied for a job', () => {
    let daniel = new Person();
    daniel.numberOfApp = 0
    expect(daniel.numberOfApp).to.equal(0);
  });
  //METHODS

  // job related methods
  it('it will add a app to the number of apps', () => {
    let daniel = new Person();
    daniel.applyForJob();
    daniel.applyForJob();
    expect(daniel.numberOfJobApp).to.equal(2);
  });
 
  it('it will change the networking to true', () => {
    const daniel = new Person();
    daniel.networking = true;
    expect(daniel.networking).to.deep.equal(true);
  });
  it('it will subtract the feeling', () => {
    const daniel = new Person();
    daniel.feeling = 45
    daniel.depression(5);
    expect(daniel.feeling).to.equal(40);
  });
  it('it will add the feeling', () => {
    const daniel = new Person();
    daniel.feeling = 45
    daniel.excited(5);
    expect(daniel.feeling).to.equal(50);
  });
  it('it will add money', () => {
    const daniel = new Person();
    daniel.money = 10
    daniel.deposit(10);
    expect(daniel.money).to.equal(20);
  });
  it('it will subtract money', () => {
    const daniel = new Person();
    daniel.money = 10
    daniel.withdrawal(5);
    expect(daniel.money).to.equal(5);
  });
  it('it will add a hobbie', () => {
    const daniel = new Person();
    daniel.hobbies =['golf','board_games']
    daniel.addHobby('coding');
    expect(daniel.hobbies).to.deep.equal(['coding', 'golf', 'board_games']);
  });
  it('it will add multiple hubbies',()=>{
    const daniel = new Person();
    daniel.hobbies =['golf','board_games']
    daniel.addHobby('coding','dancing');
    expect(daniel.hobbies).to.deep.equal(['coding','dancing', 'golf', 'board_games']);
  })
  it('it will remove a hobby', () => {
    const daniel = new Person();

    daniel.hobbies =['golf','board_games']
    daniel.addHobby('basketball');
    daniel.addHobby('tennis');
    daniel.removeHobby('golf');
    expect(daniel.hobbies).to.deep.equal([
      'tennis',
      'basketball',
      'board_games',
    ]);
  });
});
