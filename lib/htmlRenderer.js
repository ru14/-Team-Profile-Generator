const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");


const templatesDir = path.resolve(__dirname, "../templates");

const render = employee => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(Manager => renderManager(Manager))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(Engineer => renderEngineer(Engineer))
    );
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(Intern => renderIntern(Intern))
    );
    return renderMain(html.join(""));
};

const renderManager = Manager => {
    let templates = fs.readFileSync(path.resolve(templatesDir, "Manager.html"), "utf-8");
    templates.replacePlaceholders(templates, "name", Manager.getname);
    templates.replacePlaceholders(templates, "role", Manager.getRole());
    templates.replacePlaceholders(templates, "id", Manager.getid);
    templates.replacePlaceholders(templates, "email", Manager.getemail);
    templates.replacePlaceholders(templates, "OfficeNumber", Manager.getOfficeNumber());

};
const renderEngineer = Engineer => {
    let templates = fs.readFileSync(path.resolve(templatesDir, "Engineer.html"), "utf-8");
    templates.replacePlaceholders(templates, "name", Engineer.getname);
    templates.replacePlaceholders(templates, "role", Engineer.getRole());
    templates.replacePlaceholders(templates, "id", Engineer.getid);
    templates.replacePlaceholders(templates, "email", Engineer.getemail);
    templates.replacePlaceholders(templates, "github", Engineer.getgithub());

};
const renderIntern = Intern => {
    let templates = fs.readFileSync(path.resolve(templatesDir, "Intern.html"), "utf-8");
    templates.replacePlaceholders(templates, "name", Intern.getname);
    templates.replacePlaceholders(templates, "role", Intern.getRole());
    templates.replacePlaceholders(templates, "id", Intern.getid);
    templates.replacePlaceholders(templates, "email", Intern.getemail);
    templates.replacePlaceholders(templates, "school", Intern.getschool());

};