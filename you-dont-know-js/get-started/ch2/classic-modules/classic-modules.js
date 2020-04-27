function Animal(name, age) {
    var animalApi = {
        print() {
            console.log(`
                    Name: ${ name }
                    Age: ${ age } 
            `);
        }
    };
    return animalApi;
}

function Dog(name, age, sound) {
    var dog = Animal(name, age);

    var animalApi = {
        print() {
            dog.print();
            console.log(`Dog's Sound: ${ sound }`);
        }
    };
    return animalApi;
}

function Cat(CatDetails) {
    var cat = Animal(CatDetails.name, CatDetails.age);

    var animalApi = {
        print() {
            cat.print();
            console.log(`
                Cat's Sound: ${ CatDetails.sound }
                Type: ${ CatDetails.type }
            `)
        }
    };
    return animalApi;
}

var creature = Animal("alien", "unknown");
creature.print();

var dog = Dog("Husky", 2, "wofffff");
dog.print();

var cat = Cat({
    name: "Puzz",
    age: 0.5,
    sound: "meow",
    type: "Scottish Fold"
})
cat.print();
