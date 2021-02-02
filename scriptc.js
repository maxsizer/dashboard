

$.getJSON(
"https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumCasesByPublishDate&metric=cumDeaths28DaysByPublishDate&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=json",
function(data) {
  console.log(data);

  var totdeaths = data.body[0].cumDeaths28DaysByPublishDate;
  var deaths = data.body[0].newDeaths28DaysByPublishDate;
  var totcases = data.body[0].cumCasesByPublishDate;
  var cases = data.body[0].newCasesByPublishDate;
  var date = data.body[0].date;



  $('.totdeaths').append(totdeaths);
  $('.deaths').append(deaths);
  $('.totcases').append(totcases);
  $('.cases').append(cases);
  $('.date').append(date);



var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  theme: "light2",
  title:{
    text: "Daily Cases last 100 days"
  },
  axisX:{
    valueFormatString: "DD MMM, YYYY",
    crosshair: {
      enabled: true,
      snapToDataPoint: true
    }
  },
  axisY: {
    title: "Daily Cases",
    includeZero: true,
    crosshair: {
      enabled: true
    }
  },
  toolTip:{
    shared:true
  },
  legend:{
    cursor:"pointer",
    verticalAlign: "bottom",
    horizontalAlign: "left",
    dockInsidePlotArea: true,
    itemclick: toogleDataSeries
  },
  data: [{
    type: "line",
    showInLegend: true,
    name: "Daily Cases",
    markerType: "square",
    xValueFormatString: "DD MMM, YYYY",
    color: "#F08080",
    dataPoints: [
      { x: new Date(data.body[99].date), y: data.body[99].newCasesByPublishDate },
      { x: new Date(data.body[98].date), y: data.body[98].newCasesByPublishDate },
      { x: new Date(data.body[97].date), y: data.body[97].newCasesByPublishDate },
      { x: new Date(data.body[96].date), y: data.body[96].newCasesByPublishDate },
      { x: new Date(data.body[95].date), y: data.body[95].newCasesByPublishDate },
      { x: new Date(data.body[94].date), y: data.body[94].newCasesByPublishDate },
      { x: new Date(data.body[93].date), y: data.body[93].newCasesByPublishDate },
      { x: new Date(data.body[92].date), y: data.body[92].newCasesByPublishDate },
      { x: new Date(data.body[91].date), y: data.body[91].newCasesByPublishDate },
      { x: new Date(data.body[90].date), y: data.body[90].newCasesByPublishDate },
      { x: new Date(data.body[89].date), y: data.body[89].newCasesByPublishDate },
      { x: new Date(data.body[88].date), y: data.body[88].newCasesByPublishDate },
      { x: new Date(data.body[87].date), y: data.body[87].newCasesByPublishDate },
      { x: new Date(data.body[86].date), y: data.body[86].newCasesByPublishDate },
      { x: new Date(data.body[85].date), y: data.body[85].newCasesByPublishDate },
      { x: new Date(data.body[84].date), y: data.body[84].newCasesByPublishDate },
      { x: new Date(data.body[83].date), y: data.body[83].newCasesByPublishDate },
      { x: new Date(data.body[82].date), y: data.body[82].newCasesByPublishDate },
      { x: new Date(data.body[81].date), y: data.body[81].newCasesByPublishDate },
      { x: new Date(data.body[80].date), y: data.body[80].newCasesByPublishDate },
      { x: new Date(data.body[79].date), y: data.body[79].newCasesByPublishDate },
      { x: new Date(data.body[78].date), y: data.body[78].newCasesByPublishDate },
      { x: new Date(data.body[77].date), y: data.body[77].newCasesByPublishDate },
      { x: new Date(data.body[76].date), y: data.body[76].newCasesByPublishDate },
      { x: new Date(data.body[75].date), y: data.body[75].newCasesByPublishDate },
      { x: new Date(data.body[74].date), y: data.body[74].newCasesByPublishDate },
      { x: new Date(data.body[73].date), y: data.body[73].newCasesByPublishDate },
      { x: new Date(data.body[72].date), y: data.body[72].newCasesByPublishDate },
      { x: new Date(data.body[71].date), y: data.body[71].newCasesByPublishDate },
      { x: new Date(data.body[70].date), y: data.body[70].newCasesByPublishDate },
      { x: new Date(data.body[69].date), y: data.body[69].newCasesByPublishDate },
      { x: new Date(data.body[68].date), y: data.body[68].newCasesByPublishDate },
      { x: new Date(data.body[67].date), y: data.body[67].newCasesByPublishDate },
      { x: new Date(data.body[66].date), y: data.body[66].newCasesByPublishDate },
      { x: new Date(data.body[65].date), y: data.body[65].newCasesByPublishDate },
      { x: new Date(data.body[64].date), y: data.body[64].newCasesByPublishDate },
      { x: new Date(data.body[63].date), y: data.body[63].newCasesByPublishDate },
      { x: new Date(data.body[62].date), y: data.body[62].newCasesByPublishDate },
      { x: new Date(data.body[61].date), y: data.body[61].newCasesByPublishDate },
      { x: new Date(data.body[60].date), y: data.body[60].newCasesByPublishDate },
      { x: new Date(data.body[59].date), y: data.body[59].newCasesByPublishDate },
      { x: new Date(data.body[58].date), y: data.body[58].newCasesByPublishDate },
      { x: new Date(data.body[57].date), y: data.body[57].newCasesByPublishDate },
      { x: new Date(data.body[56].date), y: data.body[56].newCasesByPublishDate },
      { x: new Date(data.body[55].date), y: data.body[55].newCasesByPublishDate },
      { x: new Date(data.body[54].date), y: data.body[54].newCasesByPublishDate },
      { x: new Date(data.body[53].date), y: data.body[53].newCasesByPublishDate },
      { x: new Date(data.body[52].date), y: data.body[52].newCasesByPublishDate },
      { x: new Date(data.body[51].date), y: data.body[51].newCasesByPublishDate },
      { x: new Date(data.body[50].date), y: data.body[50].newCasesByPublishDate },
      { x: new Date(data.body[49].date), y: data.body[49].newCasesByPublishDate },
      { x: new Date(data.body[48].date), y: data.body[48].newCasesByPublishDate },
      { x: new Date(data.body[47].date), y: data.body[47].newCasesByPublishDate },
      { x: new Date(data.body[46].date), y: data.body[46].newCasesByPublishDate },
      { x: new Date(data.body[45].date), y: data.body[45].newCasesByPublishDate },
      { x: new Date(data.body[44].date), y: data.body[44].newCasesByPublishDate },
      { x: new Date(data.body[43].date), y: data.body[43].newCasesByPublishDate },
      { x: new Date(data.body[42].date), y: data.body[42].newCasesByPublishDate },
      { x: new Date(data.body[41].date), y: data.body[41].newCasesByPublishDate },
      { x: new Date(data.body[40].date), y: data.body[40].newCasesByPublishDate },
      { x: new Date(data.body[39].date), y: data.body[39].newCasesByPublishDate },
      { x: new Date(data.body[38].date), y: data.body[38].newCasesByPublishDate },
      { x: new Date(data.body[37].date), y: data.body[37].newCasesByPublishDate },
      { x: new Date(data.body[36].date), y: data.body[36].newCasesByPublishDate },
      { x: new Date(data.body[35].date), y: data.body[35].newCasesByPublishDate },
      { x: new Date(data.body[34].date), y: data.body[34].newCasesByPublishDate },
      { x: new Date(data.body[33].date), y: data.body[33].newCasesByPublishDate },
      { x: new Date(data.body[32].date), y: data.body[32].newCasesByPublishDate },
      { x: new Date(data.body[31].date), y: data.body[31].newCasesByPublishDate },
      { x: new Date(data.body[30].date), y: data.body[30].newCasesByPublishDate },
      { x: new Date(data.body[29].date), y: data.body[29].newCasesByPublishDate },
      { x: new Date(data.body[28].date), y: data.body[28].newCasesByPublishDate },
      { x: new Date(data.body[27].date), y: data.body[27].newCasesByPublishDate },
      { x: new Date(data.body[26].date), y: data.body[26].newCasesByPublishDate },
      { x: new Date(data.body[25].date), y: data.body[25].newCasesByPublishDate },
      { x: new Date(data.body[24].date), y: data.body[24].newCasesByPublishDate },
      { x: new Date(data.body[23].date), y: data.body[23].newCasesByPublishDate },
      { x: new Date(data.body[22].date), y: data.body[22].newCasesByPublishDate },
      { x: new Date(data.body[21].date), y: data.body[21].newCasesByPublishDate },
      { x: new Date(data.body[20].date), y: data.body[20].newCasesByPublishDate },
      { x: new Date(data.body[19].date), y: data.body[19].newCasesByPublishDate },
      { x: new Date(data.body[18].date), y: data.body[18].newCasesByPublishDate },
      { x: new Date(data.body[17].date), y: data.body[17].newCasesByPublishDate },
      { x: new Date(data.body[16].date), y: data.body[16].newCasesByPublishDate },
      { x: new Date(data.body[15].date), y: data.body[15].newCasesByPublishDate },
      { x: new Date(data.body[14].date), y: data.body[14].newCasesByPublishDate },
      { x: new Date(data.body[13].date), y: data.body[13].newCasesByPublishDate },
      { x: new Date(data.body[12].date), y: data.body[12].newCasesByPublishDate },
      { x: new Date(data.body[11].date), y: data.body[11].newCasesByPublishDate },
      { x: new Date(data.body[10].date), y: data.body[10].newCasesByPublishDate },
      { x: new Date(data.body[9].date), y: data.body[9].newCasesByPublishDate },
      { x: new Date(data.body[8].date), y: data.body[8].newCasesByPublishDate },
      { x: new Date(data.body[7].date), y: data.body[7].newCasesByPublishDate },
      { x: new Date(data.body[6].date), y: data.body[6].newCasesByPublishDate },
      { x: new Date(data.body[5].date), y: data.body[5].newCasesByPublishDate },
      { x: new Date(data.body[4].date), y: data.body[4].newCasesByPublishDate },
      { x: new Date(data.body[3].date), y: data.body[3].newCasesByPublishDate },
      { x: new Date(data.body[2].date), y: data.body[2].newCasesByPublishDate },
      { x: new Date(data.body[1].date), y: data.body[1].newCasesByPublishDate },
      { x: new Date(data.body[0].date), y: data.body[0].newCasesByPublishDate }

    ]
  }]
});
chart.render();

