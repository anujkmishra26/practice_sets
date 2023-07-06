//Que-1
let array = [4, 78, 8, 3, 6, 0, 12, 34];

const findMax = (a)=>{
    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>=count)
            count=a[i];
    }
    return count;
}

console.log(findMax(array));

//Que-2
const findAvg = (a)=>{
    let avg=0;
    for(let i=0;i<a.length;i++){
        avg+=a[i];
    }
    return (avg/a.length);
}

console.log(findAvg(array));

//Que-3
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const convertEvenToOdd = (a)=>{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2==0)
            a[i]+=1;
    }
    return a;
}

console.log(convertEvenToOdd(numArr));

//Que-4
let words = ['eat', 'sleep', 'code', 'repeat', 'neog', 'community']
const filterWords = (a)=>{
    let finalArr = [];
    for(let i=0;i<a.length;i++)
    {
        if(a[i].length>5)
            finalArr.push(a[i]);
    }
    return finalArr;
}

console.log(filterWords(words));

//Que-5
let wordsArr = ['eat', 'sleep', 'code', 'repeat'];

const CapitalizeWords = (a)=>{
    for(let i=0;i<a.length;i++)
    {
        let temp = a[i].toUpperCase();
        a[i]=temp;
    }
    return a;
}

console.log(CapitalizeWords(wordsArr));

//Que-6
let objArr = [{ name: 'John', age: 21 },{ name: 'Mary', age: 22 },{ name: 'Peter', age: 23 }];

const accessOnlyName = (a)=>{
    let finalArr = [];
    for(let i=0;i<a.length;i++)
    {
        finalArr.push(a[i].name);
    }
    return finalArr;
}

console.log(accessOnlyName(objArr));

//Que-7
const userData = { 
    firstName: 'John',
    lastName: 'Dee' 
}

const podAndTeamAllocation =(a)=>{
    userData.teamId=667543;
    return userData;
}

console.log(podAndTeamAllocation(userData));

//Que-8
const student1={
    firstName: "Anuj", 
    lastName: "Mishra"
}

const student2={
    firstName: "Deepak",
    lastName: "Mishra",
    team: 'B'
}

const student3={
    firstName: "Priya",
    lastName: "Raj"
}

const checkForTeam=(a)=>{
    if('team' in a === false)
    {
        a.team='A';
    }
    return a;
}

console.log(checkForTeam(student1));
console.log(checkForTeam(student2));
console.log(checkForTeam(student3));

//Que-9
const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [
    { name: 'David Flanagan', age: 49 },
    { name: 'Yukihiro Matsumoto', age: 57 },
    ],
    publisher: { name: "O'Reilly Media", location: 'CA' }
}

const {
    title, 
    authors: [
        {name: author1},
        {name: author2}
    ],
    publisher: {name: publisherName}
} = book

console.log(title) // JavaScript: The Definitive Guide
console.log(author1) // David Flanagan
console.log(author2) // Yukihiro Matsumoto
console.log(publisherName) // O'Reilly Media

//Que-10
let arr = [
    {
    name: 'Jay',
    age: 60,
    },
    {
    name: 'Gloria',
    age: 36,
    },
    {
    name: 'Manny',
    age: 16,
    },
    {
    name: 'Joe',
    age: 9,
    },
   ]

const sumOfAges = (a)=>{
    let sumAge = 0;
    for(let i=0;i<a.length;i++)
    {
        sumAge = sumAge + a[i].age;
    }
    return sumAge;
}

console.log(sumOfAges(arr));