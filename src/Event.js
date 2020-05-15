//todo add a function called try something new.  where feeling is taken away but charisma is add and intelligence is added.
//todo add a function that you do something on your hobbies array.  feelings get added
//todo add a function that takes rent out
//todo add a function that makes you go gorcory shop and take money out
/////todo add a function that makes you buy a car
/////todo add logic in the buy a car funtion to make sure you cant buy more than you can afford
/////todo add a function that you sell a car
//todo add a function that makes you move
//todo add a function that gets you evicted
//todo figure out if you want to modify objects in two places or not.
//todo go plan to go over code sometime
//todo still have to make a relationship and marriage section
//todo start utilizing the persons names on the strings.
class Event {
  //! START PERSON EVENTS

  static selfStudy(person) {
    person.intelligence = person.intelligence + getRandomNumber();
    return person;
  }
  static selfHelp(person) {
    person.charisma = person.charisma + getRandomNumber();
    return person;
  }
  static sellCar(person, amount) {
    person.numberCar = person.numberCar - 1;
    person.money = person.money + amount;
    return person;
  }
  static buyCar(person, amount) {
    // checks to see if you have enough money to buy the thing
    if (person.money >= amount) {
      person.numberCar = person.numberCar + 1;
      person.money = person.money - amount;
    } else {
      person.moneyMessage = `You can't buy this car right now.`;
    }
    return person;
  }

  //! END OF SINGLE PERSON EVENT

  //!THIS IS THE START OF THE EMPLOYMENT EVENTS

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
      person.excited(person.numberOfApp);
    }
    // this will then make it into a 80 percent chance of success because thats where the jobs are
    else if (person.networking === true && randomNumber1 < 8) {
      person.jobMessage = `congratulations you moved on to the second round`;
      person.excited(person.numberOfApp);
    } else {
      person.jobMessage = `Due to the high volume of applicants we regrate to inform you we went with another candidate`;
      person.depression(person.numberOfApp);
    }
    return person;
  }
  static jobScreening(person) {
    // this will be heavy on knowledge.  multiple it by 2
    let knowledgeRequirements = getRandomNumber() * 2;
    if (knowledgeRequirements == 0) {
      knowledgeRequirements = 5;
    }
    if (person.intelligence >= knowledgeRequirements) {
      person.jobMessage =
        'we would like to schedule a phone interview with you';
      person.excited(person.numberOfApp);
    } else {
      person.jobMessage =
        ' we appreciate your applying but we went with someone else';
      person.depression(person.numberOfApp);
    }
    return person;
  }
  //todo make an aptitude test.  ie prescreening.  this will relay more on knowledge
  static phoneInterview(person) {
    //todo change jobMessage to second interview true or false not a string
    if (
      person.jobMessage ===
        'congratulations you moved on to the second round' ||
      person.jobMessage ===
        'we would like to schedule a phone interview with you'
    ) {
      // this is for if charisma if less than 10
      if (person.charisma <= 10) {
        let charismaRequirments = getRandomNumber();
        // incase getRandomNumber is 0
        if (charismaRequirments == 0) {
          charismaRequirments = 1;
        }
        if (person.charisma >= charismaRequirments) {
          person.jobMessage =
            'we would like to invite you to do an in-person interview';
          person.excited(getRandomNumber());
        } else {
          person.jobMessage = 'sorry we went with someone else';
          person.depression(getRandomNumber());
        }
      }
      //this is for charisma if more than 10.  I dont know the scaling yet which is why i have two
      else if (person.charisma > 10) {
        //this will be the last result
        //let charismaRequirments = getRandomNumber() * 10;
        // this keeps on breaking so i am consoleloging the numbers
        let randomnumber = getRandomNumber();
        console.log(
          'this is the random number in the phone interview > 10 ' +
            randomnumber
        );
        let charismaRequirments = randomnumber * 10;
        if (charismaRequirments == 10) {
          //if charismaRequirments is 10 it needs to be 11
          charismaRequirments = 11;
        }
        console.log(
          'this is the charismaRequirments in phone interview > 10 ' +
            charismaRequirments
        );
        if (person.charisma >= charismaRequirments) {
          person.jobMessage =
            'we would like to invite you to do an in-person interview';
          person.excited(getRandomNumber());
        } else {
          person.jobMessage = 'sorry we went with someone else';
          person.depression(getRandomNumber());
        }
      }
    } else {
      person.jobMessage = `error you shouldn't have run the interview function in the first place`;
    }
    return person;
  }
  static inPersonInterview(person) {
    person.numberInterviews = person.numberInterviews + 1;
    //person.inPersonInterview++
    //++person.numberInterviews;
    if (
      person.jobMessage ===
      'we would like to invite you to do an in-person interview'
    ) {
      const computerCandidate1 = getRandomNumber() + getRandomNumber();
      const computerCandidate2 = getRandomNumber() + getRandomNumber();
      const computerCandidate3 = getRandomNumber() + getRandomNumber();
      const humanCandidate = person.charisma + person.intelligence;
      if (
        humanCandidate > computerCandidate1 &&
        humanCandidate > computerCandidate2 &&
        humanCandidate > computerCandidate3
      ) {
        person.feeling = person.feeling * person.numberInterviews;
        person.jobMessage = 'Congratulations we would like to offer you a job';
      } else {
        person.feeling = Math.floor(person.feeling / person.numberInterviews);
        person.jobMessage =
          'We regret to inform you that we went with someonelse';
      }
    } else {
      person.jobMessage = 'ERROR inPersonInterview was not supposed to be run';
    }
    return person;
  }
  static hired(person, job) {
    person.numberOfApp = 0;
    person.numberInterviews = 0;
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
  //! END OF EMPLOYMENT EVENTS
}
function getRandomNumber() {
  //this will get a number that is random between 1 and 10
  const x = Math.floor(Math.random() * 10) + 1;
  return x;
}

module.exports = Event;
