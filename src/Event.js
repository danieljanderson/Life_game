class Event {
  static payDay(person) {
    let paycheck;
    console.log('this is payrate');
    console.log(person.currentJob.payRate);
    console.log('this is number of hours');
    console.log(person.currentJob.numberOfHours);
    paycheck = person.currentJob.payRate * person.currentJob.numberOfHours;
    person.deposit(paycheck);
    console.log(paycheck);
    return person;
  }
}
module.exports = Event;
