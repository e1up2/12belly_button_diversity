//console.log(cityGrowths);

// sort cities by growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse();

// slice top 5 cities by population growth
var topFiveCities = sortedCities.slice(0,7);

// Create 2 arrays containing top 5 city names and growth figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// Render arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth (2016-2017)"}
};
Plotly.newPlot("bar-plot", data, layout);