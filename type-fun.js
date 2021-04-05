console.clear();
var helloTs = "Hello typescript";
// console.log(helloTs);
var boolyBoi = true;
var countyBoi = 10;
boolyBoi = false;
countyBoi++;
countyBoi *= 10;
// console.log(countyBoi + 1);
//any type is like a swiss army knife
var sissyBoi = "string";
sissyBoi = 111;
//type inference
var stringy = "yo man hi"; //type is now inferred to be a string
//union --more than one type in a var
var united;
united = 20;
united = "this is a string";
//arrays in ts --only hold one data type
var numList = [1, 2, 4, 1, 4];
var genericArr = ["hi", "mushroom"];
var numString = ["banana", 12];
var mulitArrNums = [
    [1, 5, 3, 0],
    [12, -24, 9],
];
var thisVar = 10;
thisVar = "shrimp";
//let us make a fxn
function compliment(person) {
    return "I like your haircut " + person + ".";
}
// console.log(compliment("Henry"));
function complimentMany(people) {
    //in callback fxns it will you type inference
    people.forEach(function (person) {
        console.log("Hey " + person + ", nice shoes!");
    });
}
