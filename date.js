module.exports.getDate = getDate;

function getDate(){
    var today = new Date()
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

  let day = today.toLocaleDateString("en-US",options);

  return day;
}

module.exports.getDay = getDay
//making the function for only getting the name of the day
function getDay(){
    
    var today = new Date()
    
    var options = {
        weekday: "long",
       
    }

  let day = today.toLocaleDateString("en-US",options);

  return day;
}

//logging the module.exports object
console.log(module.exports)