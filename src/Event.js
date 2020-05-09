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
    return person;
  }
  /*todo the process of applying for a job goes you apply.  they see if your resume match, then you interview, then you get hired
  step 1 you apply
  step 2 they see if you match requirements
  step 3 interview
  step 4 you get hired
  each step is a different but connected event and you can be turned down at any step.  except one.  the following are going to be the implintation of this into this program
  future additions to the steps
  step 1 just increase number of applications on person.  if number gets above a certain amount you lose feeling
  step 2 is they upload a document and it scans to see if your wording matches the wording of the job duties (idk how i will do this at this point)
  step 3 interview computer will randomize other canidates and choose the best one based on intelligence and chrisma (leaning more towards chrisma) you lose majore feeling if you dont get choosen here
  step 4 you get hired gain major feeling based on the difficulty of the job
  */
  static apply(person, randomNumber1) {
    person.applyForJob();
    if (randomNumber1 === undefined) {
      randomNumber1 = getRandomNumber() + 1;
    }
    //simulates just applying to online which only has a 10 percent chance of success
    else if (randomNumber1 === 0) {
      person.jobMessage = `congratulations you moved on to the second round`;
    }
    // this will then make it into a 80 percent chance of success because thats where the jobs are
    else if (person.networking === true && randomNumber1 < 8) {
      person.jobMessage = `congratulations you moved on to the second round`;
    } else {
      person.jobMessage = `Due to the high volume of applicants we regrate to inform you we went with another candidate`;
    }
    return person;
  }
  //todo make an aptitude test.  ie prescreening.  this will relay more on knowledge than anything
  static phoneInterview(person) {
    //todo change jobMessage to second interview true or false not a string
    if (
      person.jobMessage === 'congratulations you moved on to the second round'
    ) {
      // this is for if charisma if less than 10
      if (person.charisma <= 10) {
        const charismaRequirments = getRandomNumber();
        if (person.charisma >= charismaRequirments) {
          person.jobMessage =
            'we would like to invite you to do an in-person interview';
        } else {
          person.jobMessage = 'sorry we went with someone else';
        }
      }
      //this is for charisma if more than 10.  I dont know the scaling yet which is why i have two
      else if (person.charisma > 10) {
        const charismaRequirments = getRandomNumber() * 10;
        if (person.charisma >= charismaRequirments) {
          person.jobMessage =
            'we would like to invite you to do an in-person interview';
        } else person.jobMessage = 'sorry we went with someone else';
      }
    } else {
      person.jobMessage = `error you shouldn't have run the interview function in the first place`;
    }
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
  static study(person) {
    person.intelligence = person.intelligence + getRandomNumber() + 1;
    return person;
  }
}
function getRandomNumber() {
  //this will get a number that is random between 0 and 10
  const x = Math.round(Math.random() * 10);
  return x;
}

module.exports = Event;
