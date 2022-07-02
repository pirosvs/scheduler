// Displays the current date at the top of the page 
var today = moment().format('dddd, MMM Do, YYYY');
$("#currentDay").text(today);

var nineInfo = $('#nineNotes');
var tenInfo = $('#tenNotes');
var elevenInfo = $("#elevenNotes");
var twelveInfo = $('#twelveNotes');
var thirteenInfo = $('#thirteenNotes');
var fourteenInfo = $('#fourteenNotes');
var fifteenInfo  = $('#fifteenNotes');
var sixteenInfo = $('#sixteenNotes');
var seventeenInfo = $('#seventeenNotes');

// Array of each input form so that I don't have to create individual conditionals below
var forms = [nineInfo, tenInfo, elevenInfo, twelveInfo, thirteenInfo, fourteenInfo, fifteenInfo, sixteenInfo, seventeenInfo];
var info = {};

console.log(moment().hour());

// Gets local storage as page loads
localStorage.getItem(info);

var saveBtnEl = $('.saveBtn');

// this set up will put it in the console log when enter is pressed instead of refreshing the page but doesn't save to
// local storage and does not call the button what in the HELL is wrong with my buttons
// also this looks like it would grab all values for any button which is probably wrong but it doesn't work anyways so
$("button").click(function(event) {
    event.preventDefault();
    info = {
        nineNotes : nineInfo.val(),
        tennotes : tenInfo.val(),
        elevenNotes : elevenInfo.val(),
        twelveNotes : twelveInfo.val(),
        thirteenNotes : thirteenInfo.val(),
        fourteenNotes : fourteenInfo.val(),
        fifteenNotes : fifteenInfo.val(),
        sixteenNotes : sixteenInfo.val(),
        seventeenNotes : seventeenInfo.val(),
    }    
    localStorage.setItem("notes", JSON.stringify(info));
    console.log(info);
});

// Changes style of form based on if the given time is already past, is in the future, or is the current hour
// Need to have number values for this to work -- would giving them key pairs work somehow?
for (i=0; i<forms.length; i++) {
    if (moment().hour() == forms[i]) {
        forms[i].addClass('present');
    } else if (moment().hour() > forms[i]) {
        forms[i].addClass('future');
    } else if (moment().hour() < forms[i]) {
        forms[i].addClass('past');
    }
};

// Clears out storage after 1am
if (moment().hour() == 1) {
    localStorage.clear();
}


// need to connect each input id to a variable with a number value so that the number value can be judged and
// the input with the given id can be affected based on that judgement

// Setting the input classes individually because I am unable to just make it one conditional at this time
if (moment().hour() > 9) {
    nineInfo.addClass('past');
} else if (moment().hour() == 9) {
    nineInfo.addClass('present');
} else if (moment().hour() < 9) {
    nineInfo.addClass('future');
};

if (moment().hour() > 10) {
    tenInfo.addClass('past');
} else if (moment().hour() == 10) {
    tenInfo.addClass('present');
} else if (moment().hour() < 10) {
    tenInfo.addClass('future');
};

if (moment().hour() > 11) {
    elevenInfo.addClass('past');
} else if (moment().hour() == 11) {
    elevenInfo.addClass('present');
} else if (moment().hour() < 11) {
    elevenInfo.addClass('future');
};

if (moment().hour() > 12) {
    twelveInfo.addClass('past');
} else if (moment().hour() == 12) {
    twelveInfo.addClass('present');
} else if (moment().hour() < 12) {
    twelveInfo.addClass('future');
};

if (moment().hour() > 13) {
    thirteenInfo.addClass('past');
} else if (moment().hour() == 9) {
    thirteenInfo.addClass('present');
} else if (moment().hour() < 9) {
    thirteenInfo.addClass('future');
};

if (moment().hour() > 14) {
    fourteenInfo.addClass('past');
} else if (moment().hour() == 14) {
    fourteenInfo.addClass('present');
} else if (moment().hour() < 14) {
    fourteenInfo.addClass('future');
};

if (moment().hour() > 15) {
    fifteenInfo.addClass('past');
} else if (moment().hour() == 15) {
    fifteenInfo.addClass('present');
} else if (moment().hour() < 15) {
    fifteenInfo.addClass('future');
};

if (moment().hour() > 16) {
    sixteenInfo.addClass('past');
} else if (moment().hour() == 16) {
    sixteenInfo.addClass('present');
} else if (moment().hour() < 16) {
    sixteenInfo.addClass('future');
};

if (moment().hour() > 17) {
    seventeenInfo.addClass('past');
} else if (moment().hour() == 17) {
    seventeenInfo.addClass('present');
} else if (moment().hour() < 17) {
    seventeenInfo.addClass('future');
};