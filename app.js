let x = 42;
console.log(`the meaning of life is: ${x}`);

let name = "Jadon";
console.log(`you need backticks to perform fstring, ${name}!`);

const MY_MAP = { key: "value" };
console.log(`${MY_MAP.key}`);

const MY_ARR = ['hello', 'can', 'you', 'print', 'a', 'whole', 'array'];
MY_ARR.push(' <-- this is a const REFERENCE, but the object it points to is mutable!');
console.log(`${MY_ARR}`);

let expr = "12345" + 6;
let next = 10 * "10";
console.log(`confusing: ${expr}, ${next}, ${parseInt("128", 10)}, ${parseInt(100000000, 2)}`);

const EMPTY_LIST = ['this', /* empty */, 'has', /* empty */, 'empty', /* empty */, 'vals'];
console.log(`${EMPTY_LIST}`);

function creatureTypes(kingdom) {
    return kingdom === "Animalia" ? kingdom : `Sorry, I don't know about ${kingdom}.`;
}

const creature = { species: "Dog", getType: creatureTypes("Animalia"), number: x, 42: 42 };

console.log(creature.species);
console.log(creature.getType);
console.log(`${creature.number} ${creature[42]}`);

console.log(`u falsy 4 that: ${false === true}, ${undefined === true}, ${null === true}, ${0 === true}, ${NaN === true}, ${"" === true}`);

switch (process.argv[2]) {
    case "hi":
        console.log("Well hi there!");
        break;
    case "oh":
        console.log("Falls through if you don't break!");
    case "bye":
        console.log("Fine then.");
    default:
        console.log("what");
}

function yearsFromStartCivilization(year) {
    if (year > 2025) {
        throw new Error("That has not happened yet!");
    } else {
        return 10000 + year
    }
}

try {
    yearRes = yearsFromStartCivilization(2030);
} catch (e) {
    yearRes = "future";
    console.log(yearRes);
} finally {
    console.log("this too!");
}