const { nextISSTimesForMyLocation } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (let instance of passTimes) {
      const time = new Date();
      time.setUTCSeconds(instance.risetime);
      console.log(`Next pass at ${time} for ${instance.duration} seconds`);
    }
  })
  .catch((error) => {
    console.log("The data could not be fetched:", error);
  });
