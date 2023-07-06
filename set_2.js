//Que-1
const person={
    name: "Anuj",
    age: 30
}

console.log(person.age);
person.age=35;
console.log(person.age);

//Que-2
const car1 = { 
    make: 'Porsche', 
    model: '911', 
    horsepower: 450 
};
const car2 = { 
    make: 'Toyota', 
    model: 'Camry', 
    horsepower: 200 
};

const isSportsCar = (a)=>{
    if(a.horsepower>=300){
        return true;
    }
    return false;
}

console.log(isSportsCar(car1)); // true
console.log(isSportsCar(car2)); // false

//Que-3
const person1 = { 
    name: 'Ajay', 
    age: 20 
};

const isEligible= (a,b)=>{
    if(a.age+b > 21)
        return true;
    return false;
}

console.log(isEligible(person1, 1)); // false
console.log(isEligible(person1, 2)); // true

//Que-4
const blog1 = { 
    title: 'How to Learn JavaScript', 
    author: 'John Doe', 
    views: 1430
};
const blog2 = {
    title: '10 Reasons to Start a Blog', 
    author: 'Jane Smith', 
    views: 500
};

const getViews = (a)=>{
    if(a.views > 1000)
        return true;
    return false;
}

console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false

//Que-5
let a=1;
let b=2;
 
[a,b] = [b,a]

console.log(a);
console.log(b);

//Que-6
const add = (a=30,b=0)=> a+b;

console.log(add(2,3));

//Que-7
const obj1 = {
    a: 1, 
    b: 2
};
const obj2 = {
    c: 3, 
    d: 4
};

const combineObj = (a,b)=>{
    let combine = {
        ...a, ...b
    }
    return combine;
};

console.log(combineObj(obj1,obj2));

//Que-8
const person8 = {
    name: 'John Doe',
    address: {
    city: 'New York',
    state: 'NY',
    },
};

const getData = (a)=>{
    const {name,address:{city:address}} = a;
    console.log(name); // John Doe
    console.log(address); // New York
};

getData(person8);

//Que-9
const stringToUpperCase = (a)=> {
    return a.toUpperCase();
}

console.log(stringToUpperCase("hello"));

//Que-10
const concatenateStrings = (a,b)=>{
    return a+b;
}

console.log(concatenateStrings("hello", "world")); // "helloworld"

//Que-11
const lastElement = (a)=>{
    let i=0;
    while(i<(a.length-1)){
        i++;
    }
    return a[i];
}

console.log(lastElement([1, 2, 3, 4, 5])); // 5

//Que-12
const firstElement = (a)=>{
    return a[0];
};

console.log(firstElement([1, 2, 3, 4, 5])); // 1

//Que-13
const sumFirstElement = (a,b)=>{
    return a[0]+b;
}

console.log(sumFirstElement([1, 2, 3], 5)); // 6

//Que-14
const sumFirstAndLast= (a)=>{
    let i=0;
    while(i<a.length)
    {
        i++;
    }
    return a[0]+a[i-1];
}

console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9

//Que-15
const person15 = { 
    name: 'John', 
    age: 25, 
    occupation: 'Software Engineer' 
};
const person16 = { 
    name: 'Jane', 
    age: 45, 
    occupation: 'Data Analyst' 
};

const personInfo = (a)=>{
    return (`${a.name} is ${a.age} years old`);
}

console.log(personInfo(person15));
console.log(personInfo(person16));