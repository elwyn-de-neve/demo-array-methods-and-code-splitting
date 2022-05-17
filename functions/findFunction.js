// Find methode (1 default export)
const names = [
    { id: 1, firstName: "Maarten" },
    { id: 2, firstName: "Judith" },
    { id: 3, firstName: "Herman" },
    { id: 4, firstName: "Charlotte" }
];

const foundName = names.find((name)=>{
    return name.id === 4;
})

console.log( foundName );

export default foundName;