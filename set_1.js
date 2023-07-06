//Que-1
const checkVote =(age) => {
    if(age>=18){
        console.log("User can vote.");
    }
    else{
        console.log("User can not vote.");
    }
}

checkVote(18);

//Que-2
const findMax = (a,b)=>{
    if(a>b){
        console.log(`${a} is greater than ${b}.`);
    }
    else if(b>a){
        console.log(`${b} is greater than ${a}.`);
    }
    else{
        console.log("Both are equal.");
    }
}

findMax(10,5);

//Que-3
const isPositive = (a)=>{
    if(a>0){
        console.log(`${a} is positive.`);
    }
    else if(a<0){
        console.log(`${a} is negative.`);
    }
    else{
        console.log(`${a} is zero.`);
    }
}

isPositive(9);
isPositive(-8);

//Que-4
const isEvenOrOdd = (a)=>{
    if(a%2==0){
        console.log(`${a} is even.`);
    }
    else{
        console.log(`${a} is odd.`);
    }
}
isEvenOrOdd(5);
isEvenOrOdd(8);

//Que-5
const isPresent = (a)=>{
    let flag=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==='a'){
            console.log("Includes a");
            flag++;
            break;
        }
        else if(a[i]==='A'){
            console.log("Includes A");
            flag++;
            break;
        }
    }
    if(flag===0)
    {
        console.log("Does not include");
    }
}

isPresent("Tanay");
isPresent("Jeep");
isPresent("Anuj");

//Que-6
const findLength = (a)=>{
    let count=0;
    let i=0;
    while(i<a.length){
        count++;
        i++;
    }
    if(count>5){
        console.log("more than 5 characters.");
    }
    else if(count===5){
        console.log("equal to 5 characters.");
    }
    else{
        console.log("less than 5 characters.");
    }
}

findLength("Programming");
findLength("AnujK");
findLength("Jeep");

//Que-7
const isBetween = (a)=>{
    if(a>=1 && a<=10){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

isBetween(5);
isBetween(11);

//Que-8
const isContain = (a)=>{
    let count=0;
    for(let i=0;i<a.length;i++){
        if((a[i]==='H' || a[i]==='h') && a[i+1]==='e' && a[i+2]==='l' && a[i+3]==='l' && a[i+4]==='o'){
            count++;
            console.log("true");
            break;
        }
    }
    if(count===0){
        console.log("false");
    }
}

isContain("Hello World");
isContain("World");

//Que-9
const isMultipleOfThree = (a)=>{
    if(a%3===0){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

isMultipleOfThree(5);
isMultipleOfThree(9);

//Que-10
const multiplyWithTen = (a)=> {return a*10;}

multiplyWithTen(20);
multiplyWithTen(40);

//Que-11
const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
   }
   
const {title,price,description} = product;

console.log(title);
console.log(price);
console.log(description);

//Que-12
const book={
    title: "Harry Potter",
    author: "J K Rowlins",
    pages: 1000
}

const getBookDetails =(a)=>{
    if(a.pages>100){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

getBookDetails(book);

//Que-13
const person = {
    name: "Anuj",
    age:19,
    occupation: "Data Scientist"
}

console.log(person.occupation);

const changeOccupation = (a,b)=>{
    person.occupation=b;
}

changeOccupation(person,"AI Engineer");
console.log(person.occupation);

//Que-14
const numbers = [1,2,3];
const {num1,num2,num3} = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

//Que-15
const defaultParamsFunc = (a,b,c)=>{
    if(c===undefined){
        c=4;
    }
    return a*b*c;
}

console.log(defaultParamsFunc(3,1));
console.log(defaultParamsFunc(3,10));