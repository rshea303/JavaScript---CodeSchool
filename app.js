function makeTorpedoAssigner ( passengerList ) {
  
  return function ( name ) {
    for(var i = 0; i < passengerList.length; i++) {
      if ( passengerList[i] === name) {
        alert("Attention " + name + "!\nPlease return to station #" + (i+1) + " and prepare for battle!");
      }
    }
  };
}

var passengerArray = ['al', 'bob', 'chris', 'diane', 'elvis'];

var getReady = makeTorpedoAssigner( passengerArray );
getReady("diane");
getReady("elvis");
