$.getJSON(
"https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumPeopleVaccinatedCompleteByPublishDate&metric=cumPeopleVaccinatedFirstDoseByPublishDate&metric=cumPeopleVaccinatedSecondDoseByPublishDate&metric=newPeopleVaccinatedFirstDoseByPublishDate&metric=newPeopleVaccinatedSecondDoseByPublishDate&format=json",
function(data) {
  console.log(data);

  var totvac = data.body[0].cumPeopleVaccinatedCompleteByPublishDate;
  var newfirstvac = data.body[0].newPeopleVaccinatedFirstDoseByPublishDate;
  var newsecondvac = data.body[0].newPeopleVaccinatedSecondDoseByPublishDate;
  var totfirstvac = data.body[0].cumPeopleVaccinatedFirstDoseByPublishDate;
  var totsecondvac = data.body[0].cumPeopleVaccinatedSecondDoseByPublishDate;
  var date = data.body[0].date;



  $('.totvac').append(totvac);
  $('.newfirstvac').append(newfirstvac);
  $('.newsecondvac').append(newsecondvac);
  $('.totfirstvac').append(totfirstvac);
  $('.totsecondvac').append(totsecondvac);
  $('.date').append(date);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
      text: "Daily first doses last 20 days"
    },
    axisX:{
      valueFormatString: "DD MMM, YYYY",
      crosshair: {
        enabled: true,
        snapToDataPoint: true
      }
    },
    axisY: {
      title: "Daily First Doses",
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
      name: "Daily First Doses",
      markerType: "square",
      xValueFormatString: "DD MMM, YYYY",
      color: "#F08080",
      dataPoints: [
        { x: new Date(data.body[20].date), y: data.body[20].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[19].date), y: data.body[19].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[18].date), y: data.body[18].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[17].date), y: data.body[17].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[16].date), y: data.body[16].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[15].date), y: data.body[15].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[14].date), y: data.body[14].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[13].date), y: data.body[13].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[12].date), y: data.body[12].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[11].date), y: data.body[11].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[10].date), y: data.body[10].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[9].date), y: data.body[9].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[8].date), y: data.body[8].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[7].date), y: data.body[7].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[6].date), y: data.body[6].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[5].date), y: data.body[5].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[4].date), y: data.body[4].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[3].date), y: data.body[3].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[2].date), y: data.body[2].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[1].date), y: data.body[1].newPeopleVaccinatedFirstDoseByPublishDate },
        { x: new Date(data.body[0].date), y: data.body[0].newPeopleVaccinatedFirstDoseByPublishDate }

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
  theme: "light2",
  title:{
    text: "Daily Second Doses last 20 days"
  },
  axisX:{
    valueFormatString: "DD MMM, YYYY",
    crosshair: {
      enabled: true,
      snapToDataPoint: true
    }
  },
  axisY: {
    title: "Daily Second Doses",
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
    name: "Daily Second Doses",
    markerType: "square",
    xValueFormatString: "DD MMM, YYYY",
    color: "#F08080",
    dataPoints: [
      { x: new Date(data.body[19].date), y: data.body[19].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[18].date), y: data.body[18].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[17].date), y: data.body[17].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[16].date), y: data.body[16].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[15].date), y: data.body[15].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[14].date), y: data.body[14].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[13].date), y: data.body[13].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[12].date), y: data.body[12].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[11].date), y: data.body[11].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[10].date), y: data.body[10].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[9].date), y: data.body[9].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[8].date), y: data.body[8].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[7].date), y: data.body[7].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[6].date), y: data.body[6].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[5].date), y: data.body[5].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[4].date), y: data.body[4].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[3].date), y: data.body[3].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[2].date), y: data.body[2].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[1].date), y: data.body[1].newPeopleVaccinatedSecondDoseByPublishDate },
      { x: new Date(data.body[0].date), y: data.body[0].newPeopleVaccinatedSecondDoseByPublishDate }

    ]
  }]
});
chart2.render();


}
);
