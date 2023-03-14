// code your solution here
function saturdayFun(e = "roller-skate") {
  return `This Saturday, I want to ${e}!`;
}
//console.log(saturdayFun());

function mondayWork(e = "go to the office") {
  return `This Monday, I will ${e}.`;
}



function wrapAdjective(adjective = "*"){
    const innerF = function(para = "special") {
       return `You are ${adjective}${para}${adjective}!`;
    }
    return innerF;
}
console.log(wrapAdjective());
