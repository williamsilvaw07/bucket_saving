$("#edit_per").click(function () {


    $(".percentage").addClass("percentage_show");

    $(".save_per").addClass("percentage_show");
    $(".edit_perbtn").addClass("hide_class");


})

///first box section 
var inputFirst = 45;

//////end


///Second box section 
var inputSecond = 17.9;

//////end




///Third box section 
var inputThird = 15.4;

//////end




///forth box section 
var inputforth = 10;

//////end




///fith box section 
var inputFith = 11.7;

//////end



$("#save_per").click(function () {


    $(".save_per").removeClass("percentage_show");
    $(".percentage").removeClass("percentage_show");
    $(".edit_perbtn").removeClass("hide_class");



    inputFirst = document.querySelector("#first_per").value;
    inputSecond = document.querySelector("#sec_per").value;
    inputThird = document.querySelector("#third_per").value;
    inputforth = document.querySelector("#forth_per").value;
    inputFith = document.querySelector("#fith_per").value;
    console.log(inputThird)
})



$("#cal").click(function () {


    var stringNumberFrist = parseFloat(inputFirst, 10)
    var stringNumberSecond = parseFloat(inputSecond, 10)
    var stringNumberThird = parseFloat(inputThird, 10)
    var stringNumberForth = parseFloat(inputforth, 10)
    var stringNumberFith = parseFloat(inputFith, 10)
    var stringNumberFith = parseFloat(inputFith, 10)
    var uuyuy = stringNumberFrist + stringNumberSecond + stringNumberThird + stringNumberForth + stringNumberFith;



    if (stringNumberFrist + stringNumberSecond + stringNumberThird + stringNumberForth + stringNumberFith === 100) {

        var boxCalFirst = inputFirst / 100;
        var boxCalSecond = inputSecond / 100;
        var boxCalThird = inputThird / 100;
        var boxCalforth = inputforth / 100;
        var boxCalFith = inputFith / 100;


        let wagesInput = document.querySelector("#wages").value;



        let firstBox = document.querySelector("#firstbox");
        var firstCalFunc = boxCalFirst;
        let firstCal = firstCalFunc * wagesInput;
        var f = firstCal.toFixed(1);
        firstBox.value = '£' + f;




        let secondBox = document.querySelector("#secondbox");
        let secondCalFunc = boxCalSecond
        let secondCal = secondCalFunc * wagesInput;
        var s = secondCal.toFixed(1);
        secondBox.value = '£' + s;




        let thirdBox = document.querySelector("#thirdbox");
        let thirdCalFunc = boxCalThird;
        let thirdCal = thirdCalFunc * wagesInput;
        var t = thirdCal.toFixed(1);
        thirdBox.value = '£' + t;




        let fourthBox = document.querySelector("#fourthbox");
        let fourthCalFunc = boxCalforth;
        let fourthCal = fourthCalFunc * wagesInput;

        var fo = fourthCal.toFixed(1);
        fourthBox.value = '£' + fo;


        let fithBox = document.querySelector("#fithbox");
        let fithCalFunc = boxCalFith;
        let fithCal = fithCalFunc * wagesInput;
        var fi = fithCal.toFixed(1);
        fithBox.value = '£' + fi;

    } else {

        $(".main").addClass("main_disable")
        var alertBox = document.querySelector("#alert");
        alertBox.classList.remove("alert_div_hide");
        alertBox.classList.add("alert_div_show");

        $("#close").click(function () {
            alertBox.classList.add("alert_div_hide");
            $(".main").removeClass("main_disable")
        })
    }

})
