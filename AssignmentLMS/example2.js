function something() {
    console.log(a)
    let a = 2
  }
  
  something()  // a=2 goes into TDZ and gives reference error


//WRONG!!
  function something() {
    // a = undefined
    console.log(a)
    var a = 2
  }
  
  something()  //ouput- 2 as variables with var are hoisted at the top (conceptually)
//read hoisting 



const tanay = 2
tanay = 3   
console.log(tanay)  // output - error as reassignment TO CONSTANT VARIABLE is not possible




const obj = { a: 1, b: 2 }
obj.a = 22
console.log(obj) // {a: 22, b:2} 
/*reason- as reassignment of const objects but there values can be accessed using
keys and then these values can be reassigned*/




const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj = obj2 // error - reassignment of const object



const array = [1, 2, 3, 4]

console.log(array.push(55))

/* no error - array.push will push 55 into the array...
also it will return the new array length */




const array = [1, 2, 3, 4]
array = array.push(55)

/* Error as const array so reassignment is not possible and it 
is trying to reassign with new array length */