function toogleDataSeries(e){
  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
    e.dataSeries.visible = false;
  } else{
    e.dataSeries.visible = true;
  }
  chart.render();
}

var chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title:{
		text: "Daily Cases last 14 days"
	},
	axisY: {
		title: "Daily Cases"
	},
	data: [{
		type: "column",
		showInLegend: false,
		dataPoints: [
      { x: new Date(data.body[13].date), y: data.body[13].newCasesByPublishDate },
      { x: new Date(data.body[12].date), y: data.body[12].newCasesByPublishDate },
      { x: new Date(data.body[11].date), y: data.body[11].newCasesByPublishDate },
      { x: new Date(data.body[10].date), y: data.body[10].newCasesByPublishDate },
      { x: new Date(data.body[9].date), y: data.body[9].newCasesByPublishDate },
      { x: new Date(data.body[8].date), y: data.body[8].newCasesByPublishDate },
      { x: new Date(data.body[7].date), y: data.body[7].newCasesByPublishDate },
      { x: new Date(data.body[6].date), y: data.body[6].newCasesByPublishDate },
      { x: new Date(data.body[5].date), y: data.body[5].newCasesByPublishDate },
      { x: new Date(data.body[4].date), y: data.body[4].newCasesByPublishDate },
      { x: new Date(data.body[3].date), y: data.body[3].newCasesByPublishDate },
      { x: new Date(data.body[2].date), y: data.body[2].newCasesByPublishDate },
      { x: new Date(data.body[1].date), y: data.body[1].newCasesByPublishDate },
      { x: new Date(data.body[0].date), y: data.body[0].newCasesByPublishDate }
		]
	}]
});
chart2.render();


}
);
