import { createCar as createCarInstance } from "./car.js";

function printCustomCar(car, rarity) {
    car.print();
    console.log(`Rarity: ${ rarity }`);
}

export function createCustomCar(CarObject, rarirty) {
    var originalCar = createCarInstance(CarObject.name, CarObject.type, CarObject.price);
    
    var customCarApi = {
        print() {
            printCustomCar(originalCar, rarirty);
        }
    };

    return customCarApi;
}

var car = createCustomCar({
    name: "BMW",
    type: "German sportcar",
    price: "40000$"
}, "unique");