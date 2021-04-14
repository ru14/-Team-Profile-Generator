const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");


const templatesDir = path.resolve(__dirname,"../templates");

const render = employee =>{
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(Manager => renderManager(Manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(Engineer => renderManager(Engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(Intern => renderManager(Intern))
    );
    return renderMain(html.join(""));
};