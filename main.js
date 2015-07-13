function testConsoleLog(){
for (var i = 0; i < 10; i++) {
  console.log(i);
}
}
var n =0
function testReturn(){
  for (n = 0; n < 10; n++) {
    console.log(n);
    if (n === 5){
      return n
    }
}
}
testConsoleLog()
testReturn()

console.log("return exits the loop at " + n + " even though the exit is 10" )
