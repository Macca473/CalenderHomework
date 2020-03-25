console.log("test");

var queryURL = "http://worldclockapi.com/api/json/utc/now";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function ajx(response) {

    console.log(response.currentDateTime);
    // response = JSON.stringify(response);


    // function curday() {
    //     var daynum = response.day_of_week;
    //     var dayarr = ["Sunday", "Monday", "Tusday", "Wednesday", "Thusday", "Friday", "Saterday"];
    //     return dayarr[daynum];
    // }

    console.log("day of week" + response.dayOfTheWeek);

    function curmonth() {
        var monthstr = response.currentDateTime.substr(5, 2);
        var monthnum = Number(monthstr);
        var montharr = ["","January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"];
        return montharr[monthnum];
    }
    
    console.log("month " + curmonth()); 

    var day = JSON.stringify(response.currentDateTime).substr(9, 2);

    console.log("day " + day);

    // console.log($(response).filter(response > 1));
    // console.log("filtered date" + datetime); 
    

    $("#currentDay").html("It is " + response.dayOfTheWeek + " the " + day + " of " + curmonth());
})

// (response => response.length > 6);