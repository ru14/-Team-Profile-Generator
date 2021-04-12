const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const util = require("util");

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const outPut_Dir = path.resolve(__dirname, "output");
const outPutPath = path.join(outPut_Dir,"team.html");

const render = require("./htmlRenterer");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");



const questions = [{
  type: "name",
  message: "name of Employee?",
  name: "name",
},{
  type: 0,
  message: "please input Employee's id",
  name: "id",
},{
  type: "email",
  message: "please input Employee email",
  name: "email",
},{
  type: "list",
  message: "What is Employee role?",
  name: "role",
  choice: ["Manager", "Engineer", "Intern"],
}];

const questionForManager = [
  {
    type:0,
    message: "what is Manager's office number?",
    name: "officeNumber"
  }];
const questionForEngineer = [
  {
    type: "gitHubLink",
    message: "please provide Engineer's github?",
    name: "github"
  }];
const questionForIntern = [
  {
    type: "school",
    message: "please provide Intern's School ",
    name: "school"
  }];
const confirm =[{
  type: "confirm",
  name: "adding",
  message: "Do you want to Input more Employee information?"
}];

const init = async () => {
  const employee = [];
  let addMore = true;

  while(addMore){
    const {name, id, email, role} = await inquirer.prompt(questions);

    if(role === "Manager"){
      const{officeNumber} = await inquirer.prompt(questionForManager);
      employee.push(new Manager(name, id, email, officeNumber));
    }else if (role === "Engineer") {
      const{github} = await inquirer.prompt(questionForEngineer);
      employee.push(new Engineer(name, id, email, github));
    } else {
      const{school} = await inquirer.prompt(questionForIntern);
      employee.push(new Intern(name, id, email, school))
    }
    const {adding} = await inquirer.prompt(confirm);
    addMore = adding;
  }

  const html = render(employee);

  if (!fs.existsSync(outPutPath)) {
    const e = await mkdirAsync(outPut_Dir);
    error && console.error(e);
  }
  const e = await writeFileAsync(outPutPath, html);
  error && console.erroe(e);
}
init();