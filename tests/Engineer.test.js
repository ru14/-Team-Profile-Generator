const Engineer = require("../lib/Engineer");

test("should put GitHub account via constructor",() => {
const testValue = "GithubUser";
const e = new Engineer("Subject", 1, "test@test.com", testValue);
expect(e.github).tobe(testValue);
});

test("getRole() should return \"Engineer\"", () =>{
    const testValue = "Engineer";
    const e = new Engineer("Subject", 1, "test@test.com, GitHubUser");
    expect(e.getRole()).tobe(testValue)
});

test("should get GitHub username via getGitHub()",() => {
    const testValue = "GithubUser";
    const e = new Engineer("Subject", 1, "test@test.com", testValue);
    expect(e.github).tobe(testValue);
    });
