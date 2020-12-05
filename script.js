

$.getJSON(
"https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumCasesByPublishDate&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&metric=cumDeaths28DaysByPublishDate&format=json",
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
  }
);
