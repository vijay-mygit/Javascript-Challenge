// from data.js
var tableData = data;

// Code that appends a table to your web page and then adds new rows of data for each UFO sighting.
var tbody = d3.select("tbody");
console.log(tableData);

tableData.forEach((ufo)=>{
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });

});

//JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click",newDate);
form.on("submit",newDate);

// Creating a function to check for filter and update data accordingly.
function newDate(){

    d3.event.preventDefault();
    var inputBox = d3.select("#datetime");
    var inputDate = inputBox.property("value");    
    var filterData = tableData.filter(tableData => tableData.datetime === inputDate);    
    tbody.html("");
    if (filterData.length === 0) {
        tmsg = tbody.text("Nobody Visited Earth");
        }
    else {
        filterData.forEach((ufo)=>{
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key,value])=>{
                var cell = row.append("td");
                cell.text(value);
            });    
        });
    };    
};

// Function to reset the table to original values.

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

// Click of reset button will reset the table to original.

var resetButtton = d3.select("#reset-btn");
resetButtton.on("click",resetTable);






