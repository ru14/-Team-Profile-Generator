
const Manager = require("../lib/Manager");

test("should put OfficeNumber via constructor",() => {
const testValue = 000;
const e = new Manager("Subject", 1, "test@test.com", testValue);
expect(e.OfficeNumber).tobe(testValue);
});

test("getRole() should return \"Manager\"", () =>{
    const testValue = "Manager";
    const e = new Manager("Subject", 1, "test@test.com, OfficeNumber");
    expect(e.getRole()).tobe(testValue)
});

test("should get OfficeNumber via getOfficeNumber()",() => {
    const testValue = 000;
    const e = new Manager("Subject", 1, "test@test.com", testValue);
    expect(e.OfficeNumber()).tobe(testValue);
    });
