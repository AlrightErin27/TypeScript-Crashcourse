# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) TypeScript

### Learning Objectives
- Describe advantages and disadvantages to using TypeScript
- Identify and use basic types, interfaces and additional TypeScript stuff
- Understand type inference and declaration
- Configure and use the typescript compiler

___

# Why TypeScript?
- Identifying bugs at compile time is better than finding them at runtime
- type enforcement in large code bases reduces bugs across the organization/teams/time
- TypeScript allows ESNext syntax -- though many of the features highlighted by TS folks have been introduced with ES6 and 7
- Lowish barrier to entry
    - can use it sparingly to start (your JS is probably fine, just add some typings or `any`)
    - implicit and explicit typing 

[TypeScript Docs / Handbook](https://www.typescriptlang.org/docs)

This is a pretty great resource put together by some benevolent dev:

[TypeScript Deep Dive by @basarat](https://basarat.gitbooks.io/typescript/)

# Disadvantages
- Adds complexity to your project
    - directory structure needs source and build
    - setup compiler or babel and/or webpack and build step
- TS compiler will yell at you for things that you have perceived as legal for the entirety of your JS career
- Advanced techniques can be a little confusing
___
## Let's get started!
Install TypeScript and its compiler on your local machine!
```bash
$ npm install -g typescript
$ tsc -v 
Version 3.3.X
```

We're all set!

Let's test it out
___
# Basic Types
We can get started with TypeScript by adding just a little extra cruft to the JS syntax we know and love. By now, you are all very familiar with the javascript primitives: `string`, `number`, `boolean`. TypeScript makes use of these primitives... and then adds to it!

## Applying Type constraints to variables

In order to apply type constraints to our variables with TypeScript, all we need to do is declare a `type` after the variable name, separated by a colon

```typescript
let myVariable: type = "my value"
```
|Basic Types| <= according to the TS Docs 🎉
|:---------:|---|
| String    | Your run of the mill string type  
| Number    | Can be used with decimal integers and floats as well as hex, octal and binary numbers 
| Boolean   | our old friends `true` and `false`
| Any       | oh my! you're telling me I don't actually have to plan ahead?
| Array     | lets add primitive typings to arrays (syntax may vary!) 
| void      | used for functions that do not return a value
| null      | `null`, yup
| undefined | `undefined`, that too 
| Object    | anything that is not `number`, `string`, `boolean`, `null`, or `undefined`
| never     | represents the type of values that never occur
| Tuple     | enforced typings on a specified number elements
| Enum      | Enforce a set of values -- we can use custom `Type`s in many cases

### `strings`
```typescript
let myString: string = "Hello, World!"
let myTemplateLiteral: string = `"${myString}" is the phrase we always use when learning a new language.`
```

### `numbers`
```typescript
let myInt: number = 3;
let myFloat: number = 6.4;
let myHex: number = 0xf00d;
let myOct: number = 0o744;
let myBin: number = 0b1010;
```

### `boolean`
```typescript
let myBool: boolean = true;
myBool = false;
```

### `any`
When a data type is not known or required ahead of time, `any` can be used.
```typescript
let myAny: any = 'what should we throw in here?'
myAny = 7
myAny = true

// all ok!
```
However, if we know that a variable can accept both strings or numbers, TypeScript allows us to plan for this scenario with the `|` operator. (This is called a "Union" type and can be a more advanced technique)

```typescript
let myIndecisiveVar: string | number = 'This is ok!'
myIndecisiveVar = 5 // also ok!
myIndecisiveVar = false // Throws an error
```


### Arrays
TypeScript offers 2 options for enforcing type constraints on an array. 
1. Adding `[]` after a type declaration
2. Using angle brackets and the `Array` generic type
```typescript
let myStrings: string[] = ['Hello','World'];
let myStringArray: Array<string> = ['Hello','Squirrel'];

let myNums: number[] = [9,3,6,12];
let myNumArr: Array<number> = [3,3,3,3,3,3];

let arrayOfAny: any[] = ['what','is','purpose','of','this','array','?!', 2, true, {gross: "yup"}]
```
Be careful when using the angle bracket notation as it can cause conflicts when working with TSX, the TypeScript equivalent of JSX.

### Explicit vs Implicit Typing
All this extra syntax making your headspin?

The typescript compiler can infer some of your typings from the initial definition!
```typescript
let str: string = 'I am explicitly defined as a string type'
let otherStr = 'I am implicitly defined as a string type'
```

The rules that govern these type inferences can vary and/or be configured by the compiler. 

For more information: [Rules of Type Inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)

___
# More Types and TypeScript Syntax

## Unions
We can enforce types of multiple values with a type declaration on a union
```typescript
type Color = 'Green' | 'Red' | 'Blue'

let colorChoice: Color = 'Green' 
colorChoice: Color = 'Purple' // Throws an error
```
___
## Interfaces
What if we would like to enforce typings on the shape of an `object`?

**Enter the interface!**

Typescript offers us the ability to do this with `interfaces`:

```typescript

interface DogObject {
    name: string;
    age: number;
    isGood: boolean;
    wagsTail?: boolean;
}

function isGoodDog(dog: DogObject): boolean {
    let {name, age, isGood} = dog;
    let message = `${name} is ${age} and is very good! ${dog.wagsTail ? 'wag, wag, wag' : ''}`
    if (!isGood) {
        console.log('How dare you?!')
    }
    console.log(message)
    return true
}

let oneGoodBoy: DogObject = {
    name: 'Harley',
    age: 7,
    isGood: true,
    wagsTail: true 
}

let barnCat: object = {
    name: 'Nightmare',
    age: infinity,
    clawedKiller: true,
    isGood: false
}

isGoodDog(oneGoodBoy) // ok!
isGoodDog(barnCat) // Error, barnCat is not 'DogObject' type


```


___

## Tuples
>Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. 

```typescript
let myStringNumTuple: [string, number] = ["Hello", 42];
myStringNumTuple = [42, "Hello"] // ☠️ will throw an error at compile time
```

When accessing an element with a known index, the correct type is retrieved:
```typescript
console.log(myStringNumTuple[0].substr(1)); // OK
console.log(myStringNumTuple[1].substr(1)); // Error, 'number' does not have 'substr'
```
When accessing an element outside the set of known indices, a union type is used instead:
```typescript
myStringNumTuple[3] = "world"; // OK, 'string' can be assigned to 'string | number'

console.log(myStringNumTuple[5].toString()); // OK, 'string' and 'number' both have 'toString'

myStringNumTuple[6] = true; // Error, 'boolean' isn't 'string | number'
```
___
## Enum
According to the TypeScript docs, Enums allow us to 'give friendly names to a set of numeric values'.

```typescript
enum Color {Green, Red, Blue}
let colorChoice: Color = Color.Green
let colorString: string = Color[0]
```
While this does enforce a `Color` Type that only has the values `"Green"`, `"Red"`, `"Blue"`... this little bit of TS compiles to this mess of JavaScript:
```js
var Color;
(function (Color) {
    Color[Color["Green"] = 0] = "Green";
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

var colorChoice = Color.Green; // evaluates to 0
var colorString = Color[0] // evaluates to "Green"
```

![WTF](https://media.giphy.com/media/ukGm72ZLZvYfS/giphy.gif)

I'm not saying that there are not uses for an `enum` in the wild... but if you are using it to enforce typings like this without the need for reverse mapping of integers to values etc... you are likely better off using a Union type.
___
## `Generics<T>`

