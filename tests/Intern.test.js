const Intern = require("../lib/Intern");

describe("intern Class Tests", () => {
    const inputs = ['Kory', 8, 'kory@example.com', "The University of Adelaide"]
    const intern = new Intern(inputs[0], inputs[1], inputs[2], inputs[3]);
    it("Can set school via constructor argument", () => {
      expect(intern.name).toEqual(inputs[0]);
      expect(intern.id).toEqual(inputs[1]);
      expect(intern.email).toEqual(inputs[2]);
      expect(intern.school).toEqual(inputs[3]);
    });
    it('getRole() should return "Intern"', () => {
        expect(intern.getRole()).toEqual("Intern");
    });
    it("Can get school via getSchool()", () => {
        expect(intern.getSchool()).toEqual(intern.school);
    });
});
