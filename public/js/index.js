var global_ip_array = [];
////////////////////////////////////////////////////////////////////////////////
var lineChart = {};
var global_data_object = {};
var interval_data;
var createChart = function (canvasID) {
//console.log(canvasID);
var canvas = document.getElementById(canvasID);
var data = {
    labels: [],
    datasets: [
        {
            label: " ",
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


//--------------------------------------------------------------------------
var start = new Date();
var navObject = {};
var optionName = ' ';
//obiekt do przechowywania sciezek np. 'demo.batteryPercentage' kiedy dany checkbox (o id odpowiadajacym nazwie opcji) is checked
var checkedOptions = {};

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
	
	

	if (typeof tempOptions === 'object') {
	
	var section = option;
	
		for (var data in tempOptions) {
			
			if (typeof tempOptions[data] === 'object') {
				optionName= data;
				printChildren(tempOptions[data],section);			
			}
			
			else { 
				
				if (optionName == ' ') optionName = '';
				var parameter = section + ' ' + optionName + ' ' + data;
				parameter = parameter.replace("  ", " ");
				global_data_object[parameter] = tempOptions[data];
				//element.appendChild(document.createTextNode(paremeter + ' 	' + tempOptions[data]));				
				//document.getElementById('result').appendChild(element);
				//console.log(tempOptions[data] + ' ' + data);
				

				
					/*if (data === 'batteryMilliVolt' || data === 'accelerometer') {
					
						if(!document.getElementById(data)){
						createCanvas(data);
						
						var x = document.createElement("INPUT");
						x.setAttribute("type", "checkbox");
						}
						
						if (document.getElementById('button'+ ' ' + data).getAttribute("disabled")) {
						adddata(tempOptions[data],data);
						}
						
					}*/
			}		
		}
	}
	
	else {
		/*i++;
		var element = document.createElement("div");
		element.appendChild(document.createTextNode(tempOptions));
		document.getElementById('result').appendChild(section + ' ' + element);
		//console.log(tempOptions);
		console.log(i);
		adddata(tempOptions[data],i);*/
		
		global_data_object[section] = tempOptions[data];
	}
}

/*var checkedOptions = function () {

//tu bedzie sprawdzanie, jezeli stworzony checkbox o id odpowiadajacym


}*/

var  createCanvas = function (canvasID) {

	var newCanvas = document.createElement("canvas");


	newCanvas.setAttribute("id",canvasID);
	newCanvas.setAttribute("height","300");
	newCanvas.setAttribute("width","900");

	//newButton.setAttribute("style","font-size:12px;background-color: #4CAF50");

	document.getElementById('chart').appendChild(newCanvas);


}
//funkcja do automatycznego tworzenia wykresow po przycisnieciu przycisku
var buttonTransferID = function (canvasID) {
	document.getElementById('button ' + canvasID).addEventListener('click', function () {
		//createCanvas(canvasID);
		//createChart(canvasID);
	});
}



//////////////////////////////////////////////////////

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

          ip_header.innerText = this.children[0].innerText;

          var xhttp;

          if (window.XMLHttpRequest) {
              xhttp = new XMLHttpRequest();
          } else {
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
	tr.appendChild(document.createElement("td"));

    tr.children[0].innerText = parameter;
    tr.children[1].innerText = value;
	
	var chart_button = document.createElement('button');
	chart_button.setAttribute('id', 'button ' + parameter);
	chart_button.innerText = 'Create';
	tr.children[2].appendChild(chart_button);
	//buttonTransferID(parameter);
	
    return tr;
}

var loadDronesIP = function(event) {
    var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }

    xhttp.onreadystatechange = function() {


        if (this.readyState == 4 && this.status == 200) {

            var ip_html_list = document.getElementById('ip-list');
            var ip_array = this.responseText.split(",");
            var ip_object_length = Object.keys(ip_array).length;
            var ip_table_length = ip_html_list.children.length;


            if (JSON.stringify(global_ip_array) !== JSON.stringify(ip_array)) {

                          if (ip_object_length >= ip_table_length) {

                            for (var j = ip_table_length; j < ip_object_length ; j++) {
                              var ip_list_element = create_list_element();
                              ip_html_list.appendChild(ip_list_element);
                            }

                            update_ip_data_list(ip_array);


                          } else if (ip_object_length < ip_table_length) {
                            for (var k = ip_table_length; k > ip_object_length ; k--) {

                              ip_html_list.removeChild(ip_html_list.children[k-1]);
                            }
                              update_ip_data_list(ip_array);
                          }

             document.getElementById('available-drones').style.color = "#7CFC00";
            }

            global_ip_array = ip_array;
        }
    }

    setInterval(function() {
        xhttp.open("GET", "ips", true);
        xhttp.send();
    }, 3000);
}

var loadData = function(parameter_array) {
    var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
	

    xhttp.onreadystatechange = function() {
        var increment = 0;
        if (this.readyState == 4 && this.status == 200) {
			
			//navObject = JSON.parse(this.responseText);
			

            var data_html_table = document.getElementById('data-table');
            // expect a JSON in the future, need to upgrade
            var data_object = JSON.parse(this.responseText);
			
			printOptions(data_object);
            //delete everything before update
            while (data_html_table.firstChild) {
                data_html_table.removeChild(data_html_table.firstChild);
            }

   
				for(var j = 0; j<parameter_array.length; j++) {
					var prop = parameter_array[j];
					var data_row = create_data_row(prop, global_data_object[prop].toFixed(2));
                data_html_table.appendChild(data_row);
				}
				

            
        }
    }

    	interval_data = setInterval(function() {
        var drone_ip = document.getElementById('ip-header').innerHTML;
        xhttp.open("GET", "data/" + drone_ip, true);
        xhttp.send();
    }, 3000);
}
var loadParameters = function () {
	 var xhttp;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
	

    xhttp.onreadystatechange = function() {
        var increment = 0;
        if (this.readyState == 4 && this.status == 200) {
			
			//navObject = JSON.parse(this.responseText);
			

            var parameter_html_list = document.getElementById('parameter-list');
            // expect a JSON in the future, need to upgrade
            var data_object = JSON.parse(this.responseText);
			
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
			
			var button = document.createElement('button');
			button.setAttribute('id', 'startButton');
			button.innerText = "Start";
			parameter_html_list.appendChild(button);
			button.addEventListener('click', function () {

	
	var parameter_array = [];
	
	for(var i = 0; i<parameter_html_list.children.length - 1 ; i++) {
		
		if(parameter_html_list.children[i].children[0].checked)
		parameter_array.push(parameter_html_list.children[i].children[1].innerText);
		
	}
	
	clearInterval(interval_data);
	loadData(parameter_array);
		 });
			
            //delete everything before update
           
        }

    }
			 xhttp.open("GET", "data", true);
        xhttp.send();
	
}
window.onload = function() {
	loadParameters();
    //loadDronesIP();
    //loadData();
	   document.getElementById('minimalize-btn').addEventListener("click", function () {
	   this.classList.toggle('glyphicon-chevron-up');
	   this.classList.toggle('glyphicon-chevron-down');
	   
	   document.getElementById('measurement-table').classList.toggle('hidden');
    });
   // document.getElementById('available-drones').addEventListener("click", function () {
   //   this.style.color = "white";
    //});
	
	
}
