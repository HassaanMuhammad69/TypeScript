
const User={
    name:"John",
    email: "johan@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

let newUser={name:"hassaan", isPaid: false, email:"h@h.com" }

createUser(newUser)


//What happens when an objext returns an object
function Courses():{name: string, Price: number}{
    return{name:"Reactjs", Price: 999}
}

//Type Alias
type User={
    name: string;
    email: string;
    isActive: boolean
}

function generateUser(user: User): User{
    return{name: "", email: "", isActive: true}
}

generateUser({name: "", email: "", isActive: true})

export{}