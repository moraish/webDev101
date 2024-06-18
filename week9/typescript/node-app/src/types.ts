type User2 = {
    firstName: string,
    lastName: string,
    age?: number
};

interface User3 {
    firstName: string,
    lastName: string,
    age?: number
}


function greets(id: (number | string)): void {
    console.log(id);
}


greets(1);



type Employee = {
    firstName: string,
    lastName: string,
    greet: () => void
};


interface Manager {
    firstName: string,
    lastName: string,
    department: string
};


type techLead = Employee & Manager;

const t: techLead = {
    firstName: "Moraish",
    lastName: "Kapoor",
    greet() {
        console.log("Hi there!")
    },
    department: "energy"
}