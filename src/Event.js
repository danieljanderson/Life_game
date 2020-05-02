class Event {
  //   static getRandomNumber() {
  //     //this will get a number that is random between 0 and 10
  //     const x = Math.round(Math.random() * 10);
  //     console.log('this is the random number' + x);
  //     return x;
  //   }
  static payDay(person) {
    let paycheck;
    paycheck = person.currentJob.payRate * person.currentJob.numberOfHours;
    person.deposit(paycheck);

    return person;
  }

  static fired(person) {
    person.employmentHistory = [person.currentJob, ...person.employmentHistory];
    person._currentJob = 'unemployed';
    //person.feeling = person.depression(getRandomNumber());
    person.depression(getRandomNumber());
    console.log('this hi random number is ' + person.feeling);
    return person;
  }
  static hired(person, job) {
    if (person.currentJob !== 'unemployed') {
      person.employmentHistory = [
        person.currentJob,
        ...person.employmentHistory,
      ];
      person.currentJob = job;
    } else {
      person.currentJob = Job;
    }
    return person;
  }
}
function getRandomNumber() {
  //this will get a number that is random between 0 and 10
  const x = Math.round(Math.random() * 10);
  console.log('this is the random number' + x);
  return x;
}
//const y = Event.getRandomNumber();
//console.log(y);
module.exports = Event;
