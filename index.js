// create variable drivers
const drivers = [
    { name: "Sally", hometown: "New York" },
    { name: "Annette", hometown: "Los Angeles" },
    { name: "Bobby", hometown: "New York" },
    { name: "Samantha", hometown: "San Francisco" },
    { name: "Ann", hometown: "New York" }
  ];
  
// create variable driverNames
  const driverNames = ["Sally", "Annette", "Bobby", "Samantha", "Ann"];
  

//create function findMatching which takes an array of drivers' names and a string as arguments and returns the matching list of drivers

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  console.log(findMatching(driverNames, "sally")); // ["Sally"]

// create function fuzzyMatch returns all drivers whose names begin with the provided letters.

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  console.log(fuzzyMatch(driverNames, "sa")); // ["Sally", "Samantha"]

// create function matchName

  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  console.log(matchName(drivers, "Annette")); // [{ name: "Annette", hometown: "Los Angeles" }]
  
  
