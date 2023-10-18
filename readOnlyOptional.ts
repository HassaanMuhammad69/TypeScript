type User={
   readonly _id: number,
    name:string,
    email:string,
    creditCard?: number
}

let createUser: User={
    _id: 1234567890,
    name:"John Doe",
    email:"john.doe@gmail.com"
}

//This will not work as _id is readonly
// createUser._id=5599

export{}


