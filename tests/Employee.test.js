const Employee = require("../lib/Employee");

describe("Employee Class Tests", () => {
    const inputs = ['Kory', 8, 'kory@example.com']
    const employee = new Employee(inputs[0], inputs[1], inputs[2]);
    it("Employee Class functions properly with three inputs.", () => {
      expect(employee.name).toEqual(inputs[0]);
      expect(employee.id).toEqual(inputs[1]);
      expect(employee.email).toEqual(inputs[2]);
    });
    it("Can get name via getName()", () => {
        const name = employee.getName()
        expect(employee.name).toEqual(name);
    });
    it("Can get id via getId()", () => {
        const id = employee.getId()
        expect(employee.id).toEqual(id);
    });
    it("Can get email via getEmail()", () => {
        const email = employee.getEmail()
        expect(employee.email).toEqual(email);
    });
    it("Can get role via getRole()", () => {
        expect(employee.getRole()).toEqual("Employee");
    });

});
