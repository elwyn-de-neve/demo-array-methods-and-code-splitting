// Find methode (1 default export)
const findStudent = ( students ) => {
    return students.find( ( student ) => {
        return student.id === 4;
    } );
};

export default findStudent;