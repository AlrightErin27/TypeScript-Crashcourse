// console.clear();

// let helloTs: string = "Hello typescript";

// // console.log(helloTs);

// let boolyBoi: boolean = true;
// let countyBoi: number = 10;

// boolyBoi = false;
// countyBoi++;
// countyBoi *= 10;

// // console.log(countyBoi + 1);

// //any type is like a swiss army knife
// let sissyBoi: any = "string";
// sissyBoi = 111;

// //type inference
// let stringy = "yo man hi"; //type is now inferred to be a string

// //union --more than one type in a var
// let united: string | number;
// united = 20;
// united = "this is a string";

// //arrays in ts --only hold one data type
// let numList: number[] = [1, 2, 4, 1, 4];
// let genericArr: Array<string> = ["hi", "mushroom"];
// let numString: (string | number)[] = ["banana", 12];

// let mulitArrNums: number[][] = [
//   [1, 5, 3, 0],
//   [12, -24, 9],
// ];

// //create your own type
// type stringOrNum = string | number;

// let thisVar: stringOrNum = 10;
// thisVar = "shrimp";

// //let us make a fxn
function compliment(person: string): string {
  return `I like your haircut ${person}.`;
}
console.log(compliment("Henry"));

// function complimentMany(people: string[]): void {
//   //in callback fxns it will you type inference
//   people.forEach((person) => {
//     console.log(`Hey ${person}, nice shoes!`);
//   });
// }

//Interfaces-- sort of like object factories

interface Person {
  //define key value pairs
  //readonly means can't be changed
  readonly name: string;
  //the ? makes it an optional attribute
  age?: number;
  //functionName(): returnValue
  saying(): void;
}
//to use an interface -- it is like a type
const typeScriptLover: Person = {
  name: "Weston",
  saying: () => console.log("siiiiiick"),
};
typeScriptLover.saying();

//tuples - an arr of fixed length
//declare all types that are going to be in it
let twople: [string, number] = ["pears", 10];
// twople = [13, "this won't work"];

//Enums
enum Color {
  Green,
  Red,
  Yellow,
}
let colorChoice: Color = Color.Yellow;
