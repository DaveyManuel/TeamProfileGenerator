const Manager = require('../classes/manager');

describe("Manager", ()=>{
    describe("Manager input", ()=>{
        it ("should match user input", ()=>{
            const david = new Manager("David",5,"davidmsanchez250@gmail.com",1007);
            expect(david.name).toBe("David");
            expect(david.id).toBe(5);
            expect(david.email).toBe("davidmsanchez250@gmail.com");
            expect(david.officeNumber).toBe(1007);
        })
    })
    describe("getRole", ()=>{
        it ("should return 'Manager'", ()=>{
            const david = new Manager("David",5,"davidmsanchez250@gmail.com",1007);
            david.getRole();
            expect(david.getRole()).toBe("Manager");
        })
    })
})