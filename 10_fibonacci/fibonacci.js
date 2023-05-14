const fibonacci = function(position) {
    if(position < 0){
        return 'OOPS'
    }
    position = parseInt(position)
    let a = 0
    let b = 1
    let c
    for(let i = 0; i<position; i++){
      c = a+b
      a = b
      b = c
    }
    return(a)
  };

// Do not edit below this line
module.exports = fibonacci;
