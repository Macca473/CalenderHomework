# CalenderHomework

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

	will refrence currect day:
		Used http://worldtimeapi.org as my API, it listed the date and the day oof the week:

----------------------------------------------------------------------------------------------------------------

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

	same for each day so little to no change

----------------------------------------------------------------------------------------------------------------

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
	
	turn the time ref into a vareable

----------------------------------------------------------------------------------------------------------------
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist