const Intern = require("../lib/Intern");

test("should put School via constructor",() => {
const testValue = "UserSchool";
const e = new Intern("Subject", 1, "test@test.com", testValue);
expect(e.UserSchool).tobe(testValue);
});

test("getRole() should return \"Intern\"", () =>{
    const testValue = "Intern";
    const e = new Intern("Subject", 1, "test@test.com, GitHubUser");
    expect(e.getRole()).tobe(testValue)
});

