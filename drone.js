var arDrone = require("ar-drone"),
	configuration = require('./configuration'),
    client = arDrone.createClient();

//var arDroneConstants = require('ar-drone/lib/constants');


var returnedValues ={};

var startReadingData = function() {

   				
client.on('navdata',function(data){
	//console.log(data);
	for (var droneData in data){
		
		if(!allOptionsObject.hasOwnProperty(droneData)){
			//console.log(droneData);
		delete data[droneData];
		}
	}
	
	for (var navdata in allOptionsObject){	
	 deleteNavdata(data[allOptionsObject[navdata].name],allOptionsObject[navdata].options);
	 
    }
	
	
	returnedValues = data;
	console.log(returnedValues);
});

}


var allOptionsObject = {};

var checkPriority = function() {
for (var option in configuration.optionsPriority) {	

	var section = configuration.optionsPriority;
	var tempOptions = JSON.parse(JSON.stringify(configuration.optionsPriority[option]));
	
	checkChildren(tempOptions);

	var tempOptions2={};
	tempOptions2=deleteChildren(tempOptions);
	
	var selectedOptions = {
		name: option, 
		options: tempOptions2,
		mask: configuration.optionsPriority[option].mask,
	};
		
	allOptionsObject[option]=selectedOptions;
	
	
} 
//console.log(allOptionsObject);

sendAtCommands();

}


var checkChildren = function(child) {
	
  for(prop in child) {
	  //console.log(child); 
	 
    if (child[prop] === '0' || prop === 'mask'){
		//console.log(prop + ' ' + child[prop]);
		delete child[prop];
		
	}
    else if (typeof child[prop] === 'object')
     checkChildren(child[prop]);
  }

}

var deleteChildren = function(tempOptions) {

		for (var data in tempOptions) {
			
			if (typeof tempOptions[data] === 'object' && Object.keys(tempOptions[data]).length !== 0) {
				deleteChildren(tempOptions[data]);	
			}
			
			if (typeof tempOptions[data] === 'object' && Object.keys(tempOptions[data]).length === 0){ 	 
				delete tempOptions[data];
			
			}			
		}
		
	return tempOptions;
}


var deleteNavdata = function(drone,config) {
	
  for(prop in drone) {
	  
    if (typeof config[prop] === 'object'){
		deleteNavdata(drone[prop],config[prop]);
		
	} else if (!config.hasOwnProperty(prop)) {
		delete drone[prop];
	}
	
  }
}


var sendAtCommands =  function() {
var navdata_options = [];
var command = '';

	for (var option in allOptionsObject){
		
		if(Object.keys(allOptionsObject[option].options).length!==0) {
			navdata_options += allOptionsObject[option].mask + '|';
			//console.log(navdata_options + ' ' + option);
		}	
	}

	if (navdata_options.charAt(navdata_options.length - 1) === '|')
		{
			 navdata_options = navdata_options.substring(0, navdata_options.length - 1);
			 command = eval(navdata_options);

		}
	
client.config('general:navdata_options', command);
client.config('detect:detect_type', '12');
}

var getData = function() {
    return returnedValues;
}

module.exports.startReadingData = startReadingData;
module.exports.getData = getData;
module.exports.checkPriority = checkPriority;
module.exports.sendAtCommands = sendAtCommands;
