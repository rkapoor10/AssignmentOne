//es5
// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

// to es6

const alo = 1;
if(alo === 1){
    const a =2;
    console.log(a)
}
console.log(alo)




// es5
// var product = function(x, y) {
//     return x * y;
//   };

// console.log(product(3,4))

// to es6

const multiply = (x,y) => x*y
console.log(multiply(3,4))





// es5
// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount + " " 
//   + card.product + " for price of " + card.unitprice + " per piece"

// es6
const customer = {
    name: "Bhaalo"
};
const card = {
    amount:20,
    product: "Aaalo",
    unitPrice: 50
};
console.log(`Hello ${customer.name} wants to buy ${card.amount} 
${card.product} for the the price of ${card.unitPrice}
`)




//es5
// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];

//es6
const [CEO, Roc8, Mentor, ...rest] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"]
console.log(CEO, Roc8, Mentor, rest)





//es5
// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname)

//es6
let [firstName, surname, ...restall] = ["MA","TA","PA","CA"]
console.log(`His name is ${firstName} ${surname}`)




//es5
// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };


//es6
const Aaloo = "Tasty"
const Bhaloo = "Cute"
const Obj = {
    Aaloo,Bhaloo
};
console.log(Obj)





//es5
// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

//es6
const num1=5,num2=10
console.log(`Fifteen is ${num1+num2} and not ${2*num1+num2}`)




//es5
// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//       return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//       return num1 * num2;
//     }
//   };

//es6
const arithmeticsObj = {
    sum: (num1,num2)=>num1+num2,
    product: (num1,num2)=>num1*num2
}
const {sum,product}=arithmeticsObj
console.log(`Sum: ${sum(3,4)} 
and Product: ${product(3,4)}`)




//es5
// var avengers = {
//     operation: "Assemble",
//     members: [
//       {
//         ironMan: "Tony Stark"
//       },
//       {
//         captainAmerica: "Steve Rogers"
//       },
//       {
//         blackWidow: "Natasha Romanoff"
//       }
//     ]
//   }; 
//   var operation = avengers.operation,
//     members = avengers.members;

//es6
const avengers = {
    operations: "Assemble",
    members: [
        {
            ironman: "Tony Stark"
        },
        {
            captainAmerica: "Steve Rogers"
        },
        {
            blackWidow: "Natasha Romanoff"
        }
    ]
};
const {operations,members} = avengers
console.log(`Operations: ${operations} and Members: 
${members}`)

console.log(members)




//es6
// const packIt = (...args) => console.log(args)

// packIt(1,2,3,5,5)


//es5
function packIt(array){
    for(var i=0; i<array.length; i++){
        console.log(array[i])
    }
}
packIt([1,2,3,5,5])




//PREDICT THE OUTPUT

const hello = () => "Hello"
const welcome = () => "Welcome"
const [Hello = hello(), Welcome = welcome()] = ["Namaste"]
console.log(Hello, Welcome)

// let options = {
//      title: "Menu"
//   };
  
//   let {width = 100, height = 200, title="yeh"} = options;
  
//   console.log(title);  // Menu
//   console.log(width);  // 100 
//   console.log(height); 
//   console.log(options); 
//   let arr = [2,3,4]
//   let aaloo = arr.push(5,6,7)
//   console.log(aaloo)
//   console.log(arr)

const obj = {
    alooo : 1,
    bhallo : 2
}

const {c : alooo = [2,3,4].push(5), aloo} = obj 

console.log(alooo)
console.log(obj)
console.log(c)