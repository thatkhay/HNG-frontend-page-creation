// alert(7)

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
const currentDayOfTheWeek = daysOfWeek[currentDayIndex];

const currentUTCTime = currentDate.toUTCString();

// Update the current day of the week and UTC time in the HTML
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;