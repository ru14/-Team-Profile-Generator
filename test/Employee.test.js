const Employee = require("../lib/Employee");

test("should put name via constructor", () => {
    const testValue = "EmpolyeeName";
    const e = new Employee("Subject", 1, "test@test.com", testValue);
    expect(e.name).tobe(testValue);
});

test("should put email via constructor", () => {
    const testValue = "EmpolyeeEmail";
    const e = new Employee("Subject", 1, "test@test.com", testValue);
    expect(e.email).tobe(testValue);
});

test("should put Id via constructor", () => {
    const testValue = "EmpolyeeId";
    const e = new Employee("Subject", 1, "test@test.com", testValue);
    expect(e.id).tobe(testValue);
});
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Subject", 1, "test@test.com, GitHubUser");
    expect(e.getRole()).tobe(testValue)
});

