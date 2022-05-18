// Import variables
import { numbers, vegies, students, people } from "./data/variables.js";

// Import functions
import multiplyNumbers from "./functions/mapFunction.js";
import filterVegiesByChar from "./functions/filterFunction.js";
import findStudent from "./functions/findFunction.js";
import { sortPeopleByName, sortPeopleByAge } from "./functions/sortFunction.js";

// Map methode
console.log( multiplyNumbers( numbers ) );

// Filter methode
console.log( filterVegiesByChar( vegies ) );

// Find methode
console.log( findStudent( students ) );

// Sort methode
console.log( sortPeopleByName( people ) );
console.log( sortPeopleByAge( people ) );