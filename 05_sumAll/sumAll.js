const sumAll = function(a, b) {
    if(a < 0 || b < 0 || typeof a != "number" || typeof b != "number"){
      return 'ERROR'
    }
    if(a > b){
        let c = a
        a = b
        b = c
      }
    let total = 0
    for(let i=a; i<b+1; i++){
      total += i;
    }
    return total
  }

// Do not edit below this line
module.exports = sumAll;
