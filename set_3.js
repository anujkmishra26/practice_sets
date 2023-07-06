//Que-1
const items = ['apple', 'banana', 'orange'];
const formatArray = (a)=>{
    let i=0;
    while(i<a.length){
        i++;
    }
    return (`The array has ${i} items, and the first item is "${a[0]}", and the last item is "${a[i-1]}".`);
};

const message = formatArray(items);
console.log(message);

//Que-2
const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
};

const formatProduct=(a)=>{
    if(a.inStock)
    {
        return (`${a.name} costs INR ${a.price} and is in stock.
        `);
    }
    return (`${a.name} costs INR ${a.price} and is not in stock.`);
};

const message2 = formatProduct(product);
console.log(message2);

//Que-3
const arr3 = [{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 
25 }];

const findPerson = (a,b)=>{
    for(let i=0;i<a.length;i++)
    {
        if(a[i].name===b)
            return a[i].name;
    }
    return null;
}

console.log(findPerson(arr3,'Akhil'));

//Que-4
const arr4 = ["orange", "banana", "apple"];

const pickFirstAndSecond = (a)=>{
    const [first,second] = arr4;
    const arrObj = {first,second};
    return arrObj;
};

console.log(pickFirstAndSecond(arr4));

//Que-5
const startsWithA = (a)=>{
    if(a.charAt(0)==='A')
        return true;
    else
        return false;
};

console.log(startsWithA("Akshita"));

//Que-6
const arr6 = [1, 2, 3, 5, 8];
const printFirstCharacter = (a)=>{
    return a[0];
}

console.log(printFirstCharacter(arr6));

//Que-7
const arr7 = [0, 1, 1, 2, 3, 5, 8];
const arrRes = [];
const printLastFive = (a)=>{
    let i=0;
    while(i<a.length){
        i++;
    }
    i--;
    let index=5;
    while(index--){
        arrRes.push(a[i]);
        i--;
    }
    arrRes.reverse();
    return arrRes;
}

console.log(printLastFive(arr7));

//Que-8
const arr8 = [1, 2, 3, 5, 8];
const printSecondCharacter = (a)=>{
    return a[1]*20;
};

console.log(printSecondCharacter(arr8));

//Que-9
const arr9 = ["Akshay", "Sweta", "Prerana", "Vinay"];
const sayHello = (a)=>{
    return (`Hello ${a[1]}`);
};

console.log(sayHello(arr9));

//Que-10
const arr10 = [12, 14, 3, 27, 15, 25];
const sumOfEvenIndices = (a)=>{
    let sum=0;
    for(let i=0;i<a.length;i++)
    {
        if(i%2==0){
            sum = sum +a[i];
        }
    }
    return sum;
};

console.log(sumOfEvenIndices(arr10));

//Que-11
const sumFirstTwoElements = (a)=>{
    return a[0]+a[1];
};

console.log(sumFirstTwoElements(arr10));

//Que-12
const arr12 = [7, 4, 10, 7, 5, 3];
const printMultipleOfFive = (a)=>{
    for(let i=0;i<a.length;i++){
        if(a[i]%5==0)
            return a[i];
    }
    return null;
};

console.log(printMultipleOfFive(arr12));

//Que-13
const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
};

const getAddress = (a)=>{
    const {postalCode,city} = userData;
    const getObj = {postalCode,city};
    return getObj;
};
   
console.log(getAddress(userData));

//Que-14
const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
};

const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
};

const printData = (a)=>{
    return (`${a.name} lives in ${a.country}`);
};

console.log(printData(userData1));
console.log(printData(userData2));

//Que-15
const product15 = {
    name: "Apple MacBook Air 2020",
   specification: {
   capacity: "256GB",
    size: "13.3 Inch"
   },
    price: 82900
};

const printProductDetails = (a)=>{
    return (`${a.name} which is of ${a.specification.size}, has a capacity of ${a.specification.capacity}.`);
};

console.log(printProductDetails(product15));