var global_ip_array = [];
var global_parameter_array = [];
var description_object = {};
var lineChart = {};
var global_data_object = {};
var interval_data;
var new_interval = 3000;
var start = new Date();
var navObject = {};
var optionName = ' ';



var createChart = function (canvasID, labelY) {
var canvas = document.getElementById(canvasID);
var data = {
    labels: [],
    datasets: [
        {
            label: canvasID,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            borderColor: "rgba(255, 0, 0, 0.6)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 5,
            pointHitRadius: 10,
            data: [],
        }
    ]
};


var option = {
	showLines: true,
	scales: {
        xAxes: [{
        display: true,
        scaleLabel: {
        display: true,
        labelString: 'Seconds'
           }
     }],
	    yAxes: [{
        display: true,
        scaleLabel: {
        display: true,
        labelString: labelY
           }
     }]
	}
};

var myLineChart = Chart.Line(canvas,{
	data:data,
	options:option
});

lineChart[canvasID]=myLineChart;
		
}


function adddata(value,dataName){
  var startTime = start.getTime();
  var endTime = new Date().getTime();
  var time = endTime - startTime;
  var seconds = Math.floor(time / 1000);

  lineChart[dataName].data.datasets[0].data.push(value);
  lineChart[dataName].data.datasets[0].label = dataName;						
  lineChart[dataName].data.labels.push(seconds);
  lineChart[dataName].update();

}


var printOptions = function (navObject) {

	for (var option in navObject) {					
		var tempOptions = navObject[option];
		
		if (typeof tempOptions === 'object' && Object.keys(tempOptions).length === 0){
			delete tempOptions;	
		}
					
		else {	
			optionName = ' ';
			printChildren(tempOptions, option);
						
		}		
	} 
}
 
 

var printChildren = function(tempOptions, option) {
	
var section = option;

	//if (typeof tempOptions === 'object') {
	
		for (var data in tempOptions) {
			
			if (typeof tempOptions[data] === 'object') {
				optionName= data;
				printChildren(tempOptions[data],section);			
			}
			
			else { 
				
				if (optionName == ' ') optionName = '';
				var parameter = section + ' ' + optionName + ' ' + data;
				parameter = parameter.replace("  ", " ");
				parameter = parameter.replace("  ", " ");
				global_data_object[parameter] = tempOptions[data];
			}		
		}
	//}
	
	//else {
	//	console.log(tempOptions);
	//	global_data_object[section] = tempOptions;
	//}
	
}

var createCanvas = function (canvasID) {
	var newCanvas = document.createElement("canvas");
	newCanvas.setAttribute("id",canvasID);
	
	return newCanvas;
}


var create_row = function() {
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    tr.appendChild(td);

    return tr;
}

var create_list_element = function() {
    var li = document.createElement("li");
    var anchor = document.createElement("a");

    anchor.setAttribute('href', '#');
    li.appendChild(anchor);

    return li;
}


var update_ip_data_list = function (ip_array) {
    var data_list = document.getElementById('ip-list');
    var ip_header = document.getElementById('ip-header');

    for (var i = 0; i < data_list.children.length; i++) {
      var li = data_list.children[i];
      li.children[0].innerText = ip_array[i];

      li.onclick = function () {
		  var xhttp;
          ip_header.innerText = this.children[0].innerText;

          if (window.XMLHttpRequest) {
              xhttp = new XMLHttpRequest();
          } 
		  
		  else {
              xhttp = new ActiveXObject('Microsoft.XMLHTTP');
          }

          xhttp.open("GET", "data/" + ip_header.innerText, true);
          xhttp.send();

      };
    }
}

var create_data_row = function(parameter, value) {
    var tr = create_row();
	

				
    tr.appendChild(document.createElement("td"));
    tr.children[0].innerText = parameter;
    tr.children[1].innerText = value;
	
		var prop = parameter;
	prop = prop.replace(/ /g, "_");
	if (description_object.hasOwnProperty('desc_'+ prop)) {
		tr.children[0].setAttribute("data-tooltip", description_object['desc_'+ prop]);
	}
    return tr;
}


var loadData = function(parameter_array) {
    var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } 
	else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
	

    xhttp.onreadystatechange = function() {
        var increment = 0;
		
        if (this.readyState == 4 && this.status == 200) {
			var data_html_table = document.getElementById('data-table');
            
			var response_object = JSON.parse(this.responseText);
			var data_object = response_object["objectValues"];
			description_object = response_object["objectDesc"];
			
			printOptions(data_object);
            
            while (data_html_table.firstChild) {
                data_html_table.removeChild(data_html_table.firstChild);
            }

			for(var j = 0; j<parameter_array.length; j++) {
				var prop = parameter_array[j];

				
				if (!isNaN(global_data_object[prop])) {
				var data_row = create_data_row(prop, global_data_object[prop].toFixed(2));
				data_html_table.appendChild(data_row);
				adddata(global_data_object[prop].toFixed(2), parameter_array[j]);
				}
				else {
					//console.log(global_data_object[prop]);
				var data_row = create_data_row(prop, global_data_object[prop]);
				data_html_table.appendChild(data_row);
				//adddata(global_data_object[prop], parameter_array[j]);
				}
				

					
				
			}
				
            
        }
    }
		
	clearInterval(interval_data);
	        var drone_ip = document.getElementById('ip-header').innerHTML;
        xhttp.open("GET", "data/" + drone_ip, true);
        xhttp.send();
    interval_data = setInterval(function() {

        xhttp.open("GET", "data/" + drone_ip, true);
        xhttp.send();
    },  
	
	parseInt(new_interval));
}

