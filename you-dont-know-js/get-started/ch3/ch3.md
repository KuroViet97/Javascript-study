# Takeaways

## Consuming Iterators
- checking after `next()` and boolean `done` to manage the looping.
```javascript
    var it = ... //data source

    for (let val of it) {
        console.log(`Iterator value: ${ val }`)
    }
```

## Symmetric operators

- *spread* (iterator consumer): 

```javascript
     //spread iterator into an array
     var vals = [ ...it ];

     //spread iterator into a function
     doSomething( ...it );
```
- *rest* (*gather*)

## Iterables
- Strings
- Arrays
- Maps
- Sets
- etc.

Well, **iterators** are also **iterables**. Behavior of looping of arrays, maps are similar to that of Java.

## Closure
For future concern, I think this is one of the most important concept in JS (?). Full definition:

```quote
Closure is when a function remembers and continues to access variables from outside its scope, even when the function is executed in a different scope.
```

Close works with asynchronus calls, and also in loops: 

```javascript
//onClick() is closed, ${ idx } is a local variable since we use "let". Tricky af :-)
for (let [idx,btn] of buttons.entries()) {
    btn.addEventListener("click",function onClick(){
       console.log(`Clicked on button (${ idx })!`);
    });
}
```

# *`this`* 

- Characteristic of **function**.
- Scope is static.
- *this* is dynamic (*execution context*).

# Prototypes

- Characteristic of **object**.
- "*Linkage*" between objects. Series of objects linked together via prototypes is *prototype chains*.
- Main objective: **delegation**.

```javascript
    //default linkage: Object.prototype
    var csgo = {
        rank: "silver"
    };
    csgo.toString(); //Object.prototype.toString();
```

# Object Linkage - Object.create(...)

```javascript
    var anotherCsgo = Object.create(csgo);
    anotherCsgo.rank //silver
    Object.create(null) //standalone object, not linked anywhere
```

