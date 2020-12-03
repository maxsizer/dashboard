

$.getJSON(
"https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=cumCasesByPublishDate&metric=cumDeaths28DaysByDeathDate&metric=newCasesByPublishDate&metric=newDeaths28DaysByDeathDate&format=json",
function(data) {
  console.log(data);

  var totdeaths = data.body[1].cumDeaths28DaysByDeathDate;
  var deaths = data.body[1].newDeaths28DaysByDeathDate;
  var totcases = data.body[0].cumCasesByPublishDate;
  var cases = data.body[0].newCasesByPublishDate;

  $('.totdeaths').append(totdeaths);
  $('.deaths').append(deaths);
  $('.totcases').append(totcases);
  $('.cases').append(cases);
  }
);
