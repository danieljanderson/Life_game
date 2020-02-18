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