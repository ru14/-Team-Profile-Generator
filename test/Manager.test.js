const Intern = require("../lib/Intern");

test("should put OfficeNumber via constructor",() => {
const testValue = "OfficeNumber";
const e = new Intern("Subject", 1, "test@test.com", testValue);
expect(e.OfficeNumber).tobe(testValue);
});

test("getRole() should return \"Intern\"", () =>{
    const testValue = "Intern";
    const e = new Intern("Subject", 1, "test@test.com, GitHubUser");
    expect(e.getRole()).tobe(testValue)
});


