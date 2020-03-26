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

    var curtim =  curtime() + 900;

    console.log("time " + curtime() + " " + curtim)
    

    $(".time-block").html(function() {
        var varst = $(this).children("input").attr('id');
        var varnum = Number(varst);
        // console.log("varnum " + varnum);s

        if (varnum > 1200) { 

            // console.log(firstnum + "yes");
            // $(this).remove("present");
            //     var greencss = $(this).prepend();
            //     greencss.toggleClass("future");

            // $(".time-block").toggleClass("future");

            $(this).toggleClass("future");

                // $(".time-block").init(function() {
                //     // $(this).remove(".present");
                //     $(this).toggleClass("future");
                // })
        }
      });

    remcolfun();

    // var varst =     $(".time-block").children("input").index();
    //     var varnum = Number(varst); 
    //     console.log("varnum " + varst);
});


// (response => response.length > 6);

// $(".number").click(function() {
//     firstnum = $(this).text();
//     console.log(firstnum);
//     addingnums();
//   })