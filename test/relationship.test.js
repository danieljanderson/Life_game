import Person from'../src/Person';
import Relationship from '../src/Relationship';


describe('Testing Relationship.js', () => {
  // testing getting and setting functions
  it('will retrieve the members', () => {
    let daniel = new Person();
    daniel.name= 'Daniel'
    let janna = new Person();
    janna.name ='Janna'
    let danielJana = new Relationship(daniel, janna);
    expect(danielJana.members[0].name).toEqual('Daniel');
    expect(danielJana.members[1].name).toEqual('Janna');
  });
  
  // testing the setters and getters for activity property.

  //I have to test the setter for the the activity history because its not an argument in the constructor
  it('will get activity history', () => {
    let daniel = new Person();
    let janna = new Person();
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.activityHistory).toEqual([]);
  });
  it('will set activity history', () => {
    let daniel = new Person();
    let janna = new Person();
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.activityHistory = ['Movies', 'Golf'];
    let testGet = danielJanna.activityHistory;
    expect(danielJanna.activityHistory).toEqual(testGet);
  });

  // testing the getter and setters for the connection property
  it('will get the connection value', () => {
    let daniel = new Person();
    let janna = new Person();
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.connection).toBe(0);
  });
  it('will set the connection', () => {
    let daniel = new Person();
    let janna = new Person();
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.connection = 6;
    let tempConnection = danielJanna.connection;
    expect(danielJanna.connection).toBe(tempConnection);
  });

  // testing the getters and setters for dating property
  it('will get the dating property', () => {
    let daniel = new Person();
    let janna = new Person();
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.dating).toBe(false);
  });
  it('will set the dating property', () => {
    let daniel = new Person();
    let janna = new Person();
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.dating = true;
    expect(danielJanna.dating).toBe(true);
  });

  // testing the getters and setters for start dating date
  it('will get start dating date capital Male and Female', () => {
    let daniel = new Person();
    daniel.gender = 'Male'
    let janna = new Person();
    janna.gender ='Female'
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.startDatingDate).toEqual(new Date());
  });
  it('will get start dating date lowercase male and female', () => {
    let daniel = new Person();
    daniel.gender = 'male'
    let janna = new Person();
    janna.gender ='female'
    let danielJanna = new Relationship(daniel, janna);
    expect(danielJanna.startDatingDate).toEqual(new Date());
  })
  it('will get start dating date female goes first', () => {
    let daniel = new Person();
    daniel.gender = 'Male'
    let janna = new Person();
    janna.gender ='Female'
    let danielJanna = new Relationship(janna, daniel);
    expect(danielJanna.startDatingDate).toEqual(new Date());
  })
  it('will get start dating date', () => {
    let daniel = new Person();
    daniel.gender = 'male'
    let janna = new Person();
    janna.gender ='female'
    let danielJanna = new Relationship(janna, daniel);
    expect(danielJanna.startDatingDate).not.toBe(new Date());
  })
  it('will set the start date when they started to date', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender = 'male'
    janna.gender = 'female'
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.startDatingDate = '2020-07-08T17:17:46.123Z';
    expect(danielJanna.startDatingDate).toEqual('2020-07-08T17:17:46.123Z');
  });

  // this will change dating status automatically
  it('will not be possible because both persons are males', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender ='Male'
    janna.gender = 'Male';
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.checkRelationshipStatus();
    expect(danielJanna.relationshipStatus).toEqual('NOT POSSIBLE');
  });
  it('dating status will say started to date', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender='male'
    daniel.name= 'Daniel'
    janna.name = 'Janna'
    janna.gender='female'
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.connection = 100;
    danielJanna.checkRelationshipStatus();
    expect(danielJanna.relationshipStatus).toEqual(`congratulations You Daniel and Janna just started dating`);
    expect(danielJanna.dating).toBe(true);
  });
  it('dating relationship status will say close to breakup', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender='male'
    daniel.name = 'Daniel'
    janna.gender='female'
    janna.name = 'Janna'
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.connection = 100;
    danielJanna.checkRelationshipStatus();
    danielJanna.connection = 65;
    danielJanna.checkRelationshipStatus();
    expect(danielJanna.relationshipStatus).toEqual(`You Daniel and Janna are close to breaking up`);
    expect(danielJanna.dating).toBe(true);
  });
  it('dating relationship status will say you broke up', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender='male'
    daniel.name = 'Daniel'
    janna.gender='female'
    janna.name='Janna'
    let danielJanna = new Relationship(daniel, janna);
    let endDate;
    danielJanna.connection = 100;
    danielJanna.checkRelationshipStatus();
    danielJanna.connection = 0;
    danielJanna.checkRelationshipStatus();
    endDate = danielJanna.endDatingDate;
    expect(danielJanna.relationshipStatus).toEqual(`You Daniel and Janna break up`);
    expect(danielJanna.dating).toBe(false);
    expect(danielJanna.endDatingDate).toEqual(endDate);
  });
  it('will get the persons names', () => {
    let daniel = new Person();
    daniel.name = 'Daniel'
    let janna = new Person();
    janna.name='Janna'
    daniel.gender='male'
    janna.gender='female'
    let danielJanna = new Relationship(daniel, janna);
    let memberNames = danielJanna.getMemberNames();
    expect(memberNames).toEqual(['Daniel', 'Janna']);
  });
  it('will add a activity', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender='male'
    janna.gender='female'
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.addActivity('Golf');
    expect(danielJanna.activityHistory).toEqual(['Golf']);
  });
  it('will add multiple activity', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender='male'
    janna.gender='female'
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.addActivity('golf', 'boardgames', 'swing dancing');
    expect(danielJanna.activityHistory).toEqual([
      'golf',
      'boardgames',
      'swing dancing',
    ]);
  });
  it('will remove an activity', () => {
    let daniel = new Person();
    let janna = new Person();
    daniel.gender='male'
    janna.gender='female'
    let danielJanna = new Relationship(daniel, janna);
    danielJanna.addActivity('golf', 'boardgames', 'swing dancing');
    danielJanna.removeHobby('boardgames');
    expect(danielJanna.activityHistory).toEqual([
      'golf',
      'swing dancing',
    ]);
  });
});
