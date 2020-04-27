function greetingMessage(message) {
    return function greetingAuthor(author) {
        console.log(`
            ${ message },  ${ author }!
        `);
    };
}

// var author = greetingMessage("Whatsup");
// author("Viet");
// author(); //undefined for ${ author }

function counter(step = 1) {
    var count = 0;
    return function increaseCount() {
        console.log(`Before: ${ count }`);
        count = count + step;
        console.log(`After: ${ count }`);
        return count;
    }
}

var increaseByOne = counter(1);
increaseByOne(); //1
increaseByOne(); //2
increaseByOne(); //3

var increaseByFive = counter(5);
increaseByFive(); //5
increaseByFive(); //10
