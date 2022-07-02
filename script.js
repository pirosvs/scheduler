// Need to use an input form for text -- need to take the user input on event click submit button?
// and set it in local storage.

// Need to, upon initializing page, render local storage items?

// Need label each form with the corresponding hour

// Need to add style to boxes based upon time

// indiv variable for each? Is there a way I can avoid doing this l;kajsdklfjsd and still have them work with
// the time 

// Displays the current date at the top of the page 
var today = moment().format('MMM Do, YYYY');
$("#currentDay").text(today);

var saveBtnEl = document.getElementsByClassName('saveBtn');

var saveInfo = function(event) {

};

saveBtnEl.on('click', saveInfo);

