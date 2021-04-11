const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const util = require("util");

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const outPut_Dir = path.resolve(__dirname, "output");
const outPutPath = path.join(outPut_Dir,"team.html");

const render = require("./htmlRenterer");





const teamMember =[];
const questions = [{
  type: "",
  message: "",
  name: "",
},{
  type: "",
  message: "",
  name: "",
},{
  type: "",
  message: "",
  name: "",
},{
  type: "",
  message: "",
  name: "",
}

}]
var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });