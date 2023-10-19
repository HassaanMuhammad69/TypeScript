interface User{
    readonly dbID: number
    name: string 
    userID: number
    goodleID?: string 
    startTrial(): string
    getCoupen(username: string): number
}

interface User{
    githib: string
}

interface Admin extends User {
    role: "admin" | "vice"
}

const Hassaan: Admin={
    role: "vice",
    dbID:56,
    name:"Hassan",
    userID:1234567890,
    githib:"github",
    startTrial:() => {
        return "Starting Trial"
    },
    getCoupen:(username: "Hassaan") =>{
        return 10
    }
}

export{}