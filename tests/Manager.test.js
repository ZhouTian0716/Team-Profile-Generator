const Manager = require("../lib/Manager");

describe("Manager Class Tests", () => {
    const inputs = ['Kory', 8, 'kory@example.com', 1234]
    const manager = new Manager(inputs[0], inputs[1], inputs[2], inputs[3]);
    it("Can set office number via constructor argument", () => {
      expect(manager.name).toEqual(inputs[0]);
      expect(manager.id).toEqual(inputs[1]);
      expect(manager.email).toEqual(inputs[2]);
      expect(manager.number).toEqual(inputs[3]);
    });
    it('getRole() should return "Manager"', () => {
        expect(manager.getRole()).toEqual("Manager");
    });
    it("Can get office number via getOffice()", () => {
        expect(manager.getOffice()).toEqual(manager.number);
    });
});
