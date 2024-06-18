interface User {
    firstName: string,
    lastName: string,
    age: number,
    email?: string
}

function isLegals(user: User): boolean {
    if (user.age > 18) {
        return true;
    }
    return false;
}


const person: User = {
    firstName: "moraish",
    lastName: "kapoor",
    age: 11,
    email: 'moraish.kapoor@gmail.com'
}


console.log(isLegals(person));