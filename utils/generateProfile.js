//Import Constructors
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
//var memberSrcCodes = [];



// Cards after Manager




// TODO: Create a function to generate profile page
const generateProfile = (data) => {
  //Check data array, to identify the roles of each element.

  
  const manager = new Manager(data[0].manager_name, data[0].manager_id, data[0].manager_email, data[0].manager_number);
  const engineer = new Engineer(data[1].engineer_name, data[1].engineer_id, data[1].engineer_email, data[1].engineer_github);
  const intern = new Intern(data[2].intern_name, data[2].intern_id, data[2].intern_email, data[2].intern_school);


  // var engineerSrc = `
  //     <div class="card">
  //     <div class="card-header">
  //         <h2>${engineer.name}</h2>
  //         <h2><i class="fas fa-mug-hot"></i>${engineer.getRole()}/h3>
  //     </div>
  //     <div class="card-body">
  //         <h4 class="detail id">ID:<span>${engineer.id}</span></h4>
  //         <h4 class="detail email">Email:<span>${engineer.email}</span></h4>
  //         <h4 class="detail phone">Office number:<span>${engineer.getGithub()}</span></h4>
  //     </div>
  //     </div>`




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
                  <h2><i class="fas fa-mug-hot"></i>${manager.getRole()}/h3>
              </div>
              <div class="card-body">
                  <h4 class="detail id">ID:<span>${manager.id}</span></h4>
                  <h4 class="detail email">Email:<span>${manager.email}</span></h4>
                  <h4 class="detail phone">Office number:<span>${manager.getOffice()}</span></h4>
              </div>
          </div> 

          <div class="card">
              <div class="card-header">
                  <h2>${engineer.name}</h2>
                  <h2><i class="fas fa-mug-hot"></i>${engineer.getRole()}/h3>
              </div>
              <div class="card-body">
                  <h4 class="detail id">ID:<span>${engineer.id}</span></h4>
                  <h4 class="detail email">Email:<span>${engineer.email}</span></h4>
                  <h4 class="detail phone">GitHub:<span>${engineer.getGithub()}</span></h4>
              </div>
          </div>

          <div class="card">
              <div class="card-header">
                  <h2>${intern.name}</h2>
                  <h2><i class="fas fa-mug-hot"></i>${intern.getRole()}/h3>
              </div>
              <div class="card-body">
                  <h4 class="detail id">ID:<span>${intern.id}</span></h4>
                  <h4 class="detail email">Email:<span>${intern.email}</span></h4>
                  <h4 class="detail phone">School:<span>${intern.getSchool()}</span></h4>
              </div>
          </div>


      </main>
  </body>
  </html>`;
}

module.exports = generateProfile;


