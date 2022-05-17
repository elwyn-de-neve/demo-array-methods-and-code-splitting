// Map methode (1 default export)
const numbers = [ 3, 0, -6, 99, 123 ];

const multiply = numbers.map((number)=>{
    return number * 2
})

console.log( multiply );

export default multiply;
