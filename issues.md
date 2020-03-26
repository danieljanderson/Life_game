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

# Friday Feb 28 2020

I am having a issue with my design.  So Inheritance is when a class gets functions from a parent class (any time you see the key word `extends` its a parent function of the what ever comes next.)  However my design is already having issues.  If I keep going the way I am going I am going to have a Person class, a Relationship class , a dating class , and a jobs class.  This is where I am introduced to composition.  
https://tylermcginnis.com/javascript-inheritance-vs-composition/
https://alligator.io/js/class-composition/
https://www.youtube.com/watch?v=PFmuCDHHpwk

Composition is using premade functions to define the objects.  In other words inheritance is designing objects on what they are and composition is designing objects around what they do.

Whatching the last link is very helpful.  In it the author describes the difference between primitives and Reference types
the main take away is primitives value is stored in the variable name and reference  variables store the address of said value.

primitives in javascript are : Number, string, boolean, symbol, undifined, and null
and the reference types are Objects,arrays and functions

for example if i do this
x =6
y=5
x=4
y will always be 5 no matter how many times I change x.

if I do this 
x = [3,4]
y = x

x = [3,2,3]
y will change with  x because its pointing to an address NOT A VALUE.

My design might need to be refactored.

# March 25, 2020 
I am having difficulty finding a solution to the ability to add multiple activies at once.  If I just add one activity it will work but not two.
in my function I had 
``` addActivity(newActivity, ...otherActivity) {
    this._activityHistory = [
      newActivity,
      otherActivity,
      ...this._activityHistory
    ];
  }```
  the issue was that the out put would be ['golf,[swing,boardgames]]
  as a side not golf and swing and boardgames are activites I wanted to add.
  the reason why is that rest keeps everything in an array.  meaning that otherActivity becomes an array because rest doesnt unpack it.  
   addActivity(newActivity, ...otherActivity) {
    this._activityHistory = [
      newActivity,
      ...otherActivity,
      ...this._activityHistory
    ];
  }
  this solves it because rest unpacks the otherActivity array.
```
#  March 26, 2020
I am making a sub class of Relationships.  However the issue is how its storing things.  
so when I go from relationship to marriage the data looks like this
Relationship
members:['person one','person 2']
and then all the methods below it.

the marriage then goes like this
marriage{
    relationship[members[]]
}
