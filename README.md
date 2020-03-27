# CalenderHomework

Heres the link but it doesn't seam to link to the api: https://macca473.github.io/CalenderHomework/index.html

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

	will refrence currect day:
		Used http://worldtimeapi.org as my API, it listed the date and the day oof the week:
		will create an array for days of the week and month, and return as a more 'human' date

----------------------------------------------------------------------------------------------------------------

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

	same for each day so little to no change

----------------------------------------------------------------------------------------------------------------

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
	
	turn the time ref into a vareable, and change the class of future time blocks depending on whether the time blocks id is greater 	 then the time var

----------------------------------------------------------------------------------------------------------------
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
	
	when save button is clicked it saves the time blocks and their reminders to the local storage
	
WHEN I refresh the page
THEN the saved events persist

	saved reminders are added to time blocks from local storage
