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
    //use 0800 0900 to compare to hhhh value? didn't worok 
    //resort to moment.hour and then split "hour" and compare to timeNow. 
    let timeNow = moment().hour();
    $(".time-block").each(function(){ 
        let checkTime = parseInt($(this).attr("id").split("hour"))
            if (checkTime < timeNow){ 
                $(this).addClass("bg-dark, text-white, text-decoration-line-through")
            }
            else if (checkTime > timeNow){ 
                $(this).addClass("bg-light")
            }
    });

    //save button will save to localStorage
    $(".saveBtn").on("click",saveButton);
    function saveButton(){ 
        let text = $(this).siblings(".text").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time,text);
    }
   
    //load contetns on refresh from localStorage
    $(".0800").siblings(".text").val(localStorage.getItem("0800")); 
        console.log(localStorage.getItem("0800"));
        console.log(typeof(localStorage.getItem("0800")));

    //could also do: $(".0800.textarea").val(localStorge.getItem("0800"));
})


