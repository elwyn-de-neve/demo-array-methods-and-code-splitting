// Sort methode (multiple exports)
export const sortPeopleByName = ( people ) => {
    return people.sort( ( currentPerson, previousPerson ) => {
        if ( currentPerson.firstName < previousPerson.firstName ) {
            return -1;
        }
        if ( currentPerson.firstName > previousPerson.firstName ) {
            return 1;
        }
        return 0;
    } );
}

export const sortPeopleByAge = (people) => people.sort( ( currentPerson, previousPerson ) => currentPerson.age - previousPerson.age );