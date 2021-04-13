const Intern = require("../lib/Intern");

test("should put School via constructor",() => {
const testValue = "UserSchool";
const e = new Intern("Subject", 1, "test@test.com", testValue);
expect(e.school).tobe(testValue);
});

test("getRole() should return \"Intern\"", () =>{
    const testValue = "Intern";
    const e = new Intern("Subject", 1, "test@test.com, UserSchool");
    expect(e.getRole()).tobe(testValue)
});
test("should get School via getSchool()",() => {
    const testValue = "UserSchool";
    const e = new Intern("Subject", 1, "test@test.com", testValue);
    expect(e.UserSchool()).tobe(testValue);
    });

