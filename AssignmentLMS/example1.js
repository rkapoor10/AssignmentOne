if (true) {
    // let a = 2
    var a = 2;
  }
  console.log(a)

  //output - reference error in case of let as let is block scoped
  //output - 2 in case of var as it is function scoped




  let b = 42
  {
    let b = 100
  }
  console.log(b)

  //output - 42 as let is block scoped and 100 is defined in another block



  let c = 100
function App() {
//   console.log('1', c) //output - reference error as let c=42 goes into TDZ(temporal dead zone)
  let c = 42
  console.log('2', c) //42
  {
    let c = 100
  }
  console.log('3', c) //42
}
App()




let x = 100
function App2() {
  x = 42
  console.log('1', x) //ouput - 42
}
App2()