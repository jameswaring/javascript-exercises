const findTheOldest = function(people) {
    let winner
    let distance = 0
    let birth
    let death
    for(let i = 0; i < people.length; i++){
      if(!("yearOfDeath" in people[i])){
        console.log(new Date().getFullYear())
        death = new Date().getFullYear()
        birth = people[i].yearOfBirth
      }
      else{
        birth = people[i].yearOfBirth
        death = people[i].yearOfDeath
      }
      if((death - birth) > distance){
        distance = (death - birth)
        winner = people[i]
      }
    }
    return winner
  };

// Do not edit below this line
module.exports = findTheOldest;
