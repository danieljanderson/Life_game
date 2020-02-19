# this file is for me to document all the issues that I get stumped on and the solutions I found to fix the issues

this file is more of a journal of isses that I have creating the project.  I will post the solutions on this file too.

# Thursday Feb 13, 2020
still having difficulty understanding getters and setters.  I get the concept but the application is difficult.  
https://javascript.info/property-accessors  
that site seemed to help


# Tuesday Feb 18 2020
It seems that when I run the code 
daniel.getNewJob('Autozone');
daniel.getNewJob('Miller');
it adds state farm twice to the employmentHistory array.
It seems that the method getNewJob is running as soon as the class is being invocked.  Meaning that its running getNewJob before I mean to.

some pointed out that this.employmentHistory.unshift(this.currentJob) is mutating the data directly.  instead I should write it like this :
this._employmentHistory = [this._currentJob, ...this._employmentHistory];
    this._currentJob = newJob;


The reason why I had the above issue is because I was making a shallow copy of the array of employmentHistory.  Spread syntax doesnt copy nested arrays.  and employmentHistory is nested because its storied inside the variable of person.  
That fixed the issue.