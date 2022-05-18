// Filter methode (1 default export)
const filterVegiesByChar = ( vegies ) => {
    return vegies.filter( ( vegie ) => {
        let vegieToLowerCase = vegie.toLowerCase();
        return vegieToLowerCase.includes( "aa" );
    } );
};

export default filterVegiesByChar;