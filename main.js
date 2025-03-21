// myname ="Oba"
// console.log(myname)

const teacher={
    name:"james",
    age:23,
    subject: "maths",
}
const animal ={
     legs :4,
     name: "goat",
     head: {
        eyes:2,
        mouth:1,
     }
}
const house = {
    door:1,
    windows:2,
    roof:1, 
}
house.roof=3,
delete house.roof
teacher.subject = "english"  
console.log(teacher.name)
console.log(teacher.subject)
console.log(animal.legs)
console.log(house.roof)
console.log(animal.head.eyes)