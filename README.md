# scheduler

## Deployment Link
(https://pirosvs.github.io/scheduler/)

## Description
![Display of color-coded times] (https://ibb.co/VNFSJVB)
![Schedule at smaller screen size] (https://ibb.co/0X9JY4C)

This project attempts to make use of third-party APIs such as jQuery and Moment.js in order to provide a functional scheduler that users can input information into, saved in local storage for the rest of the day until around 1am when it gets cleared. The input forms change color based on what time it is to clearly mark what times have already passed, what time it is now, and how many hours are left in the day still. This offers an easy to understand daily schedule for work-day planning for those working a typical office shift.

This project makes use of third-party APIs such as Bootstrap for simpler design and jQuery for simplification of Javascript methods, as well as Moment.js for current time information. So we have methods such as 
```
moment().hour();
```
or
```
var today = moment().format('dddd, MMM Do, YYYY');
$("#currentDay").text(today);
```
to get the current hour to use for setting the color coding or to display the current date. Bootstrap's screen-size column sizing classes were also used to create a more responsive product. Hence

```
<div class="col-sm-3 col-md-6 col-lg-9">
```
to allow the time, input form, and save button to remain in line on the page regardless of screen size.

## Credit
Credit to the Trilogy Education in tandem with UCB coding bootcamp for the code for the non-Bootstrap classes and starter HTML.

## License
This project falls under the MIT license.

## Author
Damien Armstrong can be found on: Linkedin (https://www.linkedin.com/in/damien-armstrong-412319138/) Github (https://github.com/pirosvs)