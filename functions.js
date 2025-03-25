console.log("this is from functions file")

function sayHello(){
    console.log("hello "),
    console.log("hey")
    console.log("how was your day")
}
sayHello()
const balance=0;
const user1={
    name:"obadiah",
    balance:200,
    account:"thebee",
}
const user2={
    name:"Laboso",
    balance:2000,
    account:"1234",
}
function withdraw(){
    if(balance>0){
        console.log("you have insufficient funds")
    }
    else{
        console.log("you can withdraw")
    }
}
withdraw(user1)