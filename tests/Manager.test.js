
const Manager = require("../lib/Manager");

test("should put OfficeNumber via constructor",() => {
const testValue = 1 ;
const e = new Manager("Subject", 1, "test@test.com", testValue);
expect(e.OfficeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () =>{
    const testValue = "Manager";
    const e = new Manager("Subject", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue)
});

test("should get OfficeNumber via getOfficeNumber()",() => {
    const testValue = 1;
    const e = new Manager("Subject", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});
    
