import { createCustomCar as createCustomCarInstance } from "./custom-car.js";
//No wrapping function, but one file = one module (file-based)
//Singleton if "import" (single instantiation), "export" to expose instead of apis.
//To use "import" with ES modules, create nearest "package.json" file with "type" : "module"
var customCar = createCustomCarInstance({
    name: "BMW",
    type: "Sportcar",
    price: "60000$"
}, "unique");

customCar.print();
