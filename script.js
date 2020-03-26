console.log("test");

var queryURL = "http://worldclockapi.com/api/json/utc/now";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function ajx(response) {

    
    // console.log(response.currentDateTime);

    //day of week element
    // console.log("day of week" + response.dayOfTheWeek);

    //Month element
    function curmonth() {
        var monthstr = response.currentDateTime.substr(5, 2);
        var monthnum = Number(monthstr);
        var montharr = ["","January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"];
        return montharr[monthnum];
    }
    
    // console.log("month " + curmonth()); 

    //day date
    var day = JSON.stringify(response.currentDateTime).substr(9, 2);

    // console.log("day " + day);

    //elements added together

    $("#currentDay").html("It is " + response.dayOfTheWeek + " the " + day + " of " + curmonth());

    //////////////////////////////////////////////////////////////////////


    // var curtime = JSON.stringify(response.currentDateTime).substr(12, 5);
    // console.log("time " + curtime);

    function curtime() {
        var curtimestr1 = response.currentDateTime.substr(11, 2);
        var curtimestr2 = response.currentDateTime.substr(14, 2);
        var curtimenum = Number(curtimestr1 + curtimestr2);
        return curtimenum;
    }

    var curtim =  curtime()

    // console.log("time " + curtime() + " " + curtim);
    

    $(".time-block").html(function() {
        var varst = $(this).children("input").attr('id');
        var varnum = Number(varst);

        if (varnum > curtim) { 
            $(this).toggleClass("future");

        }
      });

    //////////////////////////////////////////////////////////////////////

    

    $(".form-control").html(function() {
        console.log(localStorage.getItem($(this).attr("id")));
        $(this).val(localStorage.getItem($(this).attr("id")));
        // localStorage.setItem($(this).attr("id"),$(this).val());
        localStorage.getItem($(this).attr("id"));
    })



    $("#submit").click(function() {
        $(".form-control").html(function() {
            console.log($(this).attr("id") + " " + $(this).val());
            localStorage.setItem($(this).attr("id"),$(this).val());
        })
      })
});
