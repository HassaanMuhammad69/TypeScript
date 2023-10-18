
function addtwo(num: number){
    return num +2
}

function getUpper(val:string){
    return val.toUpperCase()
}

function SignupUser(name:String, email:String, isPaid: boolean){}

let loginUser = (name:string, email: string, isPaid: boolean= false)=>{}

addtwo(5)
getUpper("hassaan")
SignupUser("hassaan", "hassan@gam.com",false)
loginUser("Hassaan","hassan@gmail.com")

///Better way to write function
const getHello= (myval:string):string =>{
    return ""
} 
getHello("Hassan")



//Map
const heroes=["thor", "spidey"]

heroes.map((hero):string =>{
    return `hero is ${hero}` 
})

//When to use void
function consoleERR(errMsg:string): void{
     console.log(errMsg)
}

//When to use Never
function handleErr(errMsg:string): never{
    throw new Error(errMsg)
}

export{}