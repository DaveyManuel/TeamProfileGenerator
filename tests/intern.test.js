const Intern = require('../classes/intern');

describe("Intern", ()=>{
    describe("Intern input", ()=>{
        it ("should match user input", ()=>{
            const samuel = new Intern("Samuel",12,"samuelinsig34@clemson.edu","Clemson University");
            expect(samuel.name).toBe("Samuel");
            expect(samuel.id).toBe(12);
            expect(samuel.email).toBe("samuelinsig34@clemson.edu");
            expect(samuel.school).toBe("Clemson University");
        })
    })
    describe("getRole", ()=>{
        it ("should return 'Intern'", ()=>{
            const samuel = new Intern("Samuel",12,"samuelinsig34@clemson.edu","Clemson University");
            samuel.getRole();
            expect(samuel.getRole()).toBe("Intern");
        })
    })
})