// today displayed 
//time blocks color coded to indicate past/present/future
//save text in timeblock 
//save to localStorage 
//load localStorage to timeblock on refresh

$(function(){ 

    //clock to display day 
    dayofWeek();
    function dayofWeek(){ 
    var today = moment();
    $("#currentDay").text(today.format("dddd"));
    }

    // function for color change
    let timeNow = moment().hour(); //moment.hour to return the hour. 
        console.log(timeNow)
    $(".time-block").each(function(){ 
        let checkTime = parseInt($(this).attr("id").split("hour")); //
            console.log(checkTime);
            if (checkTime < timeNow){   //determine if time block is before clock or after. 
                $(this).addClass("bg-secondary");
                $(this).children(".text").addClass("text-decoration-line-through")
            }
            else if (checkTime > timeNow){  //determine if time block is before clock or after. 
                $(this).addClass("bg-info")
            };
    });

    //save button will save to localStorage
    $(".saveBtn").on("click",saveButton);
    function saveButton(){ 
        let text = $(this).siblings(".text").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time,text);
    }
   
    //load contetns on refresh from localStorage
    $(".8").siblings(".text").val(localStorage.getItem("8")); 
        // console.log(localStorage.getItem("0800"));
        // console.log(typeof(localStorage.getItem("0800")));
        //could also do: $(".0800.textarea").val(localStorge.getItem("0800"));
})
