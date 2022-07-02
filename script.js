// Need to use an input form for text -- need to take the user input on event click submit button?
// and set it in local storage.

// Need to, upon initializing page, render local storage items?

// Need label each form with the corresponding hour

// Need to add style to boxes based upon time

// indiv variable for each? Is there a way I can avoid doing this l;kajsdklfjsd and still have them work with
// the time 

// Displays the current date at the top of the page 
var today = moment().format('dddd, MMM Do, YYYY');
$("#currentDay").text(today);

var nineInfo = document.getElementById("nineNotes");
var tenInfo = $('#tenNotes');
var elevenInfo = $("#elevenNotes");
var twelveInfo = $("#twelveNotes");
var thirteenInfo = $('#thirteenNotes');
var fourteenInfo = $('#fourteenNotes');
var fifteenInfo  = $('#fifteenNotes');
var sixteenInfo = $('#sixteenNotes');
var seventeenInfo = $('#seventeenNotes');
var eighteenInfo = $('#eighteenNotes');
var nineteenInfo = $('#nineteenNotes');
var twentyInfo = $('#twentyNotes');
var twentyOneInfo = $('#twentyOneNotes');
var twentyTwoInfo = $('#twentyTwoNotes');
var twentyThreeInfo = $('#twentyThreeNotes');
var twentyFourInfo = $('#twentyFourNotes');
var info = {};

document.localStorage.getItem(info);

var saveBtnEl = document.getElementsByClassName('saveBtn');

var saveInfo = function(event) {
    // error around preventDefault, which is not preventing the default??
    // information is not even being taken in it looks like? console log shows nothing
    // looks like button isn't working at all either, only can get action from pressing enter
    event.preventDefault();
    info = {
        tennotes : tenInfo.value.trim(),
    }    
    localStorage.setItem("notes", JSON.stringify(info));
    // localStorage.getItem("text");
    console.log(info);
    // needs to take from specific id and apply to that placeholder only
    // var please = document.getElementById(nineNotes).input.val();
    // placeholder.textContent = info;
    // localStorage.setItem("info", info);
};

saveBtnEl.on('submit', saveInfo());

function clickWork() {
    console.log("click");
}

