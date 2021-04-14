const Employee = require("../lib/Employee");

test("should put name via constructor", () => {
    const name = "subject";
    const e = new Employee(name);
    expect(e.name).toBe('subject');
});

test("should put email via constructor", () => {
    const testValue = "test@test.com";
    const e = new Employee("Subject", 1, testValue);
    expect(e.email).toBe('test@test.com');
});

test("should put Id via constructor", () => {
    const testValue = 100;
    const e = new Employee("Subject", testValue, "test@test.com");
    expect(e.id).toBe(100);
});
test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Subject", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue)
});

