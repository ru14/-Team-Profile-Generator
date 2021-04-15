const path = require("path");
const fs = require("fs");
const Employee = require("./Employee");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");


const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
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

    console.log(html);
    
    return renderMain(html.join(""));
};

const renderManager = Manager => {
   

    let templates = fs.readFileSync(path.resolve(templatesDir, "Manager.html"), "utf-8");
    templates = replacePlaceholders(templates, "name", Manager.getName());
    templates = replacePlaceholders(templates, "role", Manager.getRole());
    templates = replacePlaceholders(templates, "id", Manager.getId());
    templates = replacePlaceholders(templates, "email", Manager.getEmail());
    templates = replacePlaceholders(templates, "OfficeNumber", Manager.getOfficeNumber());
    return templates;
};
const renderEngineer = Engineer => {
    let templates = fs.readFileSync(path.resolve(templatesDir, "Engineer.html"), "utf-8");
    templates = replacePlaceholders(templates, "name", Engineer.getName());
    templates = replacePlaceholders(templates, "role", Engineer.getRole());
    templates = replacePlaceholders(templates, "id", Engineer.getId());
    templates = replacePlaceholders(templates, "email", Engineer.getEmail());
    templates = replacePlaceholders(templates, "github", Engineer.getGitHub());
    return templates;
};
const renderIntern = Intern => {
    let templates = fs.readFileSync(path.resolve(templatesDir, "Intern.html"), "utf-8");
    templates = replacePlaceholders(templates, "name", Intern.getName());
    templates = replacePlaceholders(templates, "role", Intern.getRole());
    templates = replacePlaceholders(templates, "id", Intern.getId());
    templates = replacePlaceholders(templates, "email", Intern.getEmail());
    templates = replacePlaceholders(templates, "school", Intern.getSchool());
    return templates;
};

const renderMain = html => {
    const templates = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf-8");
    return replacePlaceholders(templates, "Team", html);
};

const replacePlaceholders = (templates, placeholder, value) => {
    const pattern = new RegExp("{{" + placeholder + "}}", "gm");
    return templates.replace(pattern, value);
};

module.exports = render
