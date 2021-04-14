const Intern = require("../lib/Intern");

test("should put school via constructor",() => {
const testValue = "UserSchool";
const e = new Intern("Subject", 1, "test@test.com", testValue);
expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () =>{
    const testValue = "Intern";
    const e = new Intern("Subject", 1, "test@test.com");
    expect(e.getRole()).toBe(Intern);
});
test("should get school name via getschool()",() => {
    const testValue = "UserSchool";
    const e = new Intern("Subject", 1, "test@test.com", testValue);
    expect(e.school()).toBe(UserSchool);
    });
    