var setHidden = function (parameter) {
	var canvas = document.getElementById(parameter);
	canvas.classList.toggle('hidden');
}

var loadCharts = function (parameter_array) {
	var chart_list = document.getElementById('chart-list');
	
	for(var j = 0; j<parameter_array.length; j++) {
			console.log(parameter_array[j]);
		if (!document.getElementById(parameter_array[j]) && !(parameter_array[j] == "demo controlState" || parameter_array[j] == "demo flyState")) {										//instanceof Number???
			
			var li = document.createElement('li');
			var header = document.createElement('h4');
			header.innerText = parameter_array[j];
			li.appendChild(header);
			li.style.position = "relative";
						
			var canvas = createCanvas(parameter_array[j]);
			chart_list.appendChild(li);
		
			var span = document.createElement('span');
			span.className += ' minimalize-btn glyphicon glyphicon-chevron-up';
			span.setAttribute('id', 'button ' + parameter_array[j]);
			span.style.top = "0";
			
			span.addEventListener("click", function () {
			   this.classList.toggle('glyphicon-chevron-up');
			   this.classList.toggle('glyphicon-chevron-down');
			});
	
			span.setAttribute('onclick', 'setHidden("' + parameter_array[j] + '");');
			li.appendChild(span);
			li.appendChild(canvas);
			
			var parameter = parameter_array[j];
			parameter = parameter.replace(" ", "_");
			parameter = parameter.replace(" ", "_");
			parameter = parameter.replace(" ", "_");
			
			if (description_object.hasOwnProperty('desc_'+parameter)){
				console.log(description_object['desc_'+parameter]);
				createChart(parameter_array[j],description_object['desc_'+ parameter]);
			}
			else {
				var labelY = '';
				createChart(parameter_array[j],labelY);
			}		
		}
		
	}
	
};


var loadParameters = function () {
	 var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } 
	else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
	
    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
			
            var parameter_html_list = document.getElementById('parameter-list');
            
			var response_object = JSON.parse(this.responseText);
            var data_object = response_object["objectValues"];
			description_object = response_object["objectDesc"];
			
			printOptions(data_object);
			
			
			for (var x in global_data_object) {
				var li = document.createElement('li');
				var input = document.createElement('input');
				var span = document.createElement('span');
				input.setAttribute('type', 'checkbox');
				span.innerText = x;
				li.appendChild(input);
				li.appendChild(span);
				parameter_html_list.appendChild(li);
			}
			
			var button_check = document.createElement('button');
			button_check.style.width = "50%";
			button_check.innerText = "Check All";
			parameter_html_list.appendChild(button_check);
			
			var button_uncheck = document.createElement('button');
			button_uncheck.style.width = "50%";
			button_uncheck.innerText = "Uncheck All";
			parameter_html_list.appendChild(button_uncheck);
			
			var button = document.createElement('button');
			button.setAttribute('id', 'startButton');
			button.innerText = "Start";
			parameter_html_list.appendChild(button);
			
		
			
			button.addEventListener('click', function (event) {
		
				global_parameter_array = [];
				for(var i = 0; i<parameter_html_list.children.length - 3 ; i++) {

					if(parameter_html_list.children[i].children[0].checked)
					global_parameter_array.push(parameter_html_list.children[i].children[1].innerText);
					
				}
	
				clearInterval(interval_data);

				loadData(global_parameter_array);
				loadCharts(global_parameter_array);
				

			});
			
			button_check.addEventListener('click', function (event) {
				var parameter_html_list  = document.getElementById("parameter-list");
						event.stopPropagation();
				var target = event.target;
				

				
								for(var i = 0; i<parameter_html_list.children.length - 3 ; i++) {

					parameter_html_list.children[i].children[0].checked = true;
				
					
				}

			});
			
				button_uncheck.addEventListener('click', function (event) {
				event.stopPropagation();
				var parameter_html_list  = document.getElementById("parameter-list");
				
				var target = event.target;

				
				
				for(var i = 0; i<parameter_html_list.children.length - 3 ; i++) {

					parameter_html_list.children[i].children[0].checked = false;
				
					
				}

			});
			
        }

    }
		xhttp.open("GET", "data", true);
        xhttp.send();
}

var newInterval = function (event){
	var target = event.target;

	new_interval = target.getAttribute('data-refresh');
	var parent = document.getElementById("refresh-list");
	
	for(var x of parent.children) {
		x.children[0].classList.remove("active");
	}
	target.classList.add("active");
	loadData(global_parameter_array);

}

window.onload = function() {
	
	setTimeout(loadParameters, 3000);
	
	document.getElementById('minimalize-btn').addEventListener("click", function () {
		this.classList.toggle('glyphicon-chevron-up');
		this.classList.toggle('glyphicon-chevron-down');
		   
		document.getElementById('measurement-table').classList.toggle('hidden');
	});

}
