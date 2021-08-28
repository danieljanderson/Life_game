import Person from '../src/Person';
import Marriage from'../src/Marriage';
import Relationship from '../src/Relationship';


describe('testing Marriage class', () => {
  it('will create a marriage', () => {
    let daniel = new Person();
    daniel.name="Daniel"
    let leah = new Person();
    leah.name = "Leah"
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.members[0].name).toEqual('Daniel');
    expect(danielLeah.members[1].name).toEqual('Leah');
  });
  it('will add the money from the two married people together', () => {
    let daniel = new Person();
    let leah = new Person();
    leah.money = 20
    daniel.money =20 
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.money).toBe(40);
  });
  it('will set the connection value', () => {
    let daniel = new Person();
    let leah = new Person();
    daniel.name='Daniel'
    daniel.gender ='male'
    leah.name='Leah'
    leah.gender = 'female'
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.connection).toBe(100);
  });
  it('will get the connection', () => {
    let daniel = new Person();
    let leah = new Person();
    daniel.name='Daniel'
    daniel.gender ='male'
    leah.name='Leah'
    leah.gender = 'female'
    let danielLeah = new Relationship(daniel, leah);
    danielLeah = new Marriage(danielLeah);
    danielLeah.connection = 6;
    let tempConnection = danielLeah.connection;
    expect(danielLeah.connection).toBe(tempConnection);
  });
  it('will keep the activity history', () => {
    let daniel = new Person();
    let leah = new Person();
    daniel.name='Daniel'
    daniel.gender ='male'
    leah.name='Leah'
    leah.gender = 'female'
    let danielLeah = new Relationship(daniel, leah);
    danielLeah.addActivity('golf', 'boardgames', 'swing dancing');
    danielLeah.removeHobby('boardgames');
    danielLeah = new Marriage(danielLeah);
    expect(danielLeah.activityHistory).toEqual(['golf', 'swing dancing']);
  });
  it('will add to the activity history', () => {
    let daniel = new Person();
    let leah = new Person();
    daniel.name='Daniel'
    daniel.gender ='male'
    leah.name='Leah'
    leah.gender = 'female'
    let danielLeah = new Relationship(daniel, leah);
    danielLeah.addActivity('golf', 'boardgames', 'swing dancing');
    danielLeah.removeHobby('boardgames');
    danielLeah = new Marriage(danielLeah);
    danielLeah.addActivity('video chat', 'hiking');
    expect(danielLeah.activityHistory).toEqual([
      'video chat',
      'hiking',
      'golf',
      'swing dancing',
    ]);
  });
  it(
    'will test to see if the start dating date and the wedding dates are different',
    () => {
      let daniel = new Person();
      let leah = new Person();
      daniel.name='Daniel'
      daniel.gender ='male'
      leah.name='Leah'
      leah.gender = 'female'
      let danielLeah = new Relationship(daniel, leah);
      let danielLeahMarriage = new Marriage(danielLeah);
      expect(danielLeah.startDatingDate).not.toEqual(danielLeahMarriage.weddingDay);
    }
  );
});
