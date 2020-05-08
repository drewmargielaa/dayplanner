$(document).ready(function () {
    
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    $(".time-block").each(function () {
        let current_time  = moment().format('h:mm:ss a');
        current_time = parseInt(current_time.split(":")[0]);
        let calendar_time = parseInt($(this).attr("id").split("-")[1]);

        if ( current_time > calendar_time){
            $(this ).find( "textarea" ).css( "background-color", "red" );
        } else {
            $(this ).find( "textarea" ).css( "background-color", "green" );
        }
       

    });

    $(".saveBtn").on("click", function () {
        let time = $(this).parent().attr("id");
        let value = $(this).siblings(".description").val();
        localStorage.setItem(time, value);
    })
});
//trying to compare time block hour to current hour, fetch current hour using moment



