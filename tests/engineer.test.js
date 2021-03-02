const { TestScheduler } = require('jest')
const Engineer = require('../classes/engineer');

describe("Engineer", ()=>{
    describe("Engineer input", ()=>{
        it ("should match user input", ()=>{
            const jason = new Engineer("Jason",16,"jsanchez300@gmail.com","Jason_Alexander");
            expect(jason.name).toBe("Jason");
            expect(jason.id).toBe(16);
            expect(jason.email).toBe("jsanchez300@gmail.com");
            expect(jason.gitHub).toBe("Jason_Alexander");
        })
    })
    describe("getRole", ()=>{
        it ("should return 'Engineer'", ()=>{
            const jason = new Engineer("Jason",16,"jsanchez300@gmail.com","Jason_Alexander");
            jason.getRole();
            expect(jason.getRole()).toBe("Engineer");
        })
    })
})