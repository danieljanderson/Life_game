import Person from '../src/Person';
import Employment from '../src/Employment';
import Event  from'../src/Event';


describe('tests event class', () => {
  describe('event functions that modifiy single person object', () => {
    //! START OF SINGLE PERSON SECTION  TEST
    it('it will add intelligence', () => {
      let daniel = new Person();
      daniel.intelligence = 100
      daniel = Event.selfStudy(daniel);
      expect(daniel.intelligence).toBeGreaterThan(100);
    });
    it('self help will add to charisma', () => {
      let daniel = new Person();
      daniel.charisma = 50
      daniel = Event.selfHelp(daniel);
      expect(daniel.charisma).toBeGreaterThan(50);
    });
    it('buy a car', () => {
      let daniel = new Person();
      daniel.money = 8010;
      daniel = Event.buyCar(daniel, 8010);
      expect(daniel.numberCar).toBe(1);
      expect(daniel.money).toBe(0);
    });
    it('will not allow me to buy a car because I dont have enough money', () => {
      let daniel = new Person();
      daniel = Event.buyCar(daniel, 8000);
      expect(daniel.moneyMessage).toEqual(`You can't buy this car right now.`);
    });
    it('sell a car', () => {
      let daniel = new Person();
      daniel.money = 10
      daniel.numberCar = 1;
      daniel = Event.sellCar(daniel, 8000);
      expect(daniel.numberCar).toBe(0);
      expect(daniel.money).toBe(8010);
    });
    it('i will get evicted', () => {
      let daniel = new Person();
      daniel.feeling = 45
      daniel.location = 'Strongsville'
      daniel = Event.eviction(daniel);
      expect(daniel.evicted).toBe(true);
      expect(daniel.evictedDate).toBeInstanceOf(Date);
      expect(daniel.location).toEqual('');
      expect(daniel.feeling).toBeLessThan(45);
    });
    it(`cant't pay my rent`, () => {
      let daniel = new Person();
      daniel = Event.rent(daniel, 300);
      expect(daniel.moneyMessage).toEqual(`you need to talk to you landlord you can't pay rent this month`);
    });
    it('it will deduct money for rent', () => {
      let daniel = new Person();
      daniel.money = 350;
      daniel = Event.rent(daniel, 300);
      expect(daniel.money).toBe(50);
    });
    it('will not allow me to go shopping', () => {
      let daniel = new Person();
      daniel = Event.shopping(daniel, 300);
      expect(daniel.moneyMessage).toEqual(`you can't buy this because you dont have money`);
    });
    it('it will deduct the shopping cost', () => {
      let daniel = new Person();
      daniel.money =10
      daniel = Event.shopping(daniel, 5);
      expect(daniel.money).toBe(5);
    });
    it('testing tryingSomethingNew that person enjoyed yes', () => {
      let daniel = new Person();
      daniel.intelligence = 100
      daniel.charisma = 50
      daniel.hobbies = ['golf','board_games']
      daniel = Event.trySomethingNew(daniel,"coding",'yes');
      expect(daniel.intelligence).toBeGreaterThan(100);
      expect(daniel.charisma).toBeGreaterThan(50);
      expect(daniel.hobbies).toEqual(['coding', 'golf', 'board_games'])
    });
    it('testing tryingSomethingNew that is enjoyed with up Yes', ()=>{
      let daniel = new Person();
      daniel.intelligence=100
      daniel.charisma=50
      daniel.hobbies = ['golf','board_games']
      daniel = Event.trySomethingNew(daniel,"coding",'Yes');
      expect(daniel.intelligence).toBeGreaterThan(100);
      expect(daniel.charisma).toBeGreaterThan(50);
      expect(daniel.hobbies).toEqual(['coding', 'golf', 'board_games'])
    })
    it('testing tryingSomethingNew that person is not enjoyed with no', () => {
      let daniel = new Person();
      daniel.intelligence = 100
      daniel.feeling = 45
      daniel.charisma = 50
      daniel.hobbies = ['golf','board_games']
      daniel = Event.trySomethingNew(daniel,"coding",'no');
      expect(daniel.intelligence).toBeGreaterThan(100);
      expect(daniel.feeling).toBeLessThan(45)
      expect(daniel.charisma).toBeLessThan(50);
      expect(daniel.hobbies).toEqual([ 'golf', 'board_games'])
    });
    it('testing tryingSomethingNew that person is not enjoyed with No', () => {
      let daniel = new Person();
      daniel.intelligence = 100
      daniel.feeling = 45
      daniel.charisma = 50
      daniel.hobbies = ['golf','board_games']
      daniel = Event.trySomethingNew(daniel,"coding",'No');
      expect(daniel.intelligence).toBeGreaterThan(100);
      expect(daniel.feeling).toBeLessThan(45)
      expect(daniel.charisma).toBeLessThan(50);
      expect(daniel.hobbies).toEqual([ 'golf', 'board_games'])
    });
    it('Move will change the persons location', () => {
      let daniel = new Person();
      daniel = Event.move(daniel, 'Cleveland');
      expect(daniel.location).toEqual('Cleveland');
    });
  });
  //! END OF SINGLE PERSON SECTION TEST

  //!START OF THE EMPLOYMENT  FUNCTION TEST
  describe('events that deal with employment', () => {
    it('test the paycheck method', () => {
      let daniel = new Person();  
      const danieljob = new Employment();
      daniel.money = 10
      danieljob.payRate = 20
      danieljob.numberOfHoursWorked =40
      daniel.currentJob = danieljob;
      daniel = Event.payDay(daniel);
      expect(daniel.money).toBe(810);
      expect(daniel.currentJob.numberOfHoursWorked).toBe(0)
    });
    it('it will add work hours', ()=>{
      let daniel = new Person();
      const danieljob = new Employment();
      
      danieljob.numberOfHoursWorked = 40
      daniel.currentJob = danieljob;
      daniel = Event.workedHours(daniel,20)
      expect(daniel.currentJob.numberOfHoursWorked).toBe(60)
    })
    it('it will remove the current job and add unemployed', () => {
      let daniel = new Person();
      const danieljob = new Employment();
      danieljob.companyName = "Auto Zone"
      daniel.feeling = 45
      daniel.currentJob = danieljob;
      daniel = Event.fired(daniel);
      expect(daniel.currentJob).toEqual('unemployed');
      expect(daniel.feeling).toBeLessThan(45);
    });
    it('it will add state farm to the employment history', () => {
      let daniel = new Person();
      const danielJob = new Employment();
      danielJob.companyName = 'State Farm'
      const newJob = new Employment();
      newJob.companyName = 'Best Buy'
      daniel.currentJob = danielJob;
      daniel.numberInterviews = 100;
      daniel.numberOfApp = 100;
      daniel = Event.hired(daniel, newJob);
      expect(daniel.employmentHistory).toEqual([danielJob]);
      expect(daniel.currentJob).toEqual(newJob);
      expect(daniel.numberInterviews).toBe(0);
      expect(daniel.numberOfApp).toBe(0);
    });
    it('study will increase intelligence', () => {
      let daniel = new Person();
      daniel.intelligence = 100
      daniel = Event.selfStudy(daniel);
      expect(daniel.intelligence).toBeGreaterThan(100);
    });
    it('I will not be asked to come for an interview', () => {
      let daniel = new Person();
      daniel.feeling = 45
      daniel = Event.apply(daniel, 6);
      expect(daniel.numberOfJobApp).toBe(1);
      expect(daniel.jobMessage).toEqual(
        `Due to the high volume of applicants we regrate to inform you we went with another candidate`
      );
      expect(daniel.feeling).toBe(44);
    });
    it('It will add an application applied', ()=>{
      let daniel = new Person();
      daniel.feeling = 45
      daniel = Event.apply(daniel);
      expect(daniel.numberOfJobApp).toBe(1);
    })
    it('I will  be asked to come for an interview because I networked', () => {
      let daniel = new Person();
      daniel.charisma = 50
      daniel.feeling = 45
      daniel.intelligence = 100
      daniel.networking = true;
      daniel = Event.apply(daniel, 7);
      expect(daniel.numberOfJobApp).toBe(1);
      expect(daniel.jobMessage).toEqual(`congratulations you moved on to the second round`);
      expect(daniel.feeling).toBe(46);
    });
    it(
      'It will aske me to move on to the second round.  Testing the 10 percent (when the number is 0)',
      () => {
        let daniel = new Person();
        daniel.feeling = 45
        daniel.charisma =50
        daniel.intelligence = 100
        daniel = Event.apply(daniel, 0);
        expect(daniel.numberOfJobApp).toBe(1);
        expect(daniel.jobMessage).toEqual(`congratulations you moved on to the second round`);
        expect(daniel.feeling).toBe(46);
      }
    );
    it(
      'it will return an error because phone interview shouldnt have been run because you didnt apply',
      () => {
        let daniel = new Person();
        daniel.feeling = 45
        daniel.charisma =50
        daniel.intelligence = 100
        daniel = Event.phoneInterview(daniel);
        expect(daniel.jobMessage).toEqual(`error you shouldn't have run the interview function in the first place`);
      }
    );
    it('phone interview  will fail because i dont have charisma', () => {
      let daniel = new Person();
      daniel.feeling = 45
      daniel.charisma =50
      daniel.intelligence = 100
      daniel.jobMessage = `congratulations you moved on to the second round`;
      daniel.charisma = -1;
      daniel = Event.phoneInterview(daniel);
      expect(daniel.jobMessage).toEqual('sorry we went with someone else');
      expect(daniel.feeling).toBeLessThan(45);
    });
    it(
      'phone interview will pass i will be going to an in person interview',
      () => {
        let daniel = new Person()
        daniel.feeling = 45
        daniel.charisma =50
        daniel.intelligence = 100;
        daniel.jobMessage = `congratulations you moved on to the second round`;
        daniel.charisma = 10;
        daniel = Event.phoneInterview(daniel);
        expect(daniel.jobMessage).toEqual('we would like to invite you to do an in-person interview');
        expect(daniel.feeling).toBeGreaterThan(45);
      }
    );
    it(
      'the > 10 it will tell me to come in for a in person in case charisma is greater than 10',
      () => {
        let daniel = new Person();
        daniel.feeling = 45
        daniel.jobMessage = `congratulations you moved on to the second round`;
        daniel.charisma = 100;
        daniel = Event.phoneInterview(daniel);
        expect(daniel.jobMessage).toEqual('we would like to invite you to do an in-person interview');
        expect(daniel.feeling).toBeGreaterThan(45);
      }
    );
    it('the > 10 it will tell me i failed the  phone interview', () => {
      let daniel = new Person();
      daniel.feeling = 45
      daniel.charisma =50
      daniel.intelligence = 100
      daniel.jobMessage = `congratulations you moved on to the second round`;
      daniel.charisma = 10.5;
      daniel = Event.phoneInterview(daniel);
      expect(daniel.jobMessage).toEqual('sorry we went with someone else');
      expect(daniel.feeling).toBeLessThan(45);
    });
    it('job screening will fail', () => {
      let daniel = new Person();
      daniel.intelligence = 0;
      daniel = Event.jobScreening(daniel);
      expect(daniel.jobMessage).toEqual(' we appreciate your applying but we went with someone else');
    });
    it('job screening will pass', () => {
      let daniel = new Person();
      daniel.intelligence = 100000;
      daniel = Event.jobScreening(daniel);
      expect(daniel.jobMessage).toEqual('we would like to schedule a phone interview with you');
    });
    it('phone interview will pass', () => {
      let daniel = new Person();
      daniel.charisma = 10000;
      daniel.jobMessage =
        'we would like to schedule a phone interview with you';
      daniel = Event.phoneInterview(daniel);
      expect(daniel.jobMessage).toEqual('we would like to invite you to do an in-person interview');
    });
    it('inperson interview shouldnt have run', () => {
      let daniel = new Person();
      daniel = Event.inPersonInterview(daniel);
      expect(daniel.jobMessage).toEqual('ERROR inPersonInterview was not supposed to be run');
    });
    it('inperson interview should fail', () => {
      let daniel = new Person();
      daniel.jobMessage =
        'we would like to invite you to do an in-person interview';
      daniel.charisma = 0;
      daniel.feeling = 45
      daniel.intelligence = 0;
      daniel = Event.inPersonInterview(daniel);
      expect(daniel.jobMessage).toEqual('We regret to inform you that we went with someonelse');
      expect(daniel.feeling).toBe(45);
    });
    it(
      'inperson interview should fail and divide it by 2 since it was my second interview',
      () => {
        let daniel = new Person();
        daniel.feeling = 45
        daniel.jobMessage =
          'we would like to invite you to do an in-person interview';
        daniel.charisma = 0;
        daniel.intelligence = 0;
        daniel = Event.inPersonInterview(daniel);
        daniel.jobMessage =
          'we would like to invite you to do an in-person interview';
        daniel = Event.inPersonInterview(daniel);
        expect(daniel.jobMessage).toEqual('We regret to inform you that we went with someonelse');
        expect(daniel.feeling).toBe(22);
      }
    );
    it('in person interview should pass', () => {
      let daniel = new Person();
      daniel.jobMessage =
        'we would like to invite you to do an in-person interview';
      daniel.charisma = 100;
      daniel.feeling = 45
      daniel.intelligence = 100;
      daniel = Event.inPersonInterview(daniel);
      expect(daniel.jobMessage).toEqual('Congratulations we would like to offer you a job');
      expect(daniel.feeling).toBe(45);
    });
    it(
      'in person interview will pass and then multiply by 2 since its my second interview',
      () => {
        let daniel = new Person();
        daniel.feeling = 45
        daniel.jobMessage =
          'we would like to invite you to do an in-person interview';
        daniel.charisma = 100;
        daniel.intelligence = 100;
        daniel = Event.inPersonInterview(daniel);
        daniel.jobMessage =
          'we would like to invite you to do an in-person interview';
        daniel = Event.inPersonInterview(daniel);
        expect(daniel.jobMessage).toEqual('Congratulations we would like to offer you a job');
        expect(daniel.feeling).toBe(90);
      }
    );
  });
  //! END OF EMPLOYMENT FUNCTION TEST
});
