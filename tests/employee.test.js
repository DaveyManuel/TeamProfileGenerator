const Employee = require ('../classes/employee');

describe("Employee", ()=>{
    describe("Employee input", ()=>{
        it ("should match user input", ()=>{
            const manuel = new Employee("Manuel",32,"mannyinsig@gmail.com");
            expect(manuel.name).toBe("Manuel");
            expect(manuel.id).toBe(32);
            expect(manuel.email).toBe("mannyinsig@gmail.com");
        })
    })
    describe("getRole", ()=>{
        it ("should return 'Employee'", ()=>{
            const manuel = new Employee("manuel",32,"mannyinsig@gmail.com");
            manuel.getRole();
            expect(manuel.getRole()).toBe("Employee");
        })
    })
})