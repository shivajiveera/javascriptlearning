let person=
{
    firstname: "jitte",
    lastname:"verashivaji",
    age: 21,
    weight:88

}
//console.log(person["firstname"])

//adding new properties for object
person["heigth"]=5.8

console.log(person.heigth);

//update exisitng properties
person["weight"]=78
console.log(person.weight);
//removing properties
delete person["age"];

//for/in looping 
for(let x in person){
    //console.log(x);//prints propertis
   // console.log(person[x]);
console.log(x+" "+person[x]);

}