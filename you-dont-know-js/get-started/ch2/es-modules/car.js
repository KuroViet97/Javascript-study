function printCarDetails(carName, carType, carPrice) {
    console.log(`
        Name: ${ carName }
        Type: ${ carType }
        Price: ${ carPrice }
    `);
}

export function createCar(carName, carType, carPrice) {
    var carApi = {
        print() {
            printCarDetails(carName, carType, carPrice);
        }
    };
    return carApi;
}