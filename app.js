console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function (plusNumber) {
        return plusNumber + number
    };
}
let plus15 = plus(15)

console.log(plus15(10))

//Exercise 2
let users = [
{
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
},
{
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
},
{
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
},
{
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
    },
];

function logName(obj) {
    console.log(user.name)
}

users.forEach(logName);

//Exercise 3

function trimUser(user) {
    return {
        name:user.name,
        score:user.score,
    };
}

let userScores = users.map(trimUser);

console.log(userScores);

//Exercise 4
// Returns a new array with elements that passed a condition from a callback function
// The callback function should return true (include) or false (exclude)

//same as below
//function isActive(user) {
//    return user.isActive === true;
//}

let filteredUsers = users.filter((user) => user.isActive);

console.log(filteredUsers);

//Exercise 5

function sortDesc(userA, userB) {
    if (userA.score < userB.score) {
        return 1
    } else {
        return -1
    }
}

users.sort(sortDesc);

console.log(users);

//Exercise 6 

function reduceSum(sum, user) {
    return sum + user.score; 
}

//second number in the reduce function is known as the default value.
let sumScores = users.reduce(reduceSum, 0);

console.log(`Avg user score: ${sumScores / users.length}`);