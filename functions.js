console.log("this is from functions file")

function sayHello(){
    console.log("hello "),
    console.log("hey")
    console.log("how was your day")
}
sayHello()
const balance=200;
const user1={
    name:"obadiah",
    balance:2000,
    account:"thebee",
}
const user2={
    name:"Laboso",
    balance:2000,
    account:"1234",
}
function withdraw(){
    if(balance<0){
        console.log("you have insufficient funds")
    }
}
withdraw(user1)