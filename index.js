// To include packages needed for this application
const generateProfile = require('./utils/generateProfile');
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);

// To create an array of questions for user input
const questions = [
    'What is the team manager\'s name?',
    'What is the team manager\'s id?',
    'What is the team manager\'s email?',
    'What is the team manager\'s office number?',
    'Which type of team member would you like to add?',
    'What is your engineer\'s name?',
    'What is your engineer\'s id?',
    'What is your engineer\'s email?',
    'What is your engineer\'s GitHub username?',
    'What is your intern\'s name?',
    'What is your intern\'s id?',
    'What is your intern\'s email?',
    'What is your intern\'s school?',
  ];
const nextMemeber = ["Engineer", "Intern", "Enough team members"];
var currentRole = "Manager";
var dataObj = [];

// User inputs here.
const promptManager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Manager_name',
        message: questions[0],
        validate: (value) => {if(value){return true} else {return 'Please give a valid name.'}}
      },
      {
        type: 'input',
        name: 'Manager_id',
        message: questions[1],
        validate: (value) => {if(value){return true} else {return 'Please give a valid number.'}}
      },
      {
        type: 'input',
        name: 'Manager_email',
        message: questions[2],
        validate: (value) => {if(value){return true} else {return 'Please give an email address.'}}
      },
      {
        type: 'input',
        name: 'Manager_number',
        message: questions[3],
        validate: (value) => {if(value){return true} else {return 'Please give a valid number.'}}
      },
    ]);
};

const promptRole = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'nextMemeber',
        message: questions[4],
        choices: nextMemeber,
        validate: (value) => {if(value){return true} else {return 'Please make a choice.'}}
    })
};

const promptEngineer = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Engineer_name',
        message: questions[5],
        validate: (value) => {if(value){return true} else {return 'Please give a valid name.'}}
      },
      {
        type: 'input',
        name: 'Engineer_id',
        message: questions[6],
        validate: (value) => {if(value){return true} else {return 'Please give a valid number.'}}
      },
      {
        type: 'input',
        name: 'Engineer_email',
        message: questions[7],
        validate: (value) => {if(value){return true} else {return 'Please give an email address.'}}
      },
      {
        type: 'input',
        name: 'Engineer_github',
        message: questions[8],
        validate: (value) => {if(value){return true} else {return 'Please give a valid number.'}}
      }
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Intern_name',
        message: questions[9],
        validate: (value) => {if(value){return true} else {return 'Please give a valid name.'}}
      },
      {
        type: 'input',
        name: 'Intern_id',
        message: questions[10],
        validate: (value) => {if(value){return true} else {return 'Please give a valid number.'}}
      },
      {
        type: 'input',
        name: 'Intern_email',
        message: questions[11],
        validate: (value) => {if(value){return true} else {return 'Please give an email address.'}}
      },
      {
        type: 'input',
        name: 'Intern_school',
        message: questions[12],
        validate: (value) => {if(value){return true} else {return 'Please give a valid number.'}}
      }
    ]);
};





// Using writeFileAsync as a promise  
const runApp = () => {
    console.log('Please build your team by answering these questions.');
    promptManager()
        .then((res) => dataObj.push(res))
        .then(()=>promptRole().then((res) => currentRole = res.nextMemeber))
        .then(()=>addMembers())
          .then(() => fs.writeFile('Profile_generated.html', generateProfile(dataObj), 
          (err) => err ? console.log(err) : console.log('Check file with: open Profile_generated.html')))
        
        .catch((err) => console.error(err));
  };
  
runApp();



function addMembers(){
    if(currentRole == "Engineer"){ 
        promptEngineer()
            .then((res) => dataObj.push(res))
            .then(()=>promptRole().then((res) => currentRole = res.nextMemeber))
            .then(()=>addMembers())
            .catch((err) => console.error(err));
    }
    else if (currentRole == "Intern"){
        promptIntern()
            .then((res) => dataObj.push(res))
            .then(()=>promptRole().then((res) => currentRole = res.nextMemeber))
            .then(()=>addMembers())
            .catch((err) => console.error(err));
    }
    else {console.log(dataObj)} 
}
