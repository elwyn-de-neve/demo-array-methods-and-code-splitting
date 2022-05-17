// Sort methode (multiple exports)
const persons = [
    { firstName: "Maarten", age: 34 },
    { firstName: "Judith", age: 20 },
    { firstName: "Herman", age: 91 },
    { firstName: "Charlotte", age: 3 },
];

export const sortedPersonsName = persons.sort((huidige,vorige)=>{
    if ( huidige.firstName < vorige.firstName ) {
        return -1;
    }
    if ( huidige.firstName > vorige.firstName ) {
        return 1;
    }
    return 0;
})

console.log( sortedPersonsName );

export const sortedPersonsAge = persons.sort((a,b) => a.age - b.age)

console.log( sortedPersonsAge );