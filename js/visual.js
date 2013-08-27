// Load Google Chart Library
google.load('visualization', '1.0', {'packages':['corechart']});

// Load visuals
google.setOnLoadCallback(drawVisuals);

function drawVisuals() {
  drawVisual1()
  drawVisual2()
}

function drawVisual1() {

// Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Month', 'DRC', 'CAR', 'S. Sudan'],
    ['Apr. 2012',  133,    400,    100],
    ['June',  1538,    366,    111],
    ['Aug.',  157,    440,    993],
    ['Oct.',  160,    434,    1004],
    ['Dec.',  196,    393,    978],
    ['Apr. 2012',  130,    400,    100],
    ['June',  153,    366,    111],
    ['Aug.',  157,    440,    993],
    ['Oct.',  160,    434,    1004],
    ['Dec.',  193,    393,    979],
    ['Apr. 2012',  133,    400,    1001],
    ['June',  153,    366,    111],
    ['Aug.',  157,    440,    993],
    ['Oct.',  160,    434,    100],
    ['Dec.',  196,    393,    979]
  ]);

  // Create and draw the visualization.
  new google.visualization.ColumnChart(document.getElementById('attack-by-country-visual')).
      draw(data,
           {title:"Reported LRA Attacks by Country",
            width:800, height:400,
            colors: ["#1D1D1D", "#DBDBDB", "#CB4133"],
            vAxis: {title: "Year"},
            hAxis: {title: "LRA Attacks"},
            isStacked: true}
      );
}

function drawVisual2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Killings & Abductions', 45],
    ['Killings Only', 90],
    ['Abductions Only', 13],
    ['Other', 4],
  ]);

  // Set chart options
  var options = {'title':'Attack Type',
                 'width':400,
                 'height':300,
                 'colors' :["#1D1D1D", "#CB4133", "#DBDBDB"]};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}