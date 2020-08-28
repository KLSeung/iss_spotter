// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// let ipAdd;
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
//   ipAdd = ip;
// });

// fetchCoordsByIP(('99.199.86.137'), (error, coords) => {
//   if (error) {
//     console.log("Couldn't fetch doordinates!", error);
//     return;
//   }
  
//   console.log('It worked! Return coordinates:', coords);
// });
// //
// fetchISSFlyOverTimes({ lat: 49.26636, lng: -122.95263 }, (error, flyOverTime) => {
//   if (error) {
//     console.log("Couldn't find flying over times:", error);
//     return;
//   }

//   console.log('These are the times the ISS will fly over your coordinates!: \n', flyOverTime);
// });

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (let instance of passTimes) {
    const time = new Date();
    time.setUTCSeconds(instance.risetime);
    console.log(`Next pass at ${time} for ${instance.duration} seconds`);
  }
});