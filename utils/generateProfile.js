//Import Constructors
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
var memberSrcCodes = [];

// TODO: Create a function to generate profile page
const generateProfile = (data) => {
    const manager = new Manager(data[0].Manager_name, data[0].Manager_id, data[0].Manager_email, data[0].Manager_number);  
  //Check data array, to identify the roles of each element.
  for(let i = 1; i < data.length; i++){
      if ( Object.keys(data[i])[0].split("_")[0] == "Engineer" ){
        var engineer = new Engineer(data[i].Engineer_name, data[i].Engineer_id, data[i].Engineer_email, data[i].Engineer_github);
        var engineerSrc = `
        <div class="card">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h2><i class="fas fa-glasses"></i>${engineer.getRole()}</h2>
            </div>
            <div class="card-body">
                <h4 class="detail">ID: <span>${engineer.id}</span></h4>
                <h4 class="detail">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></h4>
                <h4 class="detail">GitHub: <a class="githublink" href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></h4>
            </div>
        </div>`
        memberSrcCodes.push(engineerSrc);
      }
      else{
        var intern = new Intern(data[i].Intern_name, data[i].Intern_id, data[i].Intern_email, data[i].Intern_school);
        var internSrc = `
        <div class="card">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h2><i class="fas fa-user-graduate"></i>${intern.getRole()}</h2>
            </div>
            <div class="card-body">
                <h4 class="detail id">ID: <span>${intern.id}</span></h4>
                <h4 class="detail email">Email: <a href="mailto:${intern.email}">${intern.email}</a></h4>
                <h4 class="detail phone">School: <span>${intern.getSchool()}</span></h4>
            </div>
        </div>`
        memberSrcCodes.push(internSrc);
      }
    }

    var membersStr = "";
    for (let i = 0; i < memberSrcCodes.length; i++){
        membersStr = membersStr + memberSrcCodes[i]
    }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
      <link rel="stylesheet" href="./css/reset.css">
      <link rel="stylesheet" href="./css/style.css">
  </head>
  <body>
      <header class="header">My Team</header>
      <main class="flexbox">
            <div class="card">
                <div class="card-header">
                    <h2>${manager.name}</h2>
                    <h2><i class="fas fa-mug-hot"></i>${manager.getRole()}</h2>
                </div>
                <div class="card-body">
                    <h4 class="detail">ID: <span>${manager.id}</span></h4>
                    <h4 class="detail">Email: <a href="mailto:${manager.email}">${manager.email}</a></h4>
                    <h4 class="detail">Office number: <span>${manager.getOffice()}</span></h4>
                </div>
            </div> 
            ${membersStr}
      </main>
  </body>
  </html>`
}

module.exports = generateProfile;


