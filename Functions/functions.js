console.log("hello node");

//functions 
//easy
//q1

const toPower = (a,b)=>{
  let ans =1;
  if(b){
  while(b--){
    ans *= a;
  }
  return ans;
  }
  return 1;
  
}
console.log(toPower(3,3))

//q2

const areaOfHexagon = a => (1.5*1.732*a*a).toFixed(2)

console.log(areaOfHexagon(10))

//q3

const countWords = sentence => (sentence.split(" ")).length

console.log(countWords("Hey this is a sentence"))

//q4

const minValue = (...args)=>Math.min(...args) //why used rest operator in math.min

console.log(minValue(7,5,5,56))

//q5

const maxValue = (...nos) => Math.max(...nos)

console.log(maxValue(12,3,435,4365,3))

//q6

// const whichTriangle = (angleOne, angleTwo, angleThree) => {
//   if(angleOne+angleTwo+angleThree === 180){
//     if(angleOne === angleTwo || angleTwo === angleThree || angleThree === angleOne)
//   }
// }




//MEDIUM


//q1

const findLength = (...args) => args.length

console.log(findLength(1,23,45,6,6))

// but what was wrong with this
const findLength2 = (args) => args.length

console.log(findLength2([1,23,45,6,6]))



//q2

const findIndex = (item,array) => {
  let ans = 99
  array.map((element)=>{   
  if(element === item){
    console.log(array.indexOf(element))
    ans = array.indexOf(element)
    }
  })
  return ans
}

console.log(findIndex(3,[3,4,5,6,7]))   
// //how and why to use rest parameter here


//q3

const replaceWith = (array,a,b) => {
  array.map((item)=>{
    if(item === a) array[array.indexOf(item)] = b
  })
  return array
}

console.log(replaceWith([1,5,3,5,5,6],5,9))

//q4

const mergeArray = (array1,array2) => array1.concat(array2)

console.log(mergeArray([1,2,3],[4,5,6]))


//q5

const charAt = (string,index) => string[index]

console.log(charAt("neoGcamp",4))


// q6

const minDate = (date1,date2) => {

  const array1 = date1.split("/")
  const array2 = date2.split("/")
  if(array1[2]===array2[2]){
    if(array1[1]===array2[1]){
      if(array1[0]===array2[0]){
        return "both dates are same"
      }
      else return ((array1[0]<array2[0])? date1:date2)

    }
    else return ((array1[1]<array2[1])? date1:date2)

  }
  else return ((array1[2]<array2[2])? date1:date2)
}

console.log(minDate('02/05/2021', '24/01/2021'))




//ADVANCED



//q1

//codeOne
// const encodeString = (string,n) => {
//   let array = []
//   let stringArray = string.split("")
//   let code = 0 
//   stringArray.map((character)=>{
   
//     code = string.charCodeAt(string.indexOf(character)) + n 
//     array.push(String.fromCharCode(code))
//   })
//   return array.join("")  
//   // toString returns a string separated by commas
//   // to get without commas we use join()
//   // since toString takes no parameters but join does -->
//   // [1, 2, 3].join("+"); // "1+2+3"/ 
// }

// encodeString("neogcamp", 2)


//codeTwo

// const encodeString = (string,n)=>{
//   let newString = "";
//   let code = 0 ;
//   [...string].forEach((character)=>{  //what is the 3dots doing here exactly
//     code = string.charCodeAt(string.indexOf(character)) + n 
//     newString += String.fromCharCode(code)
//   })
//   return newString
// }

// encodeString("neogcamp" , 2)


//codeThree

const encodeString = (string,n) => {
  let newString = ""
  
  for(let i=0; i<string.length; i++){
    let code = string.charCodeAt(i) + n
    newString += String.fromCharCode(code)
  }
  return newString
}

console.log(encodeString("neogcamp" , 2))



//q2

const toSentenceCase = sentence => {
  const sentenceArray = sentence.split(" ")
  let newArray = []
  sentenceArray.map((word)=>{
    let newWord = word[0].toUpperCase() + word.slice(1)
     // can I use rest operator here ?
    newArray.push(newWord)
  })
  return newArray.join(" ")
}

console.log(toSentenceCase('we are neoGrammers'))

//q3
//doubt
//how is compare function enabling the sorting of numbers??
const sortArray = array => array.sort((a,b)=>a-b)

console.log(sortArray([100,83,32,9,45,61])
)

//q4

const reverseCharactersOfWord = sentence => {
  sentenceArray = sentence.split(" ")
  for(let i=0; i< sentenceArray.length; i++){

    
    sentenceArray[i] = sentenceArray[i].split("").reverse().join("")

    // syntax be like jaan le lo humari humko zinda ni chodo
  }
  return sentenceArray.join(" ")
}

console.log(reverseCharactersOfWord('we are neoGrammers'))