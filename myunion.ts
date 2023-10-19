type user= {
    name:string,
    id: number
}
type admin={
    username:string,
    id: number 
}

let hassaan : user | admin ={name:"hassaan", id:55}

hassaan ={username: "hassaanBoss", id:85}

//Union type in array
let users :(number|string)[]=[1,"two",85]

export{}

