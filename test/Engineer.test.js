const Engineer = require("../lib/Engineer");

Test("should put GitHub account via constructor",() => {
const testValue = "GithubUser";
const e = new Engineer("Susu", 1, "test@test.com", testValue);
expect(e.github).tobe(testValue);
})