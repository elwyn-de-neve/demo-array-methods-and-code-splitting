// Filter methode (1 default export)
const vegies = [ "Banaan", "Aardappel", "Peer", "Tomaat", "Komkommer", "Frambozen" ];

const newArrayOfVegies = vegies.filter( (vegie)=>{
    return vegie.includes("aa") || vegie.includes("Aa")
} )

console.log( newArrayOfVegies );

export default newArrayOfVegies;