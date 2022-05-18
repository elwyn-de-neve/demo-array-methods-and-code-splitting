console.log( "script is running" );

// Map methode
const arrayOfNumbers = [ 3, 0, -6, 99, 123 ];

const newArrayOfNumbers = arrayOfNumbers.map( ( number ) => {
    return number + 1;
} );

console.log( newArrayOfNumbers );


// Filter methode
const arrayOfVegies = [ "Banaan", "Aardappel", "Peer", "Tomaat", "Komkommer", "Frambozen" ];

const newArrayOfVegies = arrayOfVegies.filter( ( vegie ) => {
    return vegie.includes( "aa" );
    // let vegieToLowerCase = vegie.toLowerCase()
    // return vegieToLowerCase.includes('aa');
} );

console.log( newArrayOfVegies );



// Find methode
const arrayOfNames = [
    { id: 1, firstName: "Maarten" },
    { id: 2, firstName: "Judith" },
    { id: 3, firstName: "Herman" },
    { id: 4, firstName: "Charlotte" }
];

const foundName = arrayOfNames.find( ( name ) => {
    return name.firstName === 'Maarten';
} );

console.log( foundName );


// Sort methode
const arrayOfPeople = [
    { firstName: "Maarten", age: 34 },
    { firstName: "Judith", age: 20 },
    { firstName: "Herman", age: 91 },
    { firstName: "Charlotte", age: 3 },
];

arrayOfPeople.sort((a,b) => {
    if ( a.firstName < b.firstName ){
        return -1 // Naar voren ordenen
    }
    if ( a.firstName > b.firstName ){
        return 1 // Naar achteren ordenen
    }
    return 0; // Positie onveranderd laten
})

// arrayOfPeople.sort(( a, b ) => a.age - b.age )

console.log(arrayOfPeople);
