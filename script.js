

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
    text: "Daily Deaths"
  },
  axisX:{
    valueFormatString: "DD MMM, YYYY",
    crosshair: {
      enabled: true,
      snapToDataPoint: true
    }
  },
  axisY: {
    title: "Daily Deaths",
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
    name: "Daily Deaths",
    markerType: "square",
    xValueFormatString: "DD MMM, YYYY",
    color: "#F08080",
    dataPoints: [
      { x: new Date(data.body[6].date), y: data.body[6].newDeaths28DaysByPublishDate },
      { x: new Date(data.body[5].date), y: data.body[5].newDeaths28DaysByPublishDate },
      { x: new Date(data.body[4].date), y: data.body[4].newDeaths28DaysByPublishDate },
      { x: new Date(data.body[3].date), y: data.body[3].newDeaths28DaysByPublishDate },
      { x: new Date(data.body[2].date), y: data.body[2].newDeaths28DaysByPublishDate },
      { x: new Date(data.body[1].date), y: data.body[1].newDeaths28DaysByPublishDate },
      { x: new Date(data.body[0].date), y: data.body[0].newDeaths28DaysByPublishDate }

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
}
);
