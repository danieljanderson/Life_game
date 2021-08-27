import Person from '../src/Person';


describe('testing person.js class', () => {
  // testing the getters and setters

  //the name property
  it('will retrieve the name', () => {
    let daniel = new Person();
    daniel.name = 'Daniel'
    expect(daniel.name).toEqual('Daniel');
  });
  // the birthdate property
  it('retrieve the birthdate', () => {
    let daniel = new Person();
    daniel.birthdate='June,4'
    expect(daniel.birthdate).toEqual('June,4');
  });
  // the gender property
  it('will retrieve the gender', () => {
    let daniel = new Person();
    daniel.gender ='Male'
    expect(daniel.gender).toEqual('Male');
  });

  // the money property
  it('retrieve the money', () => {
    let daniel = new Person();
    daniel.money = 10
    expect(daniel.money).toBe(10);
  });

  // the charisma property
  it('it will retrieve the charisma', () => {
    let daniel = new Person();
    daniel.charisma = 50
    expect(daniel.charisma).toBe(50);
  });
  // feeling property
  it('it will retrieve the feelings', () => {
    let daniel = new Person()
    daniel.feeling=45;
    expect(daniel.feeling).toBe(45);
  });
  // intelligence property
  it('it will retrieve the intelligence', () => {
    let daniel = new Person();
    daniel.intelligence = 100
    expect(daniel.intelligence).toBe(100);
  });
  
  //hobbies property
  it('it will retrieve the hobbies array', () => {
    let daniel = new Person();
    daniel.hobbies = ['golf','board_games']
    expect(daniel.hobbies).toEqual(['golf', 'board_games']);
  });

  // location property
  it('it will retrieve the location', () => {
    let daniel = new Person();
    daniel.location ='Strongsville'
    expect(daniel.location).toEqual('Strongsville');
  });
  // current employer property
  it('it will retrieve the employer', () => {
    let daniel = new Person();
    daniel.currentJob ='state farm'
    expect(daniel.currentJob).toEqual('state farm');
  });
  //employment history
  it('it will retrieve the employment history', () => {
    let daniel = new Person();
    daniel.employmentHistory = ['self']
    expect(daniel.employmentHistory).toEqual(['self']);
  });

  // has car
  it('it will retrieve the value if he has a car or not', () => {
    let daniel = new Person();
    daniel.numberCar =1
    expect(daniel.numberCar).toBe(1);
  });
  //number of apps
  it('it will retrieve the number of times someone applied for a job', () => {
    let daniel = new Person();
    daniel.numberOfApp = 0
    expect(daniel.numberOfApp).toBe(0);
  });
  //METHODS

  // job related methods
  it('it will add a app to the number of apps', () => {
    let daniel = new Person();
    daniel.applyForJob();
    daniel.applyForJob();
    expect(daniel.numberOfJobApp).toBe(2);
  });
 
  it('it will change the networking to true', () => {
    const daniel = new Person();
    daniel.networking = true;
    expect(daniel.networking).toEqual(true);
  });
  it('it will subtract the feeling', () => {
    const daniel = new Person();
    daniel.feeling = 45
    daniel.depression(5);
    expect(daniel.feeling).toBe(40);
  });
  it('it will add the feeling', () => {
    const daniel = new Person();
    daniel.feeling = 45
    daniel.excited(5);
    expect(daniel.feeling).toBe(50);
  });
  it('it will add money', () => {
    const daniel = new Person();
    daniel.money = 10
    daniel.deposit(10);
    expect(daniel.money).toBe(20);
  });
  it('it will subtract money', () => {
    const daniel = new Person();
    daniel.money = 10
    daniel.withdrawal(5);
    expect(daniel.money).toBe(5);
  });
  it('it will add a hobbie', () => {
    const daniel = new Person();
    daniel.hobbies =['golf','board_games']
    daniel.addHobby('coding');
    expect(daniel.hobbies).toEqual(['coding', 'golf', 'board_games']);
  });
  it('it will add multiple hubbies', ()=>{
    const daniel = new Person();
    daniel.hobbies =['golf','board_games']
    daniel.addHobby('coding','dancing');
    expect(daniel.hobbies).toEqual(['coding','dancing', 'golf', 'board_games']);
  })
  it('it will remove a hobby', () => {
    const daniel = new Person();

    daniel.hobbies =['golf','board_games']
    daniel.addHobby('basketball');
    daniel.addHobby('tennis');
    daniel.removeHobby('golf');
    expect(daniel.hobbies).toEqual([
      'tennis',
      'basketball',
      'board_games',
    ]);
  });
});
