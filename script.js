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

console.log(moment().hour());

// Gets local storage as page initialized
localStorage.getItem(info);

var saveBtnEl = $('.saveBtn');

// var saveInfo = function(event) {
//     // error around preventDefault, which is not preventing the default??
//     // information is not even being taken in it looks like? console log shows nothing
//     // looks like button isn't working at all either, only can get action from pressing enter
//     // event.preventDefault();
//     info = {
//         tennotes : tenInfo.val(),
//     }    
//     localStorage.setItem("notes", JSON.stringify(info));
//     // localStorage.getItem("text");
//     console.log(info);
// };

// this set up will put it in the console log when enter is pressed instead of refreshing the page but doesn't save to
// local storage and does not call the button what in the HELL is wrong with my buttons
$("button").click(function(event) {
    event.preventDefault();
    info = {
        tennotes : tenInfo.val(),
    }    
    localStorage.setItem("notes", JSON.stringify(info));
    console.log(info);
});

// Changes style of form based on if the given time is already past, is in the future, or is the current hour
if (moment().hour() == value of each form) {
    form.addClass('present');
} else if (moment().hour() > value) {
    form.addClass('future');
} else if (moment().hour() < value) {
    form.addClass('past');
};

// Clears out storage after midnight
if (moment().hour() == 1) {
    localStorage.clear();
}