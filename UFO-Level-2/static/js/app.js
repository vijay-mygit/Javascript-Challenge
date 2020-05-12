var tableData = data;

// Code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody");
console.log(tableData);

function resetTable() {
    tbody.html("")
    var table = tableData.forEach((ufo)=>{
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    
    });
};

// displaying the original table
resetTable();
// Getting all the row elemnts from the html table
var rows = document.getElementById("ufo-table").querySelectorAll("tr");

// creating a function to get unique values from an array
const distinct = (value,index,self)=>{
  return self.indexOf(value) === index;
}

// Creating Unique Cities Dropdown list
function cityDropdown() {
  var citiesAll = [];  
  // loop through all the rows in original table and collect the city names
  for (i=1;i<rows.length;i++){
    var cityFind = rows[i].cells[1];
    citiesAll.push(cityFind.textContent);
  };  
  // obtain unique city names from the above list to remove repetition of city names
  var cities = citiesAll.filter(distinct);
  // sort the city names in alphabetical order
  cities = cities.sort();
  // select the html tag to push the city names to
  var citySelect = document.getElementById('city-filter');
  // loop through the city names and push each city name into the html code
  for(var i = 0; i < cities.length; i++) {
    // create the option tag to which the city name will be pushed to
    var option = document.createElement("option");
    option.text = cities[i];
    citySelect.add(option);
  };
};

// Creating Unique States Dropdown list and repeting the same process as above for the rest of the filters.
function stateDropdown() {
  var statesAll = [];
  for (i=1;i<rows.length;i++){
    var stateFind = rows[i].cells[2];
    statesAll.push(stateFind.textContent);
  };
  var states = statesAll.filter(distinct);
  states = states.sort();
  var stateSelect = document.getElementById('state-filter');
  for(var i = 0; i < states.length; i++) {
    var option = document.createElement("option");
    option.text = states[i];
    stateSelect.add(option);
  };
}

// Creating Unique Country Dropdown list
function countryDropdown() {
  var countriesAll = [];
  for (i=1;i<rows.length;i++){
    var countryFind = rows[i].cells[3];
    countriesAll.push(countryFind.textContent);
  };
  var countries = countriesAll.filter(distinct);
  countries = countries.sort();
  var countrySelect = document.getElementById('country-filter');
  for(var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.text = countries[i];
    countrySelect.add(option);
  };
}

// Creating Unique Shape Dropdown list
function shapeDropdown() {
  var shapesAll = [];
  for (i=1;i<rows.length;i++){
    var shapeFind = rows[i].cells[4];
    shapesAll.push(shapeFind.textContent);
  };
  var shapes = shapesAll.filter(distinct);
  shapes = shapes.sort();
  var shapeSelect = document.getElementById('shape-filter');
  for(var i = 0; i < shapes.length; i++) {
    var option = document.createElement("option");
    option.text = shapes[i];
    shapeSelect.add(option);
  };
}

cityDropdown();
stateDropdown();
countryDropdown();
shapeDropdown();

// Filter variables being used.
var
  dateFilter, cityFilter, stateFilter, countryFilter, shapeFilter, durationFilter;

// Define function to perform the filtering of the table.
function updateFilters() {
    result = true; 
    
    // Original table is displayed if the date field has no date and not changed.
    if (dateFilter && dateFilter != 'All (enter date as m/d/yyyy to filter)') {
      // loop through each row of table and collect the date value
      for (var i=1;i<rows.length;i++){
        var dateCell = rows[i].cells[0];
        // compare content of date cell in each row to see if it matches the enteres date
        if (dateCell.textContent !== dateFilter){
          // if date does not match then supress the display of the row in the table
          rows[i].style.display = "none";
        } 
      };
      result = result;
    }
        
    // Filtering the data with each filter with the same logic as above.
    if (cityFilter && cityFilter != 'All') {
      var rows_1 = document.getElementById("ufo-table").querySelectorAll("tr");
      for (var i=1;i<rows_1.length;i++){
        var cityCell = rows_1[i].cells[1];
        if (cityCell.textContent !== cityFilter){
          rows_1[i].style.display = "none";
        } 
      };
      result = result;
    }

    // Filtering the data with each filter with the same logic as above.
    if (stateFilter && stateFilter != 'All') {
      var rows_1 = document.getElementById("ufo-table").querySelectorAll("tr");
      for (var i=1;i<rows_1.length;i++){
        var stateCell = rows_1[i].cells[2];
        if (stateCell.textContent !== stateFilter){
          rows_1[i].style.display = "none";
        } 
      };
      result = result;
    }

    // Filtering the data with each filter with the same logic as above.
    if (countryFilter && countryFilter != 'All') {
      var rows_1 = document.getElementById("ufo-table").querySelectorAll("tr");
      for (var i=1;i<rows_1.length;i++){
        var countryCell = rows_1[i].cells[3];
        if (countryCell.textContent !== countryFilter){
          rows_1[i].style.display = "none";
        } 
      };
      result = result;
    }

    // Filtering the data with each filter with the same logic as above.
    if (shapeFilter && shapeFilter != 'All') {
      var rows_1 = document.getElementById("ufo-table").querySelectorAll("tr");
      for (var i=1;i<rows_1.length;i++){
        var shapeCell = rows_1[i].cells[4];
        if (shapeCell.textContent !== shapeFilter){
          rows_1[i].style.display = "none";
        } 
      };
      result = result;
    }

    return result;  
};

// Creating each filter and activation code.
// Date Dropdown Filter
// Event created once the value in the field is changed
d3.select('#date-filter').on('change', function() {    
  for (var i=1;i<rows.length;i++){
    rows[i].style.display = "";
  }
  // collecting the value entered in the filter field.
  dateFilter = this.value;
  // running the function to perform the table filter.
  updateFilters();
});

// City Dropdown Filter
d3.select('#city-filter').on('change', function() {
  for (var i=1;i<rows.length;i++){
    rows[i].style.display = "";
  }
  cityFilter = this.value;
  updateFilters();
});

// State Dropdown Filter
d3.select('#state-filter').on('change', function() {
  for (var i=1;i<rows.length;i++){
    rows[i].style.display = "";
  }
  stateFilter = this.value;
  updateFilters();
});

// Country Dropdown Filter
d3.select('#country-filter').on('change', function() {
  for (var i=1;i<rows.length;i++){
    rows[i].style.display = "";
  }
  countryFilter = this.value;
  updateFilters();
});

// Shape Dropdown Filter
d3.select('#shape-filter').on('change', function() {
  for (var i=1;i<rows.length;i++){
    rows[i].style.display = "";
  }
  shapeFilter = this.value;
  updateFilters();
});








