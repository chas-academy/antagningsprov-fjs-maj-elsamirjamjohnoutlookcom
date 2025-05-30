

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const family = [
    {name:"Rune", age:50}, 
    {name:"Agneta", age:56}, 
    {name:"Daniel", age:32}, 
    {name:"Mirjam", age:20}, 
    {name:"Jakob", age:18}
]
// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function above30(family){
    for (let member of family){
        if (member.age >30){
        console.log(member.name)
    }
   } 
} 

above30(family)
}
// anropa funktionen och skicka med arrayen som argument

uppg8()
module.exports = { uppg8 };