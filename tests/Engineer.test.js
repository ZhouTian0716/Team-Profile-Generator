const Engineer = require("../lib/Engineer");

describe("Engineer Class Tests", () => {
    const inputs = ['Kory', 8, 'kory@example.com', "ZhouTian0716"]
    const engineer = new Engineer(inputs[0], inputs[1], inputs[2], inputs[3]);
    it("Can set github via constructor argument", () => {
      expect(engineer.name).toEqual(inputs[0]);
      expect(engineer.id).toEqual(inputs[1]);
      expect(engineer.email).toEqual(inputs[2]);
      expect(engineer.github).toEqual(inputs[3]);
    });
    it('getRole() should return "Engineer"', () => {
        expect(engineer.getRole()).toEqual("Engineer");
    });
    it("Can get github via getGithub()", () => {
        expect(engineer.getGithub()).toEqual(engineer.github);
    });
});
